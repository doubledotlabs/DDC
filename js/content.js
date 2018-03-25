function getCategories(fun, ignore) {
	FireFunctionCache.call("getCategories", fun, function(error) {
		console.error("Failed to fetch category", error);
		if (!ignore)
			setPage("page=404", true);
	});
}

function getCategory(id, fun, ignore) {
	FireFunctionCache.call("getCategory?categoryId=" + id, fun, function(error) {
		console.error("Failed to fetch category", error);
		if (!ignore)
			setPage("page=404", true);
	});
}

function getApp(id, fun, ignore) {
	FireFunctionCache.call("getApp?appPackage=" + id, fun, function(error) {
		console.error("Failed to fetch app", error);
		if (!ignore)
			setPage("page=404", true);
	});
}

function searchApps(query, fun, ignore) {
	FireFunctionCache.call("searchApps?queryText=" + query.replace(/(^| )(\w)/g,
		function(x) {
			return x.toUpperCase();
		}), fun, function(error) {
		if (ignore) {
			fun();
		} else {
			setPage("page=404", true);
		}
	});
}

function getUser(id, fun, ignore) {
	FireFunctionCache.call("getUser?userId=" + id, fun, function(error) {
		console.error("Failed to fetch app", error);
		if (!ignore)
			setPage("page=404", true);
	});
}

function setUser(id, name, links, fun, ignore) {
	FireFunctionCache.clear("getUser?userId=" + id);
	
	firebase.database().ref("users/" + id).update({
		"name": name,
		"links": links
	}).then(fun, function(error) {
		if (ignore) {
			fun();
		} else {
			setPage("page=404", true);
		}
	});
}

function getAppReviews(id, fun, ignore) {
	FireFunctionCache.call("getReviews?appPackage=" + id, fun, function(error) {
		console.error("Failed to fetch reviews", error);
		if (!ignore)
			setPage("page=404", true);
	});
}

function getUserReviews(id, fun, ignore) {
	FireFunctionCache.call("getReviews?userId=" + id, fun, function(error) {
		console.error("Failed to fetch reviews", error);
		if (!ignore)
			setPage("page=404", true);
	});
}

function getReview(id, fun, ignore) {
	FireFunctionCache.call("getReview?reviewId=" + id, fun, function(error) {
		console.error("Failed to fetch review", error);
		if (ignore)
			fun();
		else setPage("page=404", true);
	});
}

function setReview(pkg, user, rating, review, fun, ignore) {
	var reviewId = pkg.split(".").join("_") + "-" + user.uid;
	FireFunctionCache.clear("getApp?appPackage=" + pkg);
	FireFunctionCache.clear("getReview?reviewId=" + reviewId);
	
	firebase.database().ref("reviews/" + reviewId)
		.set({
			"app": pkg,
			"author": user.uid,
			"rating": rating,
			"review": review
		}).then(fun, function(error) {
			console.log("You dun goofed");
			if (!ignore)
				setPage("page=404", true);
		});
}

function getDownloadURL(path, fun, ignore) {
	FireFunctionCache.call("getDownloadURL?path=" + path, function(url) {
		fun(url[0]);
	}, function() {
		console.log("apk download url has messed up big time");
		if (ignore)
			fun();
		else setPage("page=404", true);
	});
}

var FireFunctionCache = {};
FireFunctionCache.prefix = "FireFunctionCache-";
FireFunctionCache.data = {};

FireFunctionCache.call = function(name, onComplete, onError) {
	var localStorageItem;
	if (typeof(Storage) !== "undefined")
		localStorageItem = localStorage.getItem(FireFunctionCache.prefix + name);

	if (FireFunctionCache.data[name] && FireFunctionCache.data[name].timeout - Date.now() > 0) {
		try {
			onComplete(JSON.parse(FireFunctionCache.data[name].response));
		} catch (e) {
			console.error(e, FireFunctionCache.data[name].response);
			onError();
		}
	} else if (localStorageItem && JSON.parse(localStorageItem).timeout - Date.now() > 0) {
		FireFunctionCache.data[name] = JSON.parse(localStorageItem);
		try {
			onComplete(JSON.parse(FireFunctionCache.data[name].response));
		} catch (e) {
			console.error(e, FireFunctionCache.data[name].response);
			onError();
		}
	} else {
		FireFunctionCache.clear(name);

		var requestContent = new XMLHttpRequest();
		requestContent.onreadystatechange = function() {
			if (requestContent.readyState === 4) {
				if (requestContent.status === 200 || requestContent.status == 0) {
					FireFunctionCache.data[name] = {
						"timeout": Date.now() + 500000,
						"response": requestContent.responseText
					};

					if (typeof(Storage) !== "undefined")
						localStorage.setItem(FireFunctionCache.prefix + name, JSON.stringify(
							FireFunctionCache.data[name]));

					try {
						onComplete(JSON.parse(requestContent.responseText));
					} catch (e) {
						console.error(e, requestContent.responseText);
						onError();
					}
				} else {
					console.error("Unexpected status: " + requestContent.status, requestContent.responseText);
					onError();
				}
			}
		}
		requestContent.open("GET", "https://us-central1-ddstore-87442.cloudfunctions.net/" + name, true);
		requestContent.send(null);
	}
}

FireFunctionCache.clear = function(name) {
	if (name) {
		FireFunctionCache.data[name] = null;
		if (typeof(Storage) !== "undefined")
			localStorage.removeItem(FireFunctionCache.prefix + name);
	} else {
		if (typeof(Storage) !== "undefined") {
			for (var i = 0; i < localStorage.length; i++) {
				var key = localStorage.key(i);
				var item = localStorage.getItem(key);
				if (key.indexOf(FireFunctionCache.prefix) == 0 && item && JSON.parse(item)
					.timeout - Date.now() <= 0)
					localStorage.removeItem(key);
			}
		}
	}
};

FireFunctionCache.clear();

function getFirebaseStorageUrl(path, onComplete, onError) {
	firebase.storage().child(path).getDownloadURL().then(onComplete).catch(onError);
}
