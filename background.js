chrome.browserAction.onClicked.addListener(function(tab) {
  chrome.tabs.executeScript(
//      null, {code:"document.body.style.background='red !important'"});
  		null, {code:"var e = document.createElement('script');e.setAttribute('type', 'text/javascript');e.setAttribute('charset', 'UTF-8');e.setAttribute('src', 'http://assets.dxycdn.com/app/pubmed/js/pubmedmarklet.js?r=' + Math.random() * 99999999);document.body.appendChild(e)"});


});

chrome.browserAction.setBadgeBackgroundColor({color:[0, 200, 0, 100]});

var i = 0;
