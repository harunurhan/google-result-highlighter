var trustedPages; // used as a hashmap where key is web page, value is boolean

chrome.storage.sync.get({
  	trustedPages: {} // no default
  }, function(config) {
  	trustedPages = config.trustedPages;
});

var highlightAction = function() {
	var results = document.querySelectorAll('h3.r');
	for(var i = 0; i < results.length; i++) {
		var link = results[i].getElementsByTagName('a')[0];
		console.log('highlightAction: '+link.hostname); // DELETE
		if(trustedPages.hasOwnProperty(link.hostname)) {// ~ O(1) complexity!
			link.style.background = trustedPages[link.hostname]; // set defined color as background
		}
	}
};

window.onload = function() {
	var resultsElement = document.getElementById('res');
	var mutationObserver = new MutationObserver(highlightAction);
	var observeOptions =  { childList: true, subtree: true };
	if(resultsElement) { // returns null in some cases
		mutationObserver.observe(resultsElement, observeOptions);
	} else {
		mutationObserver.observe(document.body, observeOptions); // TODO: find deeper item
	}
	console.log('The end of window.onload');
};
console.log('The end of highlight.js');