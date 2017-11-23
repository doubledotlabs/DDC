function largeCardsMethod(app) {
  return "<div class=\"largecard\" onclick=\"setPage(\'app=" + app.package + "\');\" "
    + "style=\"background: linear-gradient(to top, rgba(255, 255, 255, 0.9), transparent), url(" + app.header + "), #FFF; background-repeat: no-repeat; background-size: cover; background-position: center;\""
    + "><p class=\"info\"><b>" + app.name + "</b> - " + app.rating + "/10</p></div>";
}

function smallCardsMethod(app) {
  return "<div class=\"smallcard\" onclick=\"setPage(\'app=" + app.package + "\');\">"
    + "<img src=\"" + app.icon + "\">"
    + "<p class=\"info\"><b>" + app.name + "</b><br><small style=\"position: absolute;\">" + app.author
    + "</small><small style=\"float: right;\"><b>" + app.rating + "&nbsp;&#9733;</b></small></p></div>";
}

function tinyCardsMethod(app) {
  return "<div class=\"tinycard\" onclick=\"setPage(\'app=" + app.package + "\');\">"
    + "<img src=\"" + app.icon + "\">"
    + "<p class=\"info\"><b>" + app.name + "</b><br><small style=\"position: absolute;\">" + app.author
    + "</small><small style=\"float: right;\"><b>" + app.rating + "&nbsp;&#9733;</b></small></p></div>";
}

function imageCardsMethod(image) {
  return "<img class=\"card\" src=\"" + image.url + "\" onclick=\"location.href=\'" + image.url + "\';\">";
}

function chipsMethod(data) {
  return "<p class=\"chip\"" + (data.onclick ? " onclick=\"" + data.onclick + "\"" : "") + ">" + data.name + "</p>";
}

function rowListMethod(category, apps, method) {
	var html = (category.description || !category.name ? "" : "<h1 class=\"indented\">" + category.name + "</h1>") + "<div class=\"" + (category.description ? "category " : "") + "row\""
		+ (category.color && category.background ? " style=\"color: " + category.color + "; background-color: " + category.background + ";\"" : "") + ">"
		+ (category.description ? "<div style=\"vertical-align: top; margin-top: 3.5em;\"><h1>" + category.name + "</h1><p>" + category.description
		+ "</p><br><button class=\"outline\" onclick=\"setPage(\'category=" + category.id + "\')\">MORE</button></div>" : "");

	for (var i = 0; i < apps.length; i++) {
		html += method(apps[i]);
	}

	return html + "</div>";
}

function overflowListMethod(category, apps, method) {
	var html = "<div class=\"category\" style=\"color: " + category.color + "; min-height: 100vh;\">"
	  + "<div style=\"margin: 2em 0;\"><h1>" + category.name + "</h1><p>" + category.description + "</p></div><div class=\"row overflow\">";

	for (var i = 0; i < apps.length; i++) {
		html += method(apps[i]);
	}

	html += "</div></div>";
	return html;
}
