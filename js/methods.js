function largeCardsMethod(app) {
  return "<div class=\"largecard\" onclick=\"location.href = \'" + "\';\" " //TODO: add urls
    + "style=\"background: linear-gradient(to top, rgba(255, 255, 255, 0.9), transparent), url(" + app.header + "), #FFF; background-repeat: no-repeat; background-size: cover; background-position: center;\""
    + "><p class=\"info\"><b>" + app.name + "</b> - " + app.rating + "/10</p></div>";
}

function smallCardsMethod(app) {
  return "<div class=\"smallcard\" onclick=\"location.href = \'" + "\';\">"
    + "<img src=\"" + app.icon + "\">"
    + "<p class=\"info\"><b>" + app.name + "</b><br><small style=\"position: absolute;\">" + app.author + "</small><small style=\"float: right;\"><b>" + app.rating + "</b></small></p></div>";
}

function rowListMethod(category, apps, method) {
	var html = "<div id=\"category" + category.name.replace(" ", "") + "\" class=\"category row\" style=\"color: " + category.color + "; background-color: " + category.background + ";\">"
		+ "<div style=\"vertical-align: top; margin-top: 3.5em;\"><h1>" + category.name + "</h1><p>" + category.description
		+ "</p><br><button class=\"outline\">MORE</button></div>";

	for (var i = 0; i < apps.length; i++) {
		html += method(apps[i]);
	}

	return html + "</div>";
}
