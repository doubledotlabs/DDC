//The Could Functions for Firebase SDK to create Cloud Functions and setup triggers.
const functions = require('firebase-functions');
const gcs = require('@google-cloud/storage')({keyFilename: 'serviceAccountKey.json'});
const path = require('path');
const os = require('os');
const fs = require('fs');
const util = require('util');
const ApkReader = require('adbkit-apkreader');
const cors = require('cors');

//The Firebase Admin SDK to access the Firebase Realtime Database.
const admin = require('firebase-admin');
admin.initializeApp(functions.config().firebase);

exports.createUser = functions.auth.user()
    .onCreate(event => {
        var path = "users/" + event.data.uid;

        var obj = {};
        obj[path + "/name"] = event.data.displayName;
        obj[path + "/image"] = event.data.photoURL;

        return admin.database().ref().update(obj).then(function() {
            //yay
        }, function(error) {
            console.log("Error adding user: ", error);
        });
    });

exports.writeApp = functions.database.ref("/apps/{appId}")
    .onWrite(event => {
        if (!event.data.exists() && !event.data.previous.exists()) {
            return null;
        }

        var data = (event.data.exists() ? event.data : event.data.previous);

        var userPath = "users/" + data.child("author").val() + "/apps/" + event.params.appId;

        if (event.data.previous.exists() && !event.data.exists()) {
            //remove app
            var obj = {};
            obj[userPath] = null;
            return admin.database().ref().update(obj).then(function() {
                //yay
            }, function(error) {
                console.log("Error removing app: ", error);
            });
        } else if (event.data.exists()) {
            //add app
            var obj = {};
            obj[userPath] = true;
            return admin.database().ref().update(obj).then(function() {
                //yay
            }, function(error) {
                console.log("Error adding app: ", error);
            });
        }
    });

exports.writeReview = functions.database.ref("/reviews/{reviewId}")
    .onWrite(event => {
        if (!event.data.exists() && !event.data.previous.exists()) {
            return null;
        }

        var data = (event.data.exists() ? event.data : event.data.previous);

        var appPath = "apps/" + data.child("app").val().split(".").join("_") + "/reviews/" + event.params.reviewId;
        var userPath = "users/" + data.child("author").val() + "/reviews/" + event.params.reviewId;

        if (event.data.previous.exists() && !event.data.exists()) {
            //remove review
            var obj = {};
            obj[appPath] = null;
            obj[userPath] = null;
            return admin.database().ref().update(obj).then(function() {
                //yay
            }, function(error) {
                console.log("Error removing reviews: ", error);
            });
        } else if (event.data.exists()) {
            //add review
            var obj = {};
            obj[appPath] = true;
            obj[userPath] = true;

            return admin.database().ref().update(obj).then(function() {
                return event.data.ref.update({"date": new Date().toDateString()});
            }, function(error) {
                console.log("Error adding reviews: ", error);
            });
        }
    });

exports.writeCategory = functions.database.ref("/categories/{categoryId}/apps/{appId}")
    .onWrite(event => {
        if (!event.data.exists() && !event.data.previous.exists()) {
            return null;
        }

        var data = (event.data.exists() ? event.data : event.data.previous);

        var appPath = "apps/" + event.params.appId + "/categories/" + event.params.categoryId;

        if (event.data.previous.exists() && !event.data.exists()) {
            //remove app
            var obj = {};
            obj[appPath] = null;
            return admin.database().ref().update(obj).then(function() {
                //yay
            }, function(error) {
                console.log("Error removing category from app: ", error);
            });
        } else if (event.data.exists()) {
            //add app
            var obj = {};
            obj[appPath] = true;
            return admin.database().ref().update(obj).then(function() {
                //yay
            }, function(error) {
                console.log("Error adding category to app: ", error);
            });
        }
    });

exports.writeAppCategory = functions.database.ref("/apps/{appId}/categories/{categoryId}")
    .onWrite(event => {
        if (!event.data.exists() && !event.data.previous.exists()) {
            return null;
        }

        var data = (event.data.exists() ? event.data : event.data.previous);

        var categoryPath = "categories/" + event.params.categoryId + "/apps/" + event.params.appId;

        if (event.data.previous.exists() && !event.data.exists()) {
            //remove app
            var obj = {};
            obj[categoryPath] = null;
            return admin.database().ref().update(obj).then(function() {
                //yay
            }, function(error) {
                console.log("Error removing app from category: ", error);
            });
        } else if (event.data.exists()) {
            //add app
            var obj = {};
            obj[categoryPath] = true;
            return admin.database().ref().update(obj).then(function() {
                //yay
            }, function(error) {
                console.log("Error adding app to category: ", error);
            });
        }
    });

