var list = document.getElementById('pglist');
var pages;

function loadTrustedPages() {
  chrome.storage.sync.get({
  	trustedPages: {} // no default
  }, function(items) {
  	pages = items.trustedPages;
  	for (var page in pages) {
  	  if (pages.hasOwnProperty(page)) { // just in case
  	    addItemToList(page);
  	  }
    }
  });
}

function addTrustedPage() {
  var input = document.getElementById('pgin');
  pages[input.value] = true; 
  chrome.storage.sync.set({
  	trustedPages: pages // TODO: set only new page, not all of them everytime
  }, function() {
  	addItemToList(input.value);
  });
}

function addItemToList(text) {
  var item = document.createElement('li');
  item.appendChild(document.createTextNode(text));
  list.appendChild(item);
}

document.addEventListener('DOMContentLoaded', loadTrustedPages);
document.getElementById('btnadd').addEventListener('click',
    addTrustedPage);
