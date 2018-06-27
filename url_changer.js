chrome.tabs.onUpdated.addListener(function(tabId, changeInfo, tab) {
  toTheFrontier(tab)
});

function toTheFrontier (currentTab) {
  var url = currentTab.url;
  if (url.indexOf("twitter.com") > -1){
    chrome.tabs.update(currentTab.id, {url: "https://thefrontier.bignerdranch.com"});
  }
}