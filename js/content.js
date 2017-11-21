/**
 * Adds a set of featured elements to the element passed
 * using the method provided.
 */
function getFeatured(element, method) {
  element.innerHTML = "";
  element.innerHTML += method("Status", "8.9/10", "https://github.com/TheAndroidMaster/Status", "https://raw.githubusercontent.com/TheAndroidMaster/TheAndroidMaster.github.io/master/images/headers/status_bg.png");
  element.innerHTML += method("Metronome", "9.2/10", "https://github.com/TheAndroidMaster/Metronome", "https://raw.githubusercontent.com/TheAndroidMaster/TheAndroidMaster.github.io/master/images/headers/metronomePremium.png");
	element.innerHTML += method("Status", "8.9/10", "https://github.com/TheAndroidMaster/Status", "https://raw.githubusercontent.com/TheAndroidMaster/TheAndroidMaster.github.io/master/images/headers/status_bg.png");
  element.innerHTML += method("Metronome", "9.2/10", "https://github.com/TheAndroidMaster/Metronome", "https://raw.githubusercontent.com/TheAndroidMaster/TheAndroidMaster.github.io/master/images/headers/metronomePremium.png");
}
