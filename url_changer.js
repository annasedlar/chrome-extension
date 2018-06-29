chrome.tabs.onUpdated.addListener(function(tabId, changeInfo, tab) {
  toTheFrontier(tab)
});

toTheFrontier = currentTab => {
  const url = currentTab.url;
  if (url.includes("twitter.com")){
    chrome.tabs.update(currentTab.id, {url: "https://thefrontier.bignerdranch.com"});
  }
}
