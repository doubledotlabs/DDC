//this is all test data, it means nothing
var categories = [
  {
      "name": "Stuff",
      "description": "A bunch of stuff.",
      "color": "#000",
      "background": "transparent"
  },
  {
    "name": "Apps",
    "description": "A bunch of apps.",
    "color": "#BDBDBD",
    "background": "#303030"
  },
  {
    "name": "Games",
    "description": "A bunch of games.",
    "color": "#177323",
    "background": "#7CF38B"
  },
  {
    "name": "More Stuff",
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
  },
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
  },
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
  },
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

function getCategories(element, listMethod, method) {
	element.innerHTML = "";
  console.log("called" + categories.length);
	for (var i = 0; i < categories.length; i++) {
    console.log(i);
		element.innerHTML += "<div id=\"" + categories[i].name + "Category\"></div>";
	}

	setTimeout(function() {
		for (var i = 0; i < categories.length; i++) {
			getCategory(categories[i], listMethod, method);
		}
	}, 100);
}

function getCategory(category, listMethod, method) {
  var element = document.getElementById(category.name + "Category");
	element.innerHTML = listMethod(category, apps, method);
}
