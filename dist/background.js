chrome.runtime.onInstalled.addListener(() => {
  console.log("Extension installed");
});
chrome.runtime.onMessage.addListener(
  (request, _sender, sendResponse) => {
    if (request.type === "GREETING") {
      sendResponse({ message: "Hello from background script!" });
    }
    return false;
  }
);
//# sourceMappingURL=background.js.map
