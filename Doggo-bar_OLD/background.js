// Called when the user clicks on the browser action.
chrome.browserAction.onClicked.addListener(function(tab) {
  console.log('Adding doggo!');
  chrome.tabs.executeScript({
    file: 'script.js'
  });
  chrome.tabs.executeScript({
    code: "document.getElementById('durgo').src=chrome.extension.getURL('doggo.svg')"
    //code:"document.body.style.backgroundColor='" + e.target.id + "'"
    //code: 'alert("derp")'
  });
});
