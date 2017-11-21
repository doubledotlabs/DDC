/**
 * Adds a set of featured elements to the element passed
 * using the method provided.
 */
function getFeatured(element, method) {
  element.innerHTML = "";
  element.innerHTML += method("Sample Title", "Sample Content", "https://example.com/");
  element.innerHTML += method("Status", "8.9/10", "https://github.com/TheAndroidMaster/Status", "https://raw.githubusercontent.com/TheAndroidMaster/TheAndroidMaster.github.io/master/images/headers/status_bg.png");
}
