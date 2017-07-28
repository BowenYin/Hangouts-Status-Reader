setTimeout(function(tab) {
    console.log("background");
    chrome.tabs.executeScript({
        file: "script.js",
        allFrames: true
    });
}, 20000);
