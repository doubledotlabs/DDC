/**
 * Adds a set of featured elements to the element passed
 * using the method provided.
 */
function getFeatured(element, method) {
  element.innerHTML = method("Status", "James Fenn", "8.9/10", "https://github.com/TheAndroidMaster/Status", "https://raw.githubusercontent.com/TheAndroidMaster/TheAndroidMaster.github.io/master/images/headers/status_bg.png")
	  + method("Metronome", "James Fenn", "9.2/10", "https://github.com/TheAndroidMaster/Metronome", "https://raw.githubusercontent.com/TheAndroidMaster/TheAndroidMaster.github.io/master/images/headers/metronomePremium.png")
		+ method("Status", "James Fenn", "8.9/10", "https://github.com/TheAndroidMaster/Status", "https://raw.githubusercontent.com/TheAndroidMaster/TheAndroidMaster.github.io/master/images/headers/status_bg.png")
	  + method("Metronome", "James Fenn", "9.2/10", "https://github.com/TheAndroidMaster/Metronome", "https://raw.githubusercontent.com/TheAndroidMaster/TheAndroidMaster.github.io/master/images/headers/metronomePremium.png")
}

function getCategories(element, method) {
	element.innerHTML = "";
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
	document.getElementById(category.name + "Category").innerHTML = "<div class=\"category row\" style=\"color: " + category.color + "; background-color: " + category.background + ";\">"
		+ "<div style=\"vertical-align: top; margin-top: 3.5em;\"><h1>" + category.name.charAt(0).toUpperCase() + category.name.substring(1) + "</h1><p>" + category.description + "</p><br><button class=\"outline\">MORE</button></div>"
		+ method("Status", "James Fenn", "8.9", "https://github.com/TheAndroidMaster/Status", "https://raw.githubusercontent.com/TheAndroidMaster/Status/master/app/src/main/res/mipmap-xxxhdpi/ic_launcher_web.png")
		+ method("Metronome", "James Fenn", "9.2", "https://github.com/TheAndroidMaster/Metronome", "https://raw.githubusercontent.com/TheAndroidMaster/Metronome-Android/master/app/src/main/res/mipmap/ic_launcher_web.png")
		+ method("Status", "James Fenn", "8.9", "https://github.com/TheAndroidMaster/Status", "https://raw.githubusercontent.com/TheAndroidMaster/Status/master/app/src/main/res/mipmap-xxxhdpi/ic_launcher_web.png")
		+ method("Metronome", "James Fenn", "9.2", "https://github.com/TheAndroidMaster/Metronome", "https://raw.githubusercontent.com/TheAndroidMaster/Metronome-Android/master/app/src/main/res/mipmap/ic_launcher_web.png")
		+ method("Status", "James Fenn", "8.9", "https://github.com/TheAndroidMaster/Status", "https://raw.githubusercontent.com/TheAndroidMaster/Status/master/app/src/main/res/mipmap-xxxhdpi/ic_launcher_web.png")
		+ method("Metronome", "James Fenn", "9.2", "https://github.com/TheAndroidMaster/Metronome", "https://raw.githubusercontent.com/TheAndroidMaster/Metronome-Android/master/app/src/main/res/mipmap/ic_launcher_web.png")
		+ method("Status", "James Fenn", "8.9", "https://github.com/TheAndroidMaster/Status", "https://raw.githubusercontent.com/TheAndroidMaster/Status/master/app/src/main/res/mipmap-xxxhdpi/ic_launcher_web.png")
		+ method("Metronome", "James Fenn", "9.2", "https://github.com/TheAndroidMaster/Metronome", "https://raw.githubusercontent.com/TheAndroidMaster/Metronome-Android/master/app/src/main/res/mipmap/ic_launcher_web.png")
		+ method("Status", "James Fenn", "8.9", "https://github.com/TheAndroidMaster/Status", "https://raw.githubusercontent.com/TheAndroidMaster/Status/master/app/src/main/res/mipmap-xxxhdpi/ic_launcher_web.png")
		+ method("Metronome", "James Fenn", "9.2", "https://github.com/TheAndroidMaster/Metronome", "https://raw.githubusercontent.com/TheAndroidMaster/Metronome-Android/master/app/src/main/res/mipmap/ic_launcher_web.png")
		+ method("Status", "James Fenn", "8.9", "https://github.com/TheAndroidMaster/Status", "https://raw.githubusercontent.com/TheAndroidMaster/Status/master/app/src/main/res/mipmap-xxxhdpi/ic_launcher_web.png")
		+ method("Metronome", "James Fenn", "9.2", "https://github.com/TheAndroidMaster/Metronome", "https://raw.githubusercontent.com/TheAndroidMaster/Metronome-Android/master/app/src/main/res/mipmap/ic_launcher_web.png")
		+ "</div>";
}
