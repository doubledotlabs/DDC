var GitHub = {};

if (typeof(Storage) !== "undefined") {
  GitHub.githubAccessToken = localStorage.getItem("auth-githubAccessToken");
}

firebase.auth().getRedirectResult().then(function(result) {
  if (result.credential) {
    GitHub.githubAccessToken = result.credential.accessToken;
    if (typeof(Storage) !== "undefined") {
      localStorage.setItem("auth-githubAccessToken", GitHub.githubAccessToken);
    }
  }
});

GitHub.signInToGithub = function() {
  var provider = new firebase.auth.GithubAuthProvider();
  firebase.auth().signInWithRedirect(provider)
};

GitHub.getRepositories = function(lastCursor, onComplete, onError) {
  GitHub.makeRequest("query { viewer { repositories(first: 20" + (lastCursor ? " after: \\\"" + lastCursor + "\\\"" : "") + ") { edges { cursor node { name description } } } } }", onComplete, onError);
};

GitHub.makeRequest = function(query, onComplete, onError) {
  if (GitHub.githubAccessToken) {
    var requestContent = new XMLHttpRequest();
  	requestContent.onreadystatechange = function() {
  		if (requestContent.readyState === 4) {
  			if (requestContent.status === 200 || requestContent.status == 0) {
  				onComplete(JSON.parse(requestContent.responseText));
  			} else if (requestContent.status == 401) {
          GitHub.signInToGithub();
        } else {
  				onError(requestContent.status, requestContent.responseText);
  			}
  		}
  	}
  	requestContent.open("POST", "https://api.github.com/graphql", true);
    requestContent.setRequestHeader('Authorization', 'bearer ' + GitHub.githubAccessToken);
  	requestContent.send("{ \"query\": \"" + query + "\" }");
  } else {
    GitHub.signInToGithub();
  }
};