exports.writeNotificationRead = functions.database.ref("/notifications/{userId}/new/{notificationId}/read")
    .onWrite(event => {
        if (!event.data.exists()) {
            return null;
        }

        var newReference = admin.database().ref("/notifications/" + event.params.userId + "/new/" + event.params.notificationId);
        return newReference.once("value").then(function(snapshot) {
            var notification = snapshot.val();
            notification.read = null;
            if (notification.title) {
                return admin.database().ref("/notifications/" + event.params.userId + "/old/" + event.params.notificationId).set(notification).then(function() {
                    return newReference.set(null);
                }, function(error) {
                    //uhh whoops
                });
            }
        });
    });

exports.setStoragePath = functions.storage.object()
    .onChange(event => {
        const filePath = event.data.name.split("/");
        const fileName = path.basename(event.data.name);
        var obj = {};
        if (filePath[0] == "apps") {
            const appPackage = filePath[1];
            if (filePath[2] == "releases") {
                const releaseName = filePath[3];

                if (!releaseName && fileName.indexOf(".apk") < 0) {
                  return null;
                }

                if (event.data.resourceState == "exists") {
                  //file exists, download & get info
                  const bucket = gcs.bucket(event.data.bucket);
                  const tempFilePath = path.join(os.tmpdir(), fileName);

                    return bucket.file(event.data.name).download({"destination": tempFilePath}).then(function() {
                        return ApkReader.open(tempFilePath)
                            .then(function(reader) {
                                return reader.readManifest();
                            }).then(function(manifest) {
                                //set apk info
                                var obj = {};
                                obj["apps/" + appPackage + "/releases/" + releaseName + "/downloads/" + fileName.split(".")[0]] = {
                                    "minSdkVersion": manifest.usesSdk.minSdkVersion,
                                    "targetSdkVersion": manifest.usesSdk.targetSdkVersion,
                                    "maxSdkVersion": (manifest.usesSdk.maxSdkVersion ? manifest.usesSdk.maxSdkVersion : null),
                                    "permissions": manifest.usesPermissions,
                                    "features": manifest.usesFeatures,
                                    "screens": manifest.supportsScreens,
                                    "launcher": (manifest.application && manifest.application.launcherActivities[0] ? manifest.application.launcherActivities[0].name : null),
                                    "url": event.data.name
                                };

                                return admin.database().ref().update(obj).then(function() {
                                    //yay
                                }, function(error) {
                                    console.log("Error adding file info: ", error);
                                });
                            });
                    });
                } else {
                    //delete info
                    obj["apps/" + appPackage + "/releases/" + releaseName + "/downloads/" + fileName.split(".")[0]] = null;
                }
            } else if (filePath[2] == "images") {
                if (fileName.startsWith("header.")) {
                    //set header image
                    obj["apps/" + appPackage + "/header"] = event.data.name;
                } else if (fileName.startsWith("icon.")) {
                    //set icon image
                    obj["apps/" + appPackage + "/icon"] = event.data.name;
                } else if (fileName.startsWith("screenshot-")) {
                    //set screenshot image
                    obj["apps/" + appPackage + "/screenshots/" + fileName.split(".")[0]] = event.data.name;
                }
            }
        }

        return admin.database().ref().update(obj).then(function() {
            //yay
        }, function(error) {
            console.log("Error adding file info: ", error);
        });
    });

function getSignedFileUrlPromise(path) {
    if (path.startsWith("http"))
        return Promise.resolve(path);

    return gcs.bucket("ddstore-87442.appspot.com").file(path).getSignedUrl({
        "action": 'read',
        "expires": Date.now() + 60000
    });
}

function getAppsPromise(apps) {
    var promises = [];
    for (var appId in apps) {
        const appPackage = appId;
        promises.push(admin.database().ref("apps/" + appPackage).once("value").then(function(snapshot) {
            const app = snapshot.val();

            return getRatingPromise(app).then(function(rating) {
                return admin.database().ref("users/" + app.author).once("value").then(function(snapshot) {
                    const author = snapshot.val();

                    return getSignedFileUrlPromise(app.icon).then(function(signedUrl) {
                        const appIconUrl = signedUrl;

                        return getSignedFileUrlPromise(app.header).then(function(signedUrl) {
                            const appHeaderUrl = signedUrl;

                            return {
                                "package": appPackage.split("_").join("."),
                                "name": app.name,
                                "icon": appIconUrl,
                                "header": appHeaderUrl,
                                "summary": app.summary,
                                "rating": rating,
                                "author": {
                                    "id": app.author,
                                    "name": author.name,
                                    "image": author.image
                                }
                            };
                        });
                    });
                });
            });
        }));
    }

    return Promise.all(promises);
}

