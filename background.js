chrome.browserAction.onClicked.addListener(function(activeTab)
{
    var newURL = "charviewer.html";
    chrome.tabs.create({ url: newURL });
});

function contentScriptHandler(request, sender, sendResponse) {
    if (request.eventName == "openHar") {
        var newURL = "charviewer.html?inputUrl=" + request.eventValue;
        chrome.tabs.create({ url: newURL });
        return true;
    } 
    console.log("got message: " + JSON.stringify(request));
}

//Listen for messages from content scripts.
chrome.extension.onMessage.addListener(contentScriptHandler);

chrome.webNavigation.onHistoryStateUpdated.addListener(function(details) {
    chrome.tabs.executeScript(null,{file:"content_script.js"});
});
