var AppMethods = {};
AppMethods.largeCard = function(app) {
	return "<div class=\"largecard loadingimage\" onclick=\"setPage(\'page=app&package=" +
		app.package + "\');\" " +
		"style=\"background: linear-gradient(to top, rgba(255, 255, 255, 0.9), transparent), url(" +
		app.header +
		"), #FFF; background-repeat: no-repeat; background-size: cover; background-position: center;\"" +
		"><p class=\"info\"><b>" + app.name + "</b>" + (app.rating ?
			"&nbsp;&ndash;&nbsp;" + app.rating + "/5" : "") + "</p></div>";
};

AppMethods.smallCard = function(app) {
	return "<div class=\"smallcard\" onclick=\"setPage(\'page=app&package=" + app
		.package + "\');\">" + "<img src=\"" + app.icon + "\">" +
		"<p class=\"info\"><b>" + app.name +
		"</b><br><small style=\"position: absolute;\">" + app.author.name +
		"</small><small style=\"float: right;\"><b style=\"color: " + SiteUtils.getRatingColor(
			app.rating) + ";\">" + (app.rating ? app.rating : "-") +
		"&nbsp;&#9733;</b></small></p></div>";
};

AppMethods.tinyCard = function(app) {
	return "<div class=\"tinycard\" onclick=\"setPage(\'page=app&package=" + app.package +
		"\');\">" + "<img src=\"" + app.icon + "\">" + "<p class=\"info\"><b>" + app
		.name + "</b><br><small style=\"position: absolute;\">" + app.author.name +
		"</small><small style=\"float: right;\"><b style=\"color: " + SiteUtils.getRatingColor(
			app.rating) + ";\">" + (app.rating ? app.rating : "-") +
		"&nbsp;&#9733;</b></small></p></div>";
};

AppMethods.consoleTinyCard = function(app) {
	return "<div class=\"tinycard\" onclick=\"setPage(\'page=app&package=" + app.package +
		"\');\">" + "<img src=\"" + app.icon + "\">" + "<p class=\"info\"><b>" + app
		.name + "</b><br><small style=\"position: absolute;\">" + app.downloads +
		" downloads" + "</small><small style=\"float: right;\"><b style=\"color: " +
		SiteUtils.getRatingColor(app.rating) + ";\">" + (app.rating ? app.rating :
			"-") + "&nbsp;&#9733;</b></small></p></div>";
};

var ImageMethods = {};
ImageMethods.card = function(url) {
	return "<img class=\"card\" src=\"" + url + "\" onclick=\"location.href=\'" +
		url + "\';\">";
};

var CategoryMethods = {};
CategoryMethods.chip = function(category) {
	return "<p class=\"chip\"" + (category.id ?
			" onclick=\"setPage(\'page=category&id=" + category.id + "\');\"" : "") +
		">" + category.name + "</p>";
};

var ReviewMethods = {};
ReviewMethods.normal = function(data) {
	return "<div class=\"review\"><div class=\"reviewinfo\" onclick=\"setPage(\'page=user&id=" +
		data.author.id + "\')\"><img src=\"" + data.author.image + "\"><div><b>" +
		data.author.name + "</b><br>" + ratingMethod(data.rating) + "</div></div>" +
		"<p>" + (data.review ? data.review : data.summary) + "</p>" +
		"<p><small>Review " + (data.app ?
			"of <a href=\"javascript:setPage(\'page=app&package=" + data.app.package +
			"\');\">" + data.app.name + "</a>, " : "") + "published on " + data.date +
		"</small>" + (data.reply ?
			"<br><small>Replied to on " + data.replyDate + "</small></p>" : "</p>") + (
			data.review ?
			"" :
			"<a href=\"javascript:setPage(\'page=reviews&id=" + data.id +
			"\')\">READ MORE</a>") + "</div>";
};

