// Called when the user clicks on the browser action.
chrome.browserAction.onClicked.addListener(function(tab) {
  console.log('Adding doggo!');
  chrome.tabs.executeScript({
    file: 'script.js'
  });
  chrome.tabs.executeScript({
    code: 'document.getElementById("durg").src=chrome.extension.getURL("doggo.svg")'
    //code: 'alert("derp")'
  });
});
