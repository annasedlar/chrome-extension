// Called when the user clicks on the browser action.
// chrome.browserAction.onClicked.addListener(function(tab) {
//   chrome.tabs.executeScript({
//     code: 'document.body.style.backgroundColor="yellow"'
//   });
//   onBeforeRequestHandler(tab)
// });

chrome.tabs.onCreated.addListener(function(tab) {
  backToGmail(tab)
});

chrome.tabs.onUpdated.addListener(function(tab) {
  backToGmail(tab)
});

function backToGmail (currentTab) {
  var url = currentTab.url;
  if (url.indexOf("twitter.com") > -1){
    chrome.tabs.update(currentTab.id, {url: "http://www.gmail.com"});
  }
}