ReviewMethods.big = function(data) {
	return "<div class=\"review\"><div class=\"reviewinfo\" onclick=\"setPage(\'page=user&id=" +
		data.author.id + "\')\"><img src=\"" + data.author.image + "\"><div><b>" +
		data.author.name + "</b><br>" + ratingMethod(data.rating) + "</div></div>" +
		"<p>" + data.review + "</p>" +
		"<p><small>Review of <a href=\"javascript:setPage(\'page=app&package=" +
		data.app.package + "\');\">" + data.app.name + "</a>, published on " + data.date +
		"</small></p>" + (data.reply ? "<br><br><h4>Replied to on " + data.replyDate +
			"</h4><p>" + data.reply + "</p>" : "") + "</div>";
};

ReviewMethods.console = function(data) {
	return "<div class=\"review\"><div class=\"reviewinfo\"><img src=\"" + data.author
		.image + "\"><div><b>" + data.author.name + "</b><br>" + ratingMethod(data.rating) +
		"</div></div>" + "<p>" + (data.review ? data.review : data.summary) + "</p>" +
		"<p><small>Published on " + data.date + "</small>" + (data.reply ?
			"<br><small>Replied to on " + data.replyDate + "</small></p>" : "</p>") + (
			data.review ?
			"<div id=\"editReviewReply\" class=\"input long\" contentEditable=\"true\" placeholder=\"Reply to review...\">" +
			(data.reply ? data.reply : "") + "</div>" +
			"<button id=\"editReviewReplyButton\" class=\"outline\">REPLY</button>" :
			"<a href=\"javascript:setPage(\'page=reviews&id=" + data.id +
			"\')\">READ MORE / REPLY</a>") + "</div>";
};

var ReleaseMethods = {};
ReleaseMethods.console = function(release) {
	return "<hr><div style=\"margin: 1em;\">" +
		"<h1 class=\"indented\">Release: " + release.version +
		"<a style=\"font-size: 0.5em; float: right;\" href=\"javascript:setPage(\'page=releases&package=com.james.status&version=" +
		release.version +
		"&edit=changelog\');\"><i class=\"material-icons\">edit</i>EDIT</a></h1>" +
		"<h3 class=\"indented\">Published on " + release.date + "</h3>" +
		ListMethods.grid({}, release.downloads, DownloadMethods.console) +
		"<h3 class=\"indented\">Changelog</h3>" + "<p class=\"indented\">" + (
			release.changelog ? release.changelog.split("\n").join("<br>") : "") +
		"</p>" + "</div>";
};

var DownloadMethods = {};
DownloadMethods.normal = function(data) {
	var dpi = null;
	if (data.download.minDpi && data.download.maxDpi)
		dpi = data.download.minDpi + " - " + data.download.maxDpi + "dpi";
	else if (data.download.minDpi)
		dpi = data.download.minDpi + "dpi+";
	else if (data.download.maxDpi)
		dpi = "0 - " + data.download.maxDpi + "dpi";

	return "<div class=\"download\">" + "<div class=\"downloadheader\">" +
		"<span>" + data.release.date + "</span>" +
		"<i class=\"material-icons downloadicon\" onclick=\"getDownloadURL(\'" +
		data.download.url +
		"\', function(url){location.href=url;});\">file_download</i>" + "</div><hr>" +
		"<div class=\"releasecontent\">" + "<p><b>Version " + data.release.version +
		"</b></p>" + data.release.changelog + "</div>" + "<div id=\"downloadContent" +
		data.download.url + "\" class=\"downloadinfo content\">" +
		"<i class=\"expand material-icons\" onclick=\"document.getElementById(\'downloadContent" +
		data.download.url +
		"\').classList.remove(\'active\');\">expand_more</i><hr>" +
		"<span><b>Target SDK:</b> Android " + AndroidUtils.sdkToVersion(data.download
			.target) + "</span>" + "<span><b>Required SDK:</b> Android " + AndroidUtils
		.sdkToVersion(data.download.min) + (data.download.max ? " - " + AndroidUtils
			.sdkToVersion(data.download.max) : "+") + "</span>" + (data.download.config ?
			"<span><b>Configuration:</b> " + data.download.config + "</span>" : "") + (
			data.download.arch ? "<span><b>Architecture:</b> " + data.download.arch +
			"</span>" : "") + (dpi ? "<span><b>Screen Scale:</b> " + dpi + "</span>" :
			"") + "<span><b>Download Size:</b> " + data.download.size + "</span>" +
		"</div>" +
		"<div class=\"expand\" onclick=\"document.getElementById(\'downloadContent" +
		data.download.url + "\').classList.add(\'active\');\">" +
		"<hr><div class=\"stat\"><i class=\"material-icons\">info</i><span>APK INFO</span></div>" +
		"</div>" + "</div>";
};

