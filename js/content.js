function getCategories(element, listMethod, method) {
	for (var i = 0; i < categories.length; i++) {
		element.appendChild(createElement(listMethod(categories[i], apps, method)));
	}
}

function getCategory(id) {
	if (id.startsWith("similar/")) {
		return {
			"id": id,
			"name": "Similar to " + getApp(id.split("/")[1]).name
		};
	}

	for (var i = 0; i < categories.length; i++) {
		if (categories[i].id == id)
			return categories[i];
	}
}

function getApp(id) {
	for (var i = 0; i < categories.length; i++) {
		if (apps[i].package == id)
			return apps[i];
	}
}

function getReviews(id) {
	var newReviews = [];
	for (var i = 0; i < reviews.length; i++) {
		var review = Object.assign({}, reviews[i]);
		review.review = null;
		review.summary = reviews[i].review.substring(0, 90) + "...";
		newReviews[i] = review;
	}
	return newReviews;
}

function getReview(id) {
	for (var i = 0; i < reviews.length; i++) {
		if (reviews[i].id == id)
			return reviews[i];
	}
}

function createElement(html) {
    var fragment = document.createDocumentFragment();
    var temp = document.createElement('div');
    temp.innerHTML = html;
    while (temp.firstChild) {
        fragment.appendChild(temp.firstChild);
    }

    return fragment;
}
