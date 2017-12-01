function largeCardsMethod(app) {
  return "<div class=\"largecard\" onclick=\"setPage(\'app=" + app.package + "\');\" "
    + "style=\"background: linear-gradient(to top, rgba(255, 255, 255, 0.9), transparent), url(" + app.header + "), #FFF; background-repeat: no-repeat; background-size: cover; background-position: center;\""
    + "><p class=\"info\"><b>" + app.name + "</b>&nbsp;&ndash;&nbsp;" + app.rating + "/10</p></div>";
}

function smallCardsMethod(app) {
  return "<div class=\"smallcard\" onclick=\"setPage(\'app=" + app.package + "\');\">"
    + "<img src=\"" + app.icon + "\">"
    + "<p class=\"info\"><b>" + app.name + "</b><br><small style=\"position: absolute;\">" + app.author
    + "</small><small style=\"float: right;\"><b style=\"color: " + getRatingColor(app.rating) + ";\">" + app.rating + "&nbsp;&#9733;</b></small></p></div>";
}

function tinyCardsMethod(app) {
  return "<div class=\"tinycard\" onclick=\"setPage(\'app=" + app.package + "\');\">"
    + "<img src=\"" + app.icon + "\">"
    + "<p class=\"info\"><b>" + app.name + "</b><br><small style=\"position: absolute;\">" + app.author
    + "</small><small style=\"float: right;\"><b style=\"color: " + getRatingColor(app.rating) + ";\">" + app.rating + "&nbsp;&#9733;</b></small></p></div>";
}

function imageCardsMethod(image) {
  return "<img class=\"card\" src=\"" + image.url + "\" onclick=\"location.href=\'" + image.url + "\';\">";
}

function chipsMethod(data) {
  return "<p class=\"chip\"" + (data.id ? " onclick=\"setPage(\'category=" + data.id + "\');\"" : "") + ">" + data.name + "</p>";
}

function reviewMethod(data) {
  return "<div class=\"review\"><div class=\"reviewinfo\" onclick=\"setPage(\'user=" + data.user.id + "\')\"><img src=\"" + data.user.image + "\"><div><b>" + data.user.name + "</b><br>"
    + "<span style=\"color: " + getRatingColor(data.rating) + "; font-weight: bold;\">" + data.rating + "</span>&nbsp;/&nbsp;10</div></div>"
    + "<p>" + (data.review ? data.review + "</p>" : data.summary + "</p><a onclick=\"setPage(\'review=" + data.id + "\')\">Read More</a>")
    + "</div>"
}

function downloadMethod(data) {
	var dpi = null;
	if (data.download.minDpi && data.download.maxDpi)
		dpi = data.download.minDpi + " - " + data.download.maxDpi + "dpi";
	else if (data.download.minDpi)
		dpi = data.download.minDpi + "dpi+";
	else if (data.download.maxDpi)
		dpi = "0 - " + data.download.maxDpi + "dpi";

  return "<div class=\"download\">"
    + "<div class=\"downloadheader\">"
    + "<span>" + data.release.date + "</span>"
    + "<i class=\"material-icons downloadicon\" onclick=\"location.href=\'download:" + data.download.url + "\';\">file_download</i>"
    + "</div><hr>"
    + "<div class=\"releasecontent\">"
    + "<p><b>Version " + data.release.version + "</b></p>"
    + data.release.notes
    + "</div>"
    + "<div id=\"downloadContent" + data.download.url + "\" class=\"downloadinfo content\">"
		+ "<i class=\"expand material-icons\" onclick=\"document.getElementById(\'downloadContent" + data.download.url + "\').classList.remove(\'active\');\">expand_more</i><hr>"
    + "<span><b>Target SDK:</b> Android " + sdkToVersion(data.download.target) + "</span>"
    + (data.download.config ? "<span><b>Configuration:</b> " + data.download.config + "</span>" : "")
		+ (data.download.arch ? "<span><b>Architecture:</b> " + data.download.arch + "</span>" : "")
		+ (dpi ? "<span><b>Screen Scale:</b> " + dpi + "</span>" : "")
    + "<span><b>Download Size:</b> " + data.download.size + "</span>"
    + "</div>"
    + "<div class=\"expand\" onclick=\"document.getElementById(\'downloadContent" + data.download.url + "\').classList.add(\'active\');\">"
    + "<hr><div class=\"stat\"><i class=\"material-icons\">info</i><span>DOWNLOAD INFO</span></div>"
    + "</div>"
    + "</div>";
}

function carouselListMethod(options, apps, method) {
  var html = "<div class=\"carousel\" data-slick=\'" + JSON.stringify(options) + "\'>";

  for (var i = 0; i < apps.length; i++) {
		html += method(apps[i]);
	}

  return html + "</div>";
}

function nothingListMethod(category, apps, method) {
	var html = "";
	for (var i = 0; i < apps.length; i++) {
		html += method(apps[i]);
	}
	return html;
}

function rowListMethod(category, apps, method) {
	var html = (category.id ? "" : "<h1 class=\"indented\">" + category.name + "</h1>") + "<div class=\"" + (category.description ? "category " : "") + "row\""
		+ (category.color && category.background ? " style=\"position: relative; color: " + category.color + "; background-color: " + category.background + ";\">" : " style=\"position: relative;\">")
    + (category.id && category.name ? "<div class=\"rowinfo\" style=\"vertical-align: top; transform: translateY(calc(4em - 20%));\"><h2>" + category.name + "</h2>" + (category.description ? "<p>" + category.description
		+ "</p>" : "") + "<button class=\"outline\" onclick=\"setPage(\'category=" + category.id + "\')\">MORE</button></div>" : "");

	for (var i = 0; i < apps.length; i++) {
		html += method(apps[i]);
	}

	return html + "<div style=\"position: absolute; pointer-events: none; width: calc(50vw - 300px); top: 0.5em; bottom: 0.5em; right: 0; z-index: 100; background: linear-gradient(to right, transparent, "
    + (category.shade ? category.shade : (category.background && category.background != "transparent" ? category.background : "#FFF")) + ");\"></div></div>";
}

function overflowListMethod(category, apps, method) {
	var html = (category.name ? "<div class=\"category\">"
	  + "<div style=\"margin: 2em 0;\"><h1" + (category.color ? " style=\"color: " + category.color + ";\"" : "") + ">" + category.name + "</h1>"
    + (category.description ? "<p" + (category.color ? " style=\"color: " + category.color + ";\"" : "") + ">" + category.description + "</p>" : "") + "</div>" : "")
    + "<div class=\"row overflow\">";

	for (var i = 0; i < apps.length; i++) {
		html += method(apps[i]);
	}

	if (category.description)
    html += "</div>";
	return html + "</div>";
}

function gridListMethod(category, apps, method) {
  var html = (category.name ? "<h1 class=\"indented\">" + category.name + "</h1>" : "") + "<div class=\"row grid\">";

  for (var i = 0; i < apps.length; i++) {
		html += method(apps[i]);
	}

  return html + "</div>";
}
