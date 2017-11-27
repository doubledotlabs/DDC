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
  return "<p class=\"chip\"" + (data.id ? " onclick=\"setPage(\'category=" + data.id + "\');\"" : "") + ">" + data.name + "</p>";
}

function sdkToVersion(sdk) {
  if (sdk == 1)
    return "Android";
  else if (sdk == 2)
    return "Android 1.1";
  else if (sdk == 3)
    return "Android 1.5 Cupcake";
  else if (sdk == 4)
    return "Android 1.6 Donut";
  else if (sdk == 5 || sdk == 6)
    return "Android 2.0 Eclair";
  else if (sdk == 7)
    return "Android 2.1 Eclair";
  else if (sdk == 8)
    return "Android 2.2 Froyo";
  else if (sdk == 9 || sdk == 10)
    return "Android 2.3 Gingerbread";
  else if (sdk == 11)
    return "Android 3.0 Honeycomb";
  else if (sdk == 12)
    return "Android 3.1 Honeycomb";
  else if (sdk == 13)
    return "Android 3.2 Honeycomb";
  else if (sdk == 14 || sdk == 15)
    return "Android 4.0 Ice Cream Sandwich";
  else if (sdk == 16)
    return "Android 4.1 Jelly Bean";
  else if (sdk == 17)
    return "Android 4.2 Jelly Bean";
  else if (sdk == 18)
    return "Android 4.3 Jelly Bean";
  else if (sdk == 19 || sdk == 20 || sdk == 21)
    return "Android 4.4 KitKat";
  else if (sdk == 21)
    return "Android 5.0 Lollipop";
  else if (sdk == 22)
    return "Android 5.1 Lollipop";
  else if (sdk == 23)
    return "Android 6.0 Marshmallow";
  else if (sdk == 24)
    return "Android 7.0 Nougat";
  else if (sdk == 25)
    return "Android 7.1 Nougat";
  else if (sdk == 26)
    return "Android 8.0 Oreo";
  else return "SDK " + sdk;
}

function downloadMethod(download) {
  var sdk = null;
  var sdkTooltip = null;
  if (download.min) {
    if (download.max) {
      sdk = sdkToVersion(download.min) + " - " + sdkToVersion(download.max);
      sdkTooltip = "SDK " + download.min + " - SDK " + download.max;
    } else {
      sdk = sdkToVersion(download.min) + "+";
      sdkTooltip = "SDK " + download.min + "+";
    }
  }

  var devices = null;
  var devicesTooltip = null;
  if (!download.config) {
    var small = "<i class=\"material-icons\">phone_android</i>";
    var med = "<i class=\"material-icons\">smartphone</i>";
    var large = "<i class=\"material-icons\">tablet_android</i>";

    if (download.minDpi < 213) {
      if (download.maxDpi >= 426) {
        devices = small + med + large;
      } else if (download.maxDpi >= 213) {
        devices = small + med;
      } else {
        devices = small;
      }
    } else if (download.minDpi < 426) {
      if (download.maxDpi >= 426) {
        devices = med + large;
      } else {
        devices = med;
      }
    } else {
      devices = large;
    }

    devicesTooltip = download.minDpi + "dpi - " + download.maxDpi + "dpi";
  } else if (download.config == "wear") {
    devices = "<i class=\"material-icons\">watch</i>";
    devicesTooltip = "Android Wear";
  } else if (download.config == "auto") {
    devices = "<i class=\"material-icons\">directions_car</i>";
    devicesTooltip = "Android Auto";
  } else if (download.config == "tv") {
    devices = "<i class=\"material-icons\">tv</i>";
    devicesTooltip = "Android TV";
  }

  return "<div class=\"apk\">"
    + "<div><span>" + download.target + "</span><b>Target SDK</b></div>"
    + (sdk ? "<div title=\"" + sdkTooltip + "\"><span>" + sdk + "</span><b>Supported Android Versions</b></div>" : "")
    + (devices ? "<div title=\"" + devicesTooltip + "\"><span>" + devices + "</span><b>Supported Devices</b></div>" : "")
    + (download.arch ? "<div><span>" + download.arch + "</span><b>Supported Architectures</b></div>" : "")
    + "<button class=\"outline\" style=\"position: absolute; bottom: 0;\" onclick=\"location.href=\'download:" + download.url + "\';\">DOWNLOAD - " + download.size + "</button>"
    + "</div>"
}

function reviewMethod(data) {
  return "<div class=\"review\"><div class=\"reviewinfo\" onclick=\"setPage(\'user=" + data.user.id + "\')\"><img src=\"" + data.user.image + "\"><div><b>" + data.user.name + "</b><br>" + data.rating + "&nbsp;/&nbsp;10</div></div>"
    + "<p>" + (data.review ? data.review + "</p>" : data.summary + "</p><a onclick=\"setPage(\'review=" + data.id + "\')\">Read More</a>")
    + "</div>"
}

function carouselListMethod(options, apps, method) {
  var html = "<div class=\"carousel\" data-slick=\'" + JSON.stringify(options) + "\'>";

  for (var i = 0; i < apps.length; i++) {
		html += method(apps[i]);
	}

  return html + "</div>";
}

function rowListMethod(category, apps, method) {
	var html = (category.id ? "" : "<h1 class=\"indented\">" + category.name + "</h1>") + "<div class=\"" + (category.description ? "category " : "") + "row\""
		+ (category.color && category.background ? " style=\"position: relative; color: " + category.color + "; background-color: " + category.background + ";\">" : " style=\"position: relative;\">")
    + (category.id && category.name ? "<div class=\"rowinfo\" style=\"vertical-align: top; transform: translateY(calc(4em - 20%));\"><h2>" + category.name + "</h2>" + (category.description ? "<p>" + category.description
		+ "</p>" : "") + "<button class=\"outline\" onclick=\"setPage(\'category=" + category.id + "\')\">MORE</button></div>" : "");

	for (var i = 0; i < apps.length; i++) {
		html += method(apps[i]);
	}

	return html + "<div style=\"position: absolute; width: 150px; top: 0; bottom: 0; right: 0; z-index: 100; background: linear-gradient(to right, transparent, "
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