DownloadMethods.console = function(download) {
	var dpi = null;
	if (download.minDpi && download.maxDpi)
		dpi = download.minDpi + " - " + download.maxDpi + "dpi";
	else if (download.minDpi)
		dpi = download.minDpi + "dpi+";
	else if (download.maxDpi)
		dpi = "0 - " + download.maxDpi + "dpi";

	return "<div class=\"download\">" + "<div class=\"downloadheader\">" +
		"<span>APK</span>" +
		"<i class=\"material-icons downloadicon\" onclick=\"getDownloadURL(\'" +
		download.url + "\', function(url){location.href=url;});\">file_download</i>" +
		"</div><hr>" + "<div class=\"downloadinfo\">" +
		"<span><b>Target SDK:</b> Android " + AndroidUtils.sdkToVersion(download.target) +
		"</span>" + "<span><b>Required SDK:</b> Android " + AndroidUtils.sdkToVersion(
			download.min) + (download.max ? " - " + AndroidUtils.sdkToVersion(download.max) :
			"+") + "</span>" + (download.config ? "<span><b>Configuration:</b> " +
			download.config + "</span>" : "") + (download.arch ?
			"<span><b>Architecture:</b> " + download.arch + "</span>" : "") + (dpi ?
			"<span><b>Screen Scale:</b> " + dpi + "</span>" : "") +
		"<span><b>Download Size:</b> " + download.size + "</span>" + "</div>" +
		"</div>";
};

DownloadMethods.consoleEdit = function(download) {
	var dpi = null;
	if (download.minDpi && download.maxDpi)
		dpi = download.minDpi + " - " + download.maxDpi + "dpi";
	else if (download.minDpi)
		dpi = download.minDpi + "dpi+";
	else if (download.maxDpi)
		dpi = "0 - " + download.maxDpi + "dpi";

	return "<div class=\"download\">" + "<div class=\"downloadheader\">" +
		"<span>APK</span>" +
		"<i class=\"material-icons downloadicon\" style=\"color: #D93636;\">delete</i>" +
		"</div><hr>" + "<div class=\"downloadinfo\">" +
		"<span><b>Target SDK:</b> Android " + AndroidUtils.sdkToVersion(download.target) +
		"</span>" + "<span><b>Required SDK:</b> Android " + AndroidUtils.sdkToVersion(
			download.min) + (download.max ? " - " + AndroidUtils.sdkToVersion(download.max) :
			"+") + "</span>" + (download.config ? "<span><b>Configuration:</b> " +
			download.config + "</span>" : "") + (download.arch ?
			"<span><b>Architecture:</b> " + download.arch + "</span>" : "") + (dpi ?
			"<span><b>Screen Scale:</b> " + dpi + "</span>" : "") +
		"<span><b>Download Size:</b> " + download.size + "</span>" + "</div>" +
		"</div>";
};

var LinkMethods = {};
LinkMethods.normal = function(link) {
	var icon = "link";
	if (link.type == "source")
		icon = "code";
	else if (link.type == "website")
		icon = "public";
	else if (link.type == "donation")
		icon = "attach_money";
	else if (link.type == "email")
		icon = "email";
	else if (link.type == "phone")
		icon = "phone";
	else if (link.type == "message")
		icon = "message";
	else if (link.type == "forum")
		icon = "group_work";
	else if (link.type == "privacy_policy")
		icon = "visibility";
	else if (link.type == "tos")
		icon = "gavel";

	return "<a class=\"link\" href=\"" + link.url +
		"\"><i class=\"material-icons\">" + icon + "</i>" + link.name.toUpperCase() +
		"</a>";
};

