var list = document.getElementById('pglist');
/*
This is used as hashmap where keys are page names 
and values are colors selected for them
*/
var pages; 

/*
This is used to save configuration updates and inserts to storage
*/
function savePageToStroge (pageName, color, callback) {
  pages[pageName] = color; 
  chrome.storage.sync.set({
    trustedPages: pages // TODO: set only new page, not all of them everytime
  }, callback);
}

var onColorInputChange = function (e) {
  savePageToStroge(e.target.name, e.target.value);
};

/*
This is used to modify config html when a new trusted webpage/hostname
added.
*/
function addItemToHtmlList(pageName, color) {
  var item = document.createElement('li');
  item.appendChild(document.createTextNode(pageName));
  var colorSelector = document.createElement('input');
  colorSelector.type = 'color';
  colorSelector.value = color;
  colorSelector.name = pageName; // will be used on event handling
  colorSelector.addEventListener('input', onColorInputChange);
  item.appendChild(colorSelector);
  list.appendChild(item);
}

/*
This is used to add new trusted webpage/hostname
with specified color to be used for highlighting
*/
var onAddButtonClick = function() {
  var pageInput = document.getElementById('pgin');
  var pageName = pageInput.value;
  var color = document.getElementById('colorin').value;
  savePageToStroge(pageName, color, function() {
    addItemToHtmlList(pageName, color);
    pageInput.value = '';
  });
};

/*
This is used to add existing trusted webpages/hostnames
from storage with their specified highlighting color
*/
var onContentLoad = function() {
  chrome.storage.sync.get({
    trustedPages: {} // no default
  }, function(items) {
    pages = items.trustedPages;
    for (var pageName in pages) {
      if (pages.hasOwnProperty(pageName)) { // just in case
        addItemToHtmlList(pageName, pages[pageName]);
      }
    }
  });
};

document.addEventListener('DOMContentLoaded', onContentLoad);
document.getElementById('btnadd').addEventListener('click',
    onAddButtonClick);
