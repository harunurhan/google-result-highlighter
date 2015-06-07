var trustedPages;
var highlightAction = function() {
	var results = document.querySelectorAll('h3.r');
	for(var i = 0; i < results.length; i++) {
		var link = results[i].getElementsByTagName('a')[0];
		if(trustedPages[link.hostname]) {// ~ O(1) complexity!
			link.style.background = '#DFF0D8';
		}
	}
};

window.onload = function() {
	var mo = new MutationObserver(highlightAction);
	mo.observe(document.getElementById('res'),
		  	   { childList: true, subtree: true });
	console.log('The end of window.onload');
};

console.log('The end of highlight.js');

// loading stored pages
chrome.storage.sync.get({
  	trustedPages: {} // no default
  }, function(config) {
  	trustedPages = config.trustedPages;
});
