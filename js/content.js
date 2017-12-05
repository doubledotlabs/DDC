function getCategories(fun, ignore) {
	for (var i = 0; i < categories.length; i++) {
		categories[i].apps = apps;
	}

	fun(categories);
}

function getCategory(id, fun, ignore) {
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
		}, ignore);
	} else {
		for (var i = 0; i < categories.length; i++) {
			if (categories[i].id == id) {
				fun(categories[i]);
				return;
			}
		}

		if (!ignore)
			setPage("page=404", true);
	}
}

function getApp(id, fun, ignore) {
	for (var i = 0; i < categories.length; i++) {
		if (apps[i].package == id) {
			fun(apps[i]);
			return;
		}
	}

	if (!ignore)
		setPage("page=404", true);
}

function getUser(id, fun, ignore) {
	var user = users[0];
	user.apps = apps;
	user.reviews = reviews;
	fun(user);
}

function getReviews(id, fun, ignore) {
	var newReviews = [];
	for (var i = 0; i < reviews.length; i++) {
		var review = Object.assign({}, reviews[i]);
		review.review = null;
		review.summary = reviews[i].review.substring(0, 90) + "...";
		newReviews[i] = review;
	}

	fun(newReviews);
}

function getReview(id, fun, ignore) {
	for (var i = 0; i < reviews.length; i++) {
		if (reviews[i].id == id) {
			fun(reviews[i]);
			return;
		}
	}

	if (!ignore)
		setPage("page=404", true);
}
