

chrome.webRequest.onBeforeSendHeaders.addListener(
    function(details) { return { cancel: true }},
    { urls: ["*://*.zeenews.india.com/*"] },
    ["blocking"]
)