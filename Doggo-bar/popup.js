// Copyright (c) 2012 The Chromium Authors. All rights reserved.
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.
'use strict';
function launch(event) {null,
  chrome.tabs.executeScript({
    file: 'script.js'
  });
  chrome.tabs.insertCSS(null, {
    file : "style.css"
  });
  chrome.tabs.executeScript(null,
    //{code:"alert('" + event.target.value + "')"}
    //{code:"document.getElementById('durgo').src=chrome.extension.getURL('" + event.target.value + "')"}
    {code:"document.getElementById('durgo').src='"+ chrome.extension.getURL(event.target.value)+"'"}
    );
  window.close();
}
document.addEventListener('DOMContentLoaded', function () {
  var divs = document.querySelectorAll('button');
  for (var i = 0; i < divs.length; i++) {
    divs[i].addEventListener('click', launch);
  }
});
