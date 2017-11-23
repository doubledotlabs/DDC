//this is all test data, it means nothing
var categories = [
  {
		"id": "stuff",
    "name": "Stuff",
    "description": "A bunch of stuff.",
    "color": "#000",
    "background": "transparent"
  },
  {
		"id": "thanksgiving",
    "name": "Thanksgiving",
    "description": "Enjoy this collection of apps that we are thankful for.",
    "color": "#DC9755",
    "background": "#692806"
  },
  {
		"id": "games",
    "name": "Games",
    "description": "These games show off some beautiful graphics without impacting performance.",
    "color": "#177323",
    "background": "#7CF38B"
  },
  {
		"id": "morestuff",
    "name": "More Stuff",
    "description": "A bunch of more stuff with a long description.",
    "color": "#82B1FF",
    "background": "#0D47A1"
  }
];

var apps = [
  {
    "name": "Status",
    "author": "James Fenn",
    "rating": "8.9",
    "ratings": 8273,
    "package": "com.james.status",
    "description": "Status is a thing that does stuff with things and uses those things to do stuff. Status is a thing that does stuff with things and uses those things to do stuff. Status is a thing that does stuff with things and uses those things to do stuff.",
    "screenshots": [
      {"url":"https://raw.githubusercontent.com/TheAndroidMaster/TheAndroidMaster.github.io/master/images/screenshots/ColorPickerDialog-Color.png"},
      {"url":"https://raw.githubusercontent.com/TheAndroidMaster/TheAndroidMaster.github.io/master/images/screenshots/ColorPickerDialog-Image.png"}
    ],
    "header": "https://raw.githubusercontent.com/TheAndroidMaster/TheAndroidMaster.github.io/master/images/headers/status_bg.png",
    "icon": "https://raw.githubusercontent.com/TheAndroidMaster/Status/master/app/src/main/res/mipmap-xxxhdpi/ic_launcher_web.png"
  },
  {
    "name": "Metronome",
    "author": "James Fenn",
    "rating": 9.2,
    "ratings": 4985,
    "package": "james.metronome",
    "description": "Metronome is a thing that does stuff with things and uses those things to do stuff. Metronome is a thing that does stuff with things and uses those things to do stuff. Metronome is a thing that does stuff with things and uses those things to do stuff.",
    "screenshots": [
      {"url":"https://camo.githubusercontent.com/db497d07ffe194806fbdc2b9892fbe6975403ffe/68747470733a2f2f746865616e64726f69646d61737465722e6769746875622e696f2f617070732f6d6574726f6e6f6d652f696d616765732f6d61696e2e706e67"},
      {"url":"https://camo.githubusercontent.com/a7d712e1e207893363b9fbabf649f10f79a1145e/68747470733a2f2f746865616e64726f69646d61737465722e6769746875622e696f2f617070732f6d6574726f6e6f6d652f696d616765732f61626f75742e706e67"},
      {"url":"https://camo.githubusercontent.com/70da392453b2c1ff894603fcb9920142164e2541/68747470733a2f2f746865616e64726f69646d61737465722e6769746875622e696f2f617070732f6d6574726f6e6f6d652f696d616765732f7468656d65732e706e67"}
    ],
    "header": "https://theandroidmaster.github.io/images/headers/metronomePremium.png",
    "icon": "https://raw.githubusercontent.com/TheAndroidMaster/Metronome-Android/master/app/src/main/res/mipmap/ic_launcher_web.png"
  },
	{
    "name": "Status",
    "author": "James Fenn",
    "rating": "8.9",
    "package": "com.james.status",
    "description": "Status is a thing that does stuff with things and uses those things to do stuff.",
    "header": "https://raw.githubusercontent.com/TheAndroidMaster/TheAndroidMaster.github.io/master/images/headers/status_bg.png",
    "icon": "https://raw.githubusercontent.com/TheAndroidMaster/Status/master/app/src/main/res/mipmap-xxxhdpi/ic_launcher_web.png"
  },
  {
    "name": "Metronome",
    "author": "James Fenn",
    "rating": 9.2,
    "package": "james.metronome",
    "description": "Metronome is a thing that does stuff with things and uses those things to do stuff.",
    "header": "https://theandroidmaster.github.io/images/headers/metronomePremium.png",
    "icon": "https://raw.githubusercontent.com/TheAndroidMaster/Metronome-Android/master/app/src/main/res/mipmap/ic_launcher_web.png"
  },
	{
    "name": "Status",
    "author": "James Fenn",
    "rating": "8.9",
    "package": "com.james.status",
    "description": "Status is a thing that does stuff with things and uses those things to do stuff.",
    "header": "https://raw.githubusercontent.com/TheAndroidMaster/TheAndroidMaster.github.io/master/images/headers/status_bg.png",
    "icon": "https://raw.githubusercontent.com/TheAndroidMaster/Status/master/app/src/main/res/mipmap-xxxhdpi/ic_launcher_web.png"
  },
  {
    "name": "Metronome",
    "author": "James Fenn",
    "rating": 9.2,
    "package": "james.metronome",
    "description": "Metronome is a thing that does stuff with things and uses those things to do stuff.",
    "header": "https://theandroidmaster.github.io/images/headers/metronomePremium.png",
    "icon": "https://raw.githubusercontent.com/TheAndroidMaster/Metronome-Android/master/app/src/main/res/mipmap/ic_launcher_web.png"
  },
	{
    "name": "Status",
    "author": "James Fenn",
    "rating": "8.9",
    "package": "com.james.status",
    "description": "Status is a thing that does stuff with things and uses those things to do stuff.",
    "header": "https://raw.githubusercontent.com/TheAndroidMaster/TheAndroidMaster.github.io/master/images/headers/status_bg.png",
    "icon": "https://raw.githubusercontent.com/TheAndroidMaster/Status/master/app/src/main/res/mipmap-xxxhdpi/ic_launcher_web.png"
  },
  {
    "name": "Metronome",
    "author": "James Fenn",
    "rating": 9.2,
    "package": "james.metronome",
    "description": "Metronome is a thing that does stuff with things and uses those things to do stuff.",
    "header": "https://theandroidmaster.github.io/images/headers/metronomePremium.png",
    "icon": "https://raw.githubusercontent.com/TheAndroidMaster/Metronome-Android/master/app/src/main/res/mipmap/ic_launcher_web.png"
  },
  {
    "name": "Status",
    "author": "James Fenn",
    "rating": "8.9",
    "package": "com.james.status",
    "description": "Status is a thing that does stuff with things and uses those things to do stuff.",
    "header": "https://raw.githubusercontent.com/TheAndroidMaster/TheAndroidMaster.github.io/master/images/headers/status_bg.png",
    "icon": "https://raw.githubusercontent.com/TheAndroidMaster/Status/master/app/src/main/res/mipmap-xxxhdpi/ic_launcher_web.png"
  },
  {
    "name": "Metronome",
    "author": "James Fenn",
    "rating": 9.2,
    "package": "james.metronome",
    "description": "Metronome is a thing that does stuff with things and uses those things to do stuff.",
    "header": "https://theandroidmaster.github.io/images/headers/metronomePremium.png",
    "icon": "https://raw.githubusercontent.com/TheAndroidMaster/Metronome-Android/master/app/src/main/res/mipmap/ic_launcher_web.png"
  }
];

function getCategories(element, listMethod, method) {
	for (var i = 0; i < categories.length; i++) {
		element.appendChild(createElement(listMethod(categories[i], apps, method)));
	}
}

function getCategory(id) {
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

function createElement(html) {
    var fragment = document.createDocumentFragment();
    var temp = document.createElement('div');
    temp.innerHTML = html;
    while (temp.firstChild) {
        fragment.appendChild(temp.firstChild);
    }

    return fragment;
}
