//this is all test data, it means nothing
var categories = [
  {
      "name": "stuff",
      "description": "A bunch of stuff.",
      "color": "#000",
      "background": "transparent"
  },
  {
    "name": "apps",
    "description": "A bunch of apps.",
    "color": "#BDBDBD",
    "background": "#303030"
  },
  {
    "name": "games",
    "description": "A bunch of games.",
    "color": "#177323",
    "background": "#7CF38B"
  },
  {
    "name": "more stuff",
    "description": "A bunch of more stuff with a long description.",
    "color": "#000",
    "background": "transparent"
  }
];

var apps = [
  {
    "name": "Status",
    "author": "James Fenn",
    "rating": "8.9",
    "package": "com.james.status",
    "header": "https://raw.githubusercontent.com/TheAndroidMaster/TheAndroidMaster.github.io/master/images/headers/status_bg.png",
    "icon": "https://raw.githubusercontent.com/TheAndroidMaster/Status/master/app/src/main/res/mipmap-xxxhdpi/ic_launcher_web.png"
  },
  {
    "name": "Metronome",
    "author": "James Fenn",
    "rating": 9.2,
    "package": "james.metronome",
    "header": "https://theandroidmaster.github.io/images/headers/metronomePremium.png",
    "icon": "https://raw.githubusercontent.com/TheAndroidMaster/Metronome-Android/master/app/src/main/res/mipmap/ic_launcher_web.png"
  }
];

function getFeatured(element, method) {
  element.innerHTML = "";
  for (var i = 0; i < apps.length; i++) {
    element.innerHTML += method(apps[i]);
  }
}

function getCategories(element, method) {
	element.innerHTML = "";
  console.log("called" + categories.length);
	for (var i = 0; i < categories.length; i++) {
    console.log(i);
		element.innerHTML += "<div id=\"" + categories[i].name + "Category\"></div>";
	}

	setTimeout(function() {
		for (var i = 0; i < categories.length; i++) {
			getCategory(categories[i], method);
		}
	}, 100);
}

function getCategory(category, method) {
  var element = document.getElementById(category.name + "Category");
	element.innerHTML = "<div class=\"category row\" style=\"color: " + category.color + "; background-color: " + category.background + ";\">"
		+ "<div style=\"vertical-align: top; margin-top: 3.5em;\"><h1>" + category.name.charAt(0).toUpperCase() + category.name.substring(1) + "</h1><p>" + category.description + "</p><br><button class=\"outline\">MORE</button></div>"
		+ method(apps[0])
    + method(apps[1])
    + method(apps[0])
    + method(apps[1])
    + method(apps[0])
    + method(apps[1])
    + method(apps[0])
    + method(apps[1])
    + method(apps[0])
    + method(apps[1])
		+ "</div>";
}
