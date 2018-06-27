// // Called when the user clicks on the browser action.
// chrome.browserAction.onClicked.addListener(function(tab) {
//   chrome.tabs.executeScript({
//     code: 'document.body.style.backgroundColor="yellow"'
//   });
//   backToGmail(tab)
// });

// chrome.tabs.onCreated.addListener(function(tab) {
//   backToGmail(tab)
// });

// chrome.tabs.onUpdated.addListener(function(tab) {
//   backToGmail(tab)
// });

// function backToGmail (currentTab) {
//   var url = currentTab.url;
//   if (url.indexOf("twitter.com") > -1){
//     chrome.tabs.update(currentTab.id, {url: "http://www.gmail.com"});
//   }
// }


// Called when the user clicks on the browser action.
chrome.browserAction.onClicked.addListener(function(tab) {
  chrome.tabs.executeScript({
    code: 'document.body.style.backgroundColor="pink"'
  });
  backToGmail(tab)
});

chrome.tabs.onCreated.addListener(function(tab) {
  backToGmail(tab)
});

chrome.tabs.onActivated.addListener(function(tab) {
  backToGmail(tab)
});

chrome.tabs.onUpdated.addListener(function(tabId, changeInfo, tab) {
  if (changeInfo.status == 'complete') {
      backToGmail(tab)
  }
});

function backToGmail (details) {
  var url = details.url;
  if (url.indexOf("twitter.com") > -1){
    chrome.tabs.update(details.id, {url: "http://www.gmail.com"});
  }
}