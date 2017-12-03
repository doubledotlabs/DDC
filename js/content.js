function getCategories(fun) {
	for (var i = 0; i < categories.length; i++) {
		categories[i].apps = apps;
	}

	fun(categories);
}

function getCategory(id, fun) {
	if (id == "featured") {
		fun({
			"apps": apps
		});
	} else if (id.startsWith("similar/")) {
		getApp(id.split("/")[1], function(app) {
			fun({
				"id": id,
				"name": "Similar to " + app.name
			});
		});
	} else {
		for (var i = 0; i < categories.length; i++) {
			if (categories[i].id == id) {
				fun(categories[i]);
				return;
			}
		}

		setPage("404", true);
	}
}

function getApp(id, fun) {
	for (var i = 0; i < categories.length; i++) {
		if (apps[i].package == id) {
			fun(apps[i]);
			return;
		}
	}

	setPage("404", true);
}

function getUser(id, fun) {
	for (var i = 0; i < users.length; i++) {
		if (users[i].id == id) {
			fun(users[i]);
			return;
		}
	}

	setPage("404", true);
}

function getReviews(id, fun) {
	var newReviews = [];
	for (var i = 0; i < reviews.length; i++) {
		var review = Object.assign({}, reviews[i]);
		review.review = null;
		review.summary = reviews[i].review.substring(0, 90) + "...";
		newReviews[i] = review;
	}

	fun(newReviews);
}

function getReview(id, fun) {
	for (var i = 0; i < reviews.length; i++) {
		if (reviews[i].id == id) {
			fun(reviews[i]);
			return;
		}
	}

	setPage("404", true);
}
