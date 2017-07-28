setTimeout(function(tab) {
    chrome.tabs.executeScript({
        file: "script.js",
        allFrames: true
    });
}, 20000);
