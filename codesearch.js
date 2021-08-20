// mcasas@chromium.org or miguelecasassanchez@gmail.com
// Free to use and redistribute, with no warranties etc, retaining these lines.

function onRequest(info, tab) {
  var selection = info.selectionText;
  chrome.tabs.create ({url:
      "https://code.google.com/p/chromium/codesearch#search/&sq=package:chromium&type=cs&q="
      + selection}); 
};

chrome.contextMenus.create({title:"Chromium CodeSearch '%s'",
                            contexts: ["all"],
                            "onclick": onRequest});
