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
	FireFunctionCache.call("searchApps?queryText=" + query.replace(/(^| )(\w)/g, function(x) {
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
FireFunctionCache.data = {};
FireFunctionCache.call = function(name, onComplete, onError) {
	var localStorageItem = localStorage.getItem("FireFunctionCache-" + name);
	if (FireFunctionCache.data[name] && FireFunctionCache.data[name].timeout - Date.now() > 0) {
		onComplete(JSON.parse(FireFunctionCache.data[name].response));
	} else if (localStorageItem && JSON.parse(localStorageItem).timeout - Date.now() > 0) {
		FireFunctionCache.data[name] = JSON.parse(localStorageItem);
		onComplete(JSON.parse(FireFunctionCache.data[name].response));
	} else {
		FireFunctionCache.data[name] = null;
		localStorage.removeItem("FireFunctionCache-" + name);

		var requestContent = new XMLHttpRequest();
		requestContent.onreadystatechange = function() {
			if (requestContent.readyState === 4) {
				if (requestContent.status === 200 || requestContent.status == 0) {
					FireFunctionCache.data[name] = {
						"timeout": Date.now() + 500000,
						"response": requestContent.responseText
					};
					localStorage.setItem("FireFunctionCache-" + name, JSON.stringify(FireFunctionCache.data[name]));
					onComplete(JSON.parse(requestContent.responseText));
				} else {
					onError(requestContent.status, requestContent.responseText);
				}
			}
		}
		requestContent.open("GET", "https://us-central1-ddstore-87442.cloudfunctions.net/" + name, true);
		requestContent.send(null);
	}
}

function getFirebaseStorageUrl(path, onComplete, onError) {
	firebase.storage().child(path).getDownloadURL().then(onComplete).catch(onError);
}
