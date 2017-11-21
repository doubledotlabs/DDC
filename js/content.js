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
	var categories = ["apps", "games"];
	for (var i = 0; i < categories.length; i++) {
		element.innerHTML += "<div id=\"" + categories[i] + "Category\"></div>";
	}

	setTimeout(function() {
		for (var i = 0; i < categories.length; i++) {
			getCategory(categories[i], method);
		}
	}, 100);
}

function getCategory(category, method) {
	console.log(category + "Category");
	var element = document.getElementById(category + "Category");
	element.innerHTML = "<h1 class=\"indented\">" + category.charAt(0).toUpperCase() + category.substring(1) + "</h1>"
		+ "<div class=\"row\">"
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
