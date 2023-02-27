/**
 * Listens for the click event on the extension icon
 */
chrome.action.onClicked.addListener((tab) => {
    fetch(chrome.runtime.getURL('../data.json'))
        .then((response) => response.json())
        .then((json) => openUrlInNewTab(json.url));
});

/**
 * Opens a new tab with given URL
 */
function openUrlInNewTab(url) {
    chrome.tabs.create({
        url: url
    });
}