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

function getFeatured(element, listMethod, method) {
  element.appendChild(createElement(listMethod({"name": "Featured"}, apps, method)));
}

function getCategories(element, listMethod, method) {
	for (var i = 0; i < categories.length; i++) {
		element.appendChild(createElement(listMethod(categories[i], apps, method)));
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
