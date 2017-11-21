function getLargeCardsMethod() {
  return function(name, author, rating, url, image) {
    return "<div class=\"largecard\" onclick=\"location.href = \'" + url + "\';\" "
    + (image ? "style=\"background: linear-gradient(to top, rgba(255, 255, 255, 0.9), transparent), url(" + image + "), #FFF; background-repeat: no-repeat; background-size: cover; background-position: center;\"" : "")
    + "><p class=\"info\"><b>" + name + "</b> - " + rating + "</p></div>"
  };
}

function getSmallCardsMethod() {
  return function(name, author, rating, url, image) {
    return "<div class=\"smallcard\" onclick=\"location.href = \'" + url + "\';\">"
    + (image ? "<img src=\"" + image + "\">" : "")
    + "<p class=\"info\"><b>" + name + "</b><br><small style=\"position: absolute;\">" + author + "</small><small style=\"float: right;\"><b>" + rating + "</b></small></p></div>"
  };
}
