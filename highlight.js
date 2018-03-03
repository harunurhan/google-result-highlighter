var trustedPages; // used as a hashmap where key is web page, value is bg color

chrome.storage.sync.get({
  	trustedPages: {}
  }, function(storage) {
  	trustedPages = storage.trustedPages;
});

var highlightTrustedSources = function() {
	var results = document.querySelectorAll('h3.r > a');
	for (var i = 0; i < results.length; i++) {
		var link = results[i];
		if (trustedPages.hasOwnProperty(link.hostname)) { // ~ O(1) complexity!
			link.style.background = trustedPages[link.hostname]; // set defined color as background
		}
	}
};

window.addEventListener('load', function() {
	highlightTrustedSources();
});
