var trustedSources = {'stackoverflow.com': true,
					  'github.com': true};
var highlightAction = function() {
	var results = document.querySelectorAll('h3.r');
	for(var i = 0; i < results.length; i++) {
		var link = results[i].getElementsByTagName('a')[0];
		if(trustedSources[link.hostname]) {// ~ O(1) complexity!
			link.style.background = '#DFF0D8';
		}
	}
};
var mo = new MutationObserver(highlightAction);
mo.observe(document.getElementById('res'),
		  { childList: true, subtree: true });

console.log('The end of highlight.js');
// TODO: add this code to search result element change event
