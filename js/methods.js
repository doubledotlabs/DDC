class AppMethods {
  static largeCard(app) {
    return "<div class=\"largecard\" onclick=\"setPage(\'page=app&package=" + app.package + "\');\" "
      + "style=\"background: linear-gradient(to top, rgba(255, 255, 255, 0.9), transparent), url(" + app.header + "), #FFF; background-repeat: no-repeat; background-size: cover; background-position: center;\""
      + "><p class=\"info\"><b>" + app.name + "</b>&nbsp;&ndash;&nbsp;" + app.rating + "/5</p></div>";
  }

  static smallCard(app) {
    return "<div class=\"smallcard\" onclick=\"setPage(\'page=app&package=" + app.package + "\');\">"
      + "<img src=\"" + app.icon + "\">"
      + "<p class=\"info\"><b>" + app.name + "</b><br><small style=\"position: absolute;\">" + app.author.name
      + "</small><small style=\"float: right;\"><b style=\"color: " + SiteUtils.getRatingColor(app.rating) + ";\">" + app.rating + "&nbsp;&#9733;</b></small></p></div>";
  }

  static tinyCard(app) {
    return "<div class=\"tinycard\" onclick=\"setPage(\'page=app&package=" + app.package + "\');\">"
      + "<img src=\"" + app.icon + "\">"
      + "<p class=\"info\"><b>" + app.name + "</b><br><small style=\"position: absolute;\">" + app.author.name
      + "</small><small style=\"float: right;\"><b style=\"color: " + SiteUtils.getRatingColor(app.rating) + ";\">" + app.rating + "&nbsp;&#9733;</b></small></p></div>";
  }

  static consoleTinyCard(app) {
    return "<div class=\"tinycard\" onclick=\"setPage(\'page=app&package=" + app.package + "\');\">"
      + "<img src=\"" + app.icon + "\">"
      + "<p class=\"info\"><b>" + app.name + "</b><br><small style=\"position: absolute;\">" + app.downloads + " downloads"
      + "</small><small style=\"float: right;\"><b style=\"color: " + SiteUtils.getRatingColor(app.rating) + ";\">" + app.rating + "&nbsp;&#9733;</b></small></p></div>";
  }
}

class ImageMethods {

  static card(image) {
    return "<img class=\"card\" src=\"" + image.url + "\" onclick=\"location.href=\'" + image.url + "\';\">";
  }

}

class CategoryMethods {

  static chip(data) {
    return "<p class=\"chip\"" + (data.id ? " onclick=\"setPage(\'page=category&id=" + data.id + "\');\"" : "") + ">" + data.name + "</p>";
  }

}

class ReviewMethods {

  static normal(data) {
    return "<div class=\"review\"><div class=\"reviewinfo\" onclick=\"setPage(\'page=user&id=" + data.user.id + "\')\"><img src=\"" + data.user.image + "\"><div><b>" + data.user.name + "</b><br>"
      + ratingMethod(data.rating) + "</div></div>"
      + "<p><small>Reviewed " + (data.app ? "<a href=\"javascript:setPage(\'page=app&package=" + data.app.package + "\');\">" + data.app.name + "</a> " : "") + "on " + data.date + "</small></p>"
      + "<p>" + (data.review ? data.review + "</p>" : data.summary + "</p><a href=\"javascript:setPage(\'page=review&id=" + data.id + "\')\">Read More</a>")
      + "</div>"
  }

  static console(data) {
    return "<div class=\"review\"><div class=\"reviewinfo\"><img src=\"" + data.user.image + "\"><div><b>" + data.user.name + "</b><br>"
      + ratingMethod(data.rating) + "</div></div>"
      + "<p><small>" + data.date + "</small></p>"
      + "<p>" + (data.review ? data.review + "</p><div class=\"input long\" contentEditable=\"true\" placeholder=\"Reply to review...\"></div><button class=\"outline\">REPLY</button>" : data.summary 
      + "</p><a href=\"javascript:setPage(\'page=review&id=" + data.id + "\')\">Read More / Reply</a>")
      + "</div>"
  }

}

class DownloadMethods {

  static normal(data) {
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
      + "<span><b>Target SDK:</b> Android " + AndroidUtils.sdkToVersion(data.download.target) + "</span>"
      + "<span><b>Required SDK:</b> Android " + AndroidUtils.sdkToVersion(data.download.min) + (data.download.max ? " - " + AndroidUtils.sdkToVersion(data.download.max) : "+") + "</span>"
      + (data.download.config ? "<span><b>Configuration:</b> " + data.download.config + "</span>" : "")
  		+ (data.download.arch ? "<span><b>Architecture:</b> " + data.download.arch + "</span>" : "")
  		+ (dpi ? "<span><b>Screen Scale:</b> " + dpi + "</span>" : "")
      + "<span><b>Download Size:</b> " + data.download.size + "</span>"
      + "</div>"
      + "<div class=\"expand\" onclick=\"document.getElementById(\'downloadContent" + data.download.url + "\').classList.add(\'active\');\">"
      + "<hr><div class=\"stat\"><i class=\"material-icons\">info</i><span>APK INFO</span></div>"
      + "</div>"
      + "</div>";
  }

}

function linksMethod(link) {
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

  return "<a class=\"link\" href=\"" + link.url + "\"><i class=\"material-icons\">" + icon + "</i>" + link.name.toUpperCase() + "</a>";
}

function ratingMethod(rating, color) {
  var html = "<span class=\"rating\" style=\"color: " + (color ? color : SiteUtils.getRatingColor(rating)) + "\">"
  for (var i = 5; i > 0; i--) {
    if (Math.round(rating) == i)
      html += "<span class=\"selected\">&#9733;</span>";
    else html += "<span>&#9733;</span>";
  }
  return html + "</span>";
}

class ListMethods {

  static none(category, apps, method) {
  	var html = "";
  	for (var i = 0; i < apps.length; i++) {
  		html += method(apps[i]);
  	}
  	return html;
  }

  static carousel(options, apps, method) {
    var html = "<div class=\"carousel\" data-slick=\'" + JSON.stringify(options) + "\'>";

    for (var i = 0; i < apps.length; i++) {
  		html += method(apps[i]);
  	}

    return html + "</div>";
  }

  static row(category, apps, method) {
  	var html = (category.id ? "" : "<h1 class=\"indented\">" + category.name + "</h1>") + "<div class=\"" + (category.description ? "category " : "") + "row\""
  		+ (category.color && category.background ? " style=\"position: relative; color: " + category.color + "; background-color: " + category.background + ";\">" : " style=\"position: relative;\">")
      + (category.id && category.name ? "<div class=\"rowinfo\" style=\"vertical-align: top; transform: translateY(calc(4em - 20%));\"><h2>" + category.name + "</h2>" + (category.description ? "<p>" + category.description
  		+ "</p>" : "") + "<button class=\"outline\" onclick=\"setPage(\'page=category&id=" + category.id + "\')\">MORE</button></div>" : "");

  	for (var i = 0; i < apps.length; i++) {
  		html += method(apps[i]);
  	}

  	return html + "<div class=\"fadeoverlay\" style=\"background: linear-gradient(to right, transparent, "
      + (category.shade ? category.shade : (category.background && category.background != "transparent" ? category.background : "#FFF")) + ");\"></div></div>";
  }

  static overflow(category, apps, method) {
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

  static grid(category, apps, method) {
    var html = (category.name ? "<h1 class=\"indented\">" + category.name + "</h1>" : "") + "<div class=\"row grid\">";

    for (var i = 0; i < apps.length; i++) {
  		html += method(apps[i]);
  	}

    return html + "</div>";
  }

}
