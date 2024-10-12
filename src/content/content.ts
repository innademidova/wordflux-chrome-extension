console.log('Content script loaded');

// Example: Send a message to background script
chrome.runtime.sendMessage({ type: 'GREETING' }, (response) => {
  console.log(response.message);
});
