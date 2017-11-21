function getLargeCardsMethod() {
  return function(title, content, url, image) {
    return "<div class=\"largecard\" onclick=\"location.href = \'" + url + "\';\" "
    + (image ? "style=\"background: linear-gradient(to top, rgba(255, 255, 255, 0.9), transparent), url(" + image + "), #FFF; background-repeat: no-repeat; background-size: cover; background-position: center;\"" : "")
    + "><p class=\"info\"><b>" + title + "</b> - " + content + "</p></div>"
  };
}
