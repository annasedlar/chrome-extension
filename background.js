// Copyright (c) 2011 The Chromium Authors. All rights reserved.
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.

// Called when the user clicks on the browser action.
chrome.browserAction.onClicked.addListener(function(tab) {
  chrome.tabs.executeScript({
    code: 'document.body.style.backgroundColor="pink"'
  });
  onBeforeRequestHandler(tab)
});

chrome.tabs.onCreated.addListener(function(tab) {
  onBeforeRequestHandler(tab)
});

chrome.tabs.onActivated.addListener(function(tab) {
  onBeforeRequestHandler(tab)
});

chrome.tabs.onUpdated.addListener(function(tabId, changeInfo, tab) {
  if (changeInfo.status == 'complete') {
      // Execute some script when the page is fully (DOM) ready
      // chrome.tabs.executeScript(null, {code:"init();"});
      onBeforeRequestHandler(tab)
  }
});

function onBeforeRequestHandler (details) {
  var url = details.url;
  if (url.indexOf("twitter.com") > -1){
    chrome.tabs.update(details.id, {url: "http://www.gmail.com"});
  }
}