function setAppPage(id, name, summary, links, fun, ignore) {
	firebase.database().ref("apps/" + id.split(".").join("_")).update({
		"name": name,
		"summary": summary,
		"links": links
	}).then(fun, function(error) {
		console.log("Couldn\'t update app page, " + error);
		if (ignore) {
			fun();
		} else {
			setPage("page=404", true);
		}
	});
}

function setAppDescription(id, description, fun, ignore) {
	firebase.database().ref("apps/" + id.split(".").join("_") + "/description").set(description).then(fun, function(error) {
		if (ignore) {
			fun();
		} else {
			setPage("page=404", true);
		}
	});
}

function setAppHeader(id, file, fun, ignore) {
	firebase.storage().ref().child("apps/" + id.split(".").join("_") + "/images/header." + file.name.split('.').pop()).put(file).then(fun, function() {
		if (ignore) {
			fun(file);
		} else {
			setPage("page=404", true);
		}
	});
}

function setAppIcon(id, file, fun, ignore) {
	firebase.storage().ref().child("apps/" + id.split(".").join("_") + "/images/icon." + file.name.split('.').pop()).put(file).then(fun, function() {
		if (ignore) {
			fun(file);
		} else {
			setPage("page=404", true);
		}
	});
}
