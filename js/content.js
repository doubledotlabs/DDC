/**
 * Adds a set of featured elements to the element passed
 * using the method provided.
 */
function getFeatured(element, method) {
  element.innerHTML = method("Status", "8.9/10", "https://github.com/TheAndroidMaster/Status", "https://raw.githubusercontent.com/TheAndroidMaster/TheAndroidMaster.github.io/master/images/headers/status_bg.png")
	  + method("Metronome", "9.2/10", "https://github.com/TheAndroidMaster/Metronome", "https://raw.githubusercontent.com/TheAndroidMaster/TheAndroidMaster.github.io/master/images/headers/metronomePremium.png")
		+ method("Status", "8.9/10", "https://github.com/TheAndroidMaster/Status", "https://raw.githubusercontent.com/TheAndroidMaster/TheAndroidMaster.github.io/master/images/headers/status_bg.png")
	  + method("Metronome", "9.2/10", "https://github.com/TheAndroidMaster/Metronome", "https://raw.githubusercontent.com/TheAndroidMaster/TheAndroidMaster.github.io/master/images/headers/metronomePremium.png")
}

function getCategories(element, method) {
	element.innerHTML = "";
	var categories = [{
			"name": "apps",
			"description": "A bunch of apps.",
			"image": "https://raw.githubusercontent.com/TheAndroidMaster/TheAndroidMaster.github.io/master/images/headers/highway.jpg",
			"color": "#303030",
			"background": "#FAFAFA"
		},
		{
			"name": "games",
			"description": "A bunch of games.",
			"image": "https://raw.githubusercontent.com/TheAndroidMaster/TheAndroidMaster.github.io/master/images/headers/cabbage.jpg",
			"color": "#679235",
			"background": "#847367"
		}
	];

	for (var i = 0; i < categories.length; i++) {
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
	element.innerHTML = "<div class=\"category row\" style=\"color: " + category.color + "; background: linear-gradient(to right, " + category.background + ", transparent), url(" + category.image + "), " + category.background + "; background-repeat: no-repeat; background-size: cover; background-position: center;\">"
		+ "<div style=\"vertical-align: top; margin-top: 3.5em;\"><h1>" + category.name.charAt(0).toUpperCase() + category.name.substring(1) + "</h1><p>" + category.description + "</p></div>"
		+ method("Status", "8.9/10", "https://github.com/TheAndroidMaster/Status", "https://raw.githubusercontent.com/TheAndroidMaster/Status/master/app/src/main/res/mipmap-xxxhdpi/ic_launcher_web.png")
	  + method("Metronome", "9.2/10", "https://github.com/TheAndroidMaster/Metronome", "https://raw.githubusercontent.com/TheAndroidMaster/Metronome-Android/master/app/src/main/res/mipmap/ic_launcher_web.png")
		+ method("Status", "8.9/10", "https://github.com/TheAndroidMaster/Status", "https://raw.githubusercontent.com/TheAndroidMaster/Status/master/app/src/main/res/mipmap-xxxhdpi/ic_launcher_web.png")
	  + method("Metronome", "9.2/10", "https://github.com/TheAndroidMaster/Metronome", "https://raw.githubusercontent.com/TheAndroidMaster/Metronome-Android/master/app/src/main/res/mipmap/ic_launcher_web.png")
		+ method("Status", "8.9/10", "https://github.com/TheAndroidMaster/Status", "https://raw.githubusercontent.com/TheAndroidMaster/Status/master/app/src/main/res/mipmap-xxxhdpi/ic_launcher_web.png")
	  + method("Metronome", "9.2/10", "https://github.com/TheAndroidMaster/Metronome", "https://raw.githubusercontent.com/TheAndroidMaster/Metronome-Android/master/app/src/main/res/mipmap/ic_launcher_web.png")
		+ method("Status", "8.9/10", "https://github.com/TheAndroidMaster/Status", "https://raw.githubusercontent.com/TheAndroidMaster/Status/master/app/src/main/res/mipmap-xxxhdpi/ic_launcher_web.png")
	  + method("Metronome", "9.2/10", "https://github.com/TheAndroidMaster/Metronome", "https://raw.githubusercontent.com/TheAndroidMaster/Metronome-Android/master/app/src/main/res/mipmap/ic_launcher_web.png")
		+ method("Status", "8.9/10", "https://github.com/TheAndroidMaster/Status", "https://raw.githubusercontent.com/TheAndroidMaster/Status/master/app/src/main/res/mipmap-xxxhdpi/ic_launcher_web.png")
	  + method("Metronome", "9.2/10", "https://github.com/TheAndroidMaster/Metronome", "https://raw.githubusercontent.com/TheAndroidMaster/Metronome-Android/master/app/src/main/res/mipmap/ic_launcher_web.png")
		+ method("Status", "8.9/10", "https://github.com/TheAndroidMaster/Status", "https://raw.githubusercontent.com/TheAndroidMaster/Status/master/app/src/main/res/mipmap-xxxhdpi/ic_launcher_web.png")
	  + method("Metronome", "9.2/10", "https://github.com/TheAndroidMaster/Metronome", "https://raw.githubusercontent.com/TheAndroidMaster/Metronome-Android/master/app/src/main/res/mipmap/ic_launcher_web.png")
		+ "</div>";
}
