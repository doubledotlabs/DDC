function getLargeCardsMethod() {
  return function(title, content, url, image) {
    return "<div class=\"largecard\" onclick=\"location.href = \'" + url + "\';\">" + (image ? "<img src=\"" + image + "\">" : "") + "<h4>" + title + "</h4><p>" + content + "</p></div>"
  };
}