function getCategoryPromise(categoryId) {
    return admin.database().ref("categories/" + categoryId).once("value").then(function(snapshot) {
        const category = snapshot.val();

        return getAppsPromise(category.apps).then(function(apps) {
            return {
                "id": categoryId,
                "name": category.name,
                "description": category.description,
                "color": category.color,
                "background": category.background,
                "permission": category.permission,
                "apps": apps
            };
        });
    });
}

function getRatingPromise(app) {
    return getReviewsPromise(app.reviews, {"ratingsOnly": true}).then(function(ratings) {
        var rating = 0;
        for (var i = 0; i < ratings.length; i++) {
            rating += ratings[i];
        }

        return +((rating / ratings.length).toFixed(1));
    });
}

function getReviewPromise(reviewId) {
    return admin.database().ref("reviews/" + reviewId).once("value").then(function(snapshot) {
        const review = snapshot.val();

        return admin.database().ref("users/" + review.author).once("value").then(function(snapshot) {
            const author = snapshot.val();

            return admin.database().ref("apps/" + review.app.split(".").join("_") + "/name").once("value").then(function(snapshot) {
                const appName = snapshot.val();

                return {
                    "id": reviewId,
                    "author": {
                        "id": review.author,
                        "name": author.name,
                        "image": author.image
                    },
                    "app": {
                        "package": review.app.split("_").join("."),
                        "name": appName
                    },
                    "date": review.date,
                    "rating": review.rating,
                    "review": review.review
                };
            });
        });
    });
}

function getReviewsPromise(reviews, options) {
    var promises = [];
    for (var review in reviews) {
        const reviewId = review;
        promises.push(admin.database().ref("reviews/" + reviewId).once("value").then(function(snapshot) {
            const review = snapshot.val();

            if (options && options.ratingsOnly) {
                return review.rating;
            } else if (options && options.user) {
                return admin.database().ref("apps/" + review.app.split(".").join("_") + "/name").once("value").then(function(snapshot) {
                    const appName = snapshot.val();

                    return {
                        "id": reviewId,
                        "author": {
                            "id": review.author,
                            "name": options.user.name,
                            "image": options.user.image
                        },
                        "app": {
                            "package": review.app.split("_").join("."),
                            "name": appName
                        },
                        "date": review.date,
                        "rating": review.rating,
                        "summary": review.review.split(" ").slice(0, 30).join(" ") + "..."
                    };
                });
            } else {
                return admin.database().ref("users/" + review.author).once("value").then(function(snapshot) {
                    const author = snapshot.val();

                    return {
                        "id": reviewId,
                        "author": {
                            "id": review.author,
                            "name": author.name,
                            "image": author.image
                        },
                        "date": review.date,
                        "rating": review.rating,
                        "summary": review.review.split(" ").slice(0, 30).join(" ") + "..."
                    };
                });
            }
        }));
    }

    return Promise.all(promises);
}

exports.getCategories = functions.https.onRequest((req, res) => {
    cors()(req, res, () => {
        admin.database().ref("categories").once("value").then(function(snapshot) {
            const categories = snapshot.val();
            var promises = [];
            for (var categoryId in categories) {
                if (categoryId != "featured") {
                    promises.push(getCategoryPromise(categoryId));
                }
            }

            Promise.all(promises).then(function(categories) {
                res.status(200).send(categories);
            });
        }, function(error) {
            res.status(404).send(error);
        });
    });
});

exports.getCategory = functions.https.onRequest((req, res) => {
    cors()(req, res, () => {
      if (req.query.categoryId) {
          getCategoryPromise(req.query.categoryId).then(function(category) {
              res.status(200).send(category);
          }, function(error) {
              res.status(404).send("Error 2: " + error);
          });
      } else res.status(404).send();
    });
});