LinkMethods.editable = function(link) {
	return "<div class=\"link editable\"><div class=\"input long\" contentEditable=\"true\" placeholder=\"Link Title\">" +
	(link && link.name ? link.name : "") +
	"</div><div class=\"input long\" contentEditable=\"true\" placeholder=\"Link URL\">" +
	(link && link.url ? link.url : "") + "</div></div>";
};

LinkMethods.largeButton = function(link) {
	return "<button style=\"width: 20em; margin: 1em;\"" + (link && link.onclick ?
		" onclick=\"" + link.onclick + "\"" : "") + ">" + (link && link.icon ?
		"<br><i class=\"material-icons\">" + link.icon +
		"</i><h4 style=\"margin-top: 0;\"" : "<h4") + ">" + (link && link.name ?
		link.name : "") + "</h4>" + (link && link.description ? "<p>" + link.description +
		"</p>" : "") + "</button>";
};

function ratingMethod(rating, color) {
	var html = "<span class=\"rating\" style=\"color: " + (color ? color :
		SiteUtils.getRatingColor(rating)) + "\">"
	for (var i = 5; i > 0; i--) {
		if (Math.round(rating) == i)
			html += "<span class=\"selected\">&#9733;</span>";
		else html += "<span>&#9733;</span>";
	}
	return html + "</span>";
}

var ListMethods = {};
ListMethods.none = function(category, apps, method) {
	if (!apps)
		return "";

	var html = "";
	for (var i = 0; i < apps.length; i++) {
		html += method(apps[i]);
	}
	return html;
};

ListMethods.carousel = function(options, apps, method) {
	if (!apps)
		return "";

	var html = "<div class=\"carousel\" data-slick=\'" + JSON.stringify(options) +
		"\'>";

	for (var i = 0; i < apps.length; i++) {
		html += method(apps[i]);
	}

	return html + "</div>";
};

ListMethods.row = function(category, apps, method) {
	if (!apps)
		return "";

	var html = (category.id ? "" : "<h1 class=\"indented\">" + category.name +
			"</h1>") + "<div class=\"" + (category.description ? "category " : "") +
		"row\"" + (category.color && category.background ?
			" style=\"position: relative; color: " + category.color +
			"; background-color: " + category.background + ";\">" :
			" style=\"position: relative;\">") + (category.id && category.name ?
			"<div class=\"rowinfo\" style=\"vertical-align: top; transform: translateY(calc(4em - 20%));\"><h2>" +
			category.name + "</h2>" + (category.description ? "<p>" + category.description +
				"</p>" : "") +
			"<button class=\"outline\" onclick=\"setPage(\'page=category&id=" +
			category.id + "\')\">MORE</button></div>" : "");

	for (var i = 0; i < apps.length; i++) {
		html += method(apps[i]);
	}

	return html +
		"<div class=\"fadeoverlay\" style=\"background: linear-gradient(to right, transparent, " +
		(category.shade ? category.shade : (category.background && category.background !=
			"transparent" ? category.background : "#FFF")) + ");\"></div></div>";
};

ListMethods.overflow = function(category, apps, method) {
	if (!apps)
		return "";

	var html = (category.name ? "<div class=\"category\">" +
			"<div style=\"margin: 2em 0;\"><h1" + (category.color ? " style=\"color: " +
				category.color + ";\"" : "") + ">" + category.name + "</h1>" + (category.description ?
				"<p" + (category.color ? " style=\"color: " + category.color + ";\"" : "") +
				">" + category.description + "</p>" : "") + "</div>" : "") +
		"<div class=\"row overflow\">";

	for (var i = 0; i < apps.length; i++) {
		html += method(apps[i]);
	}

	if (category.description)
		html += "</div>";
	return html + "</div>";
};

ListMethods.grid = function(category, apps, method) {
	if (!apps)
		return "";

	var html = (category.name ? "<h1 class=\"indented\">" + category.name +
		"</h1>" : "") + "<div class=\"row grid\">";

	for (var i = 0; i < apps.length; i++) {
		html += method(apps[i]);
	}

	return html + "</div>";
};
