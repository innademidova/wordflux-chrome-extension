console.log("Content script loaded");
chrome.runtime.sendMessage({ type: "GREETING" }, (response) => {
  console.log(response.message);
});
//# sourceMappingURL=content.js.map