exports.getApp = functions.https.onRequest((req, res) => {
    cors()(req, res, () => {
        if (req.query.appPackage) {
            admin.database().ref("apps/" + req.query.appPackage.split(".").join("_")).once("value").then(function(snapshot) {
                const app = snapshot.val();

                var screenshots = [];
                for (var key in app.screenshots) {
                  screenshots.push(app.screenshots[key]);
                }

                var releases = [];
                for (var key in app.releases) {
                  var release = app.releases[key];
                  release.version = key.split("_").join(".");
                  releases.push(release);
                }

                admin.database().ref("users/" + app.author).once("value").then(function(snapshot) {
                    const author = snapshot.val();

                    getSignedFileUrlPromise(app.header).then(function(signedUrl) {
                        const headerUrl = signedUrl;

                        getSignedFileUrlPromise(app.icon).then(function(signedUrl) {
                            const iconUrl = signedUrl;

                            getReviewsPromise(app.reviews).then(function(reviews) {
                                var rating = 0;
                                for (var i = 0; i < reviews.length; i++) {
                                    rating += reviews[i].rating;
                                }
                                rating = +((rating / reviews.length).toFixed(1));

                                res.status(200).send({
                                    "name": app.name,
                                    "author": {
                                        "id": app.author,
                                        "name": author.name,
                                        "image": author.image
                                    },
                                    "header": headerUrl,
                                    "icon": iconUrl,
                                    "links": app.links,
                                    "package": req.query.appPackage,
                                    "summary": app.summary,
                                    "description": app.description,
                                    "screenshots": screenshots,
                                    "rating": rating,
                                    "ratings": reviews.length,
                                    "reviews": reviews,
                                    "releases": releases
                                });
                            });
                        });
                    });
                });
            }, function(error) {
                res.status(404).send("Error 1: " + error);
            });
        } else res.status(404).send();
    });
});

exports.getReview = functions.https.onRequest((req, res) => {
    cors()(req, res, () => {
        if (req.query.reviewId) {
            getReviewPromise(req.query.reviewId).then(function(review) {
                res.status(200).send(review);
            }, function(error) {
                res.status(404).send("Error 1: " + error);
            });
        } else {
            res.status(404).send();
        }
    });
});

exports.getReviews = functions.https.onRequest((req, res) => {
    cors()(req, res, () => {
        if (req.query.appPackage) {
            admin.database().ref("apps/" + req.query.appPackage.split(".").join("_") + "/reviews").once("value").then(function(snapshot) {
                getReviewsPromise(snapshot.val()).then(function(reviews) {
                    res.status(200).send(reviews);
                }, function(error) {
                    res.status(404).send("Error 2: " + error);
                });
            }, function(error) {
                res.status(404).send("Error 1: " + error);
            });
        } else if (req.query.userId) {
            admin.database().ref("users/" + req.query.userId + "/reviews").once("value").then(function(snapshot) {
                getReviewsPromise(snapshot.val()).then(function(reviews) {
                    res.status(200).send(reviews);
                }, function(error) {
                    res.status(404).send("Error 2: " + error);
                });
            }, function(error) {
                res.status(404).send("Error 1: " + error);
            });
        } else {
            res.status(404).send();
        }
    });
});

exports.getUser = functions.https.onRequest((req, res) => {
    cors()(req, res, () => {
        if (req.query.userId) {
            admin.database().ref("users/" + req.query.userId).once("value").then(function(snapshot) {
                const user = snapshot.val();

                var links = [];
                for (var key in user.links) {
                  links.push(user.links[key]);
                }

                getAppsPromise(user.apps).then(function(apps) {
                    getReviewsPromise(user.reviews, {"user": user}).then(function(reviews) {
                        res.status(200).send({
                            "id": req.query.userId,
                            "name": user.name,
                            "image": user.image,
                            "links": links,
                            "apps": apps,
                            "reviews": reviews
                        });
                    });
                });
            }, function(error) {
                res.status(404).send("Error 1: " + error);
            });
        } else {
            res.status(404).send();
        }
    });
});


exports.searchApps = functions.https.onRequest((req, res) => {
    cors()(req, res, () => {
        if (req.query.queryText) {
            admin.database().ref("apps")
                .orderByChild("name")
                .startAt(req.query.queryText)
                .endAt(req.query.queryText + "\uf8ff")
                .once("value")
                .then(function(snapshot) {
                    var result = snapshot.val();
                    var promises = [];

                    for (var key in result) {
                        const app = result[key];
                        const appPackage = key;

                        promises.push(getRatingPromise(app).then(function(rating) {
                            return admin.database().ref("users/" + app.author).once("value").then(function(snapshot) {
                                const author = snapshot.val();

                                return getSignedFileUrlPromise(app.icon).then(function(signedUrl) {
                                    const appIconUrl = signedUrl;

                                    return getSignedFileUrlPromise(app.header).then(function(signedUrl) {
                                        const appHeaderUrl = signedUrl;

                                        return {
                                            "package": appPackage.split("_").join("."),
                                            "name": app.name,
                                            "icon": appIconUrl,
                                            "header": appHeaderUrl,
                                            "summary": app.summary,
                                            "rating": rating,
                                            "author": {
                                                "id": app.author,
                                                "name": author.name,
                                                "image": author.image
                                            }
                                        };
                                    });
                                });
                            });
                        }));
                    }

                    Promise.all(promises).then(function(apps) {
                        res.status(200).send(apps);
                    });
                }, function(error) {
                    res.status(404).send(error);
                });
        } else {
            res.status(404).send();
        }
    });
});
