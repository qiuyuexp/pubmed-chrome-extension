chrome.browserAction.onClicked.addListener(function(tab) {
  chrome.tabs.executeScript(null, {code:"var e = document.createElement('script');e.setAttribute('type', 'text/javascript');e.setAttribute('charset', 'UTF-8');e.setAttribute('src', 'http://assets.dxycdn.com/app/pubmed/js/pubmedmarklet.js?r=' + Math.random() * 99999999);document.body.appendChild(e)"});
});
// ceshi
