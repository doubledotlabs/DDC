function getCategories(fun, ignore) {
	callFirebaseFunction("getCategories", fun, function(error) {
		console.error("Failed to fetch category", error);
		if (!ignore)
			setPage("page=404", true);
	});
}

function getCategory(id, fun, ignore) {
	callFirebaseFunction("getCategory?categoryId=" + id, fun, function(error) {
		console.error("Failed to fetch category", error);
		if (!ignore)
			setPage("page=404", true);
	});
}

function getApp(id, fun, ignore) {
	callFirebaseFunction("getApp?appPackage=" + id, fun, function(error) {
		console.error("Failed to fetch app", error);
		if (!ignore)
			setPage("page=404", true);
	});
}

function searchApps(query, fun, ignore) {
	callFirebaseFunction("searchApps?queryText=" + query.replace(/(^| )(\w)/g, function(x) {
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
	callFirebaseFunction("getUser?userId=" + id, fun, function(error) {
		console.error("Failed to fetch app", error);
		if (!ignore)
			setPage("page=404", true);
	});
}

function setUser(id, name, links, fun, ignore) {
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
	callFirebaseFunction("getReviews?appPackage=" + id, fun, function(error) {
		console.error("Failed to fetch reviews", error);
		if (!ignore)
			setPage("page=404", true);
	});
}

function getUserReviews(id, fun, ignore) {
	callFirebaseFunction("getReviews?userId=" + id, fun, function(error) {
		console.error("Failed to fetch reviews", error);
		if (!ignore)
			setPage("page=404", true);
	});
}

function getReview(id, fun, ignore) {
	callFirebaseFunction("getReview?reviewId=" + id, fun, function(error) {
		console.error("Failed to fetch review", error);
		if (ignore)
			fun();
		else setPage("page=404", true);
	});
}

function setReview(pkg, user, rating, review, fun, ignore) {
	firebase.database().ref("reviews/" + pkg.split(".").join("_") + "-" + user.uid).set({
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
	callFirebaseFunction("getDownloadURL?path=" + path, function(url) {
		fun(url[0]);
	}, function() {
		console.log("apk download url has messed up big time");
		if (ignore)
			fun();
		else setPage("page=404", true);
	});
}

function callFirebaseFunction(name, onComplete, onError) {
	var requestContent = new XMLHttpRequest();
	requestContent.onreadystatechange = function() {
		if (requestContent.readyState === 4) {
			if (requestContent.status === 200 || requestContent.status == 0) {
				onComplete(JSON.parse(requestContent.responseText));
			} else {
				onError(requestContent.status, requestContent.responseText);
			}
		}
	}
	requestContent.open("GET", "https://us-central1-ddstore-87442.cloudfunctions.net/" + name, true);
	requestContent.send(null);
}

function getFirebaseStorageUrl(path, onComplete, onError) {
	firebase.storage().child(path).getDownloadURL().then(onComplete).catch(onError);
}
