var contextsList = ["selection", "link", "image", "page"];

for(i=0;i<contextsList.length;i++){
var context=contextsList[i];
var titleX="Twitter Toolkit: Share this "+context+" on your twitter profile";
chrome.contextMenus.create({title: titleX,contexts: [context],  //It is used so that this option in context menu only displays when the user selects some text
  onclick: myFunction, id:context
});
}

function myFunction(data,tab) {
    //alert('You just clicked me folk!');
    //alert(selectedText.selectionText);
    switch (data.menuItemId) {
      case "selection":
      chrome.tabs.create({url: "https://twitter.com/intent/tweet?text="+data.selectionText});
      break;
      case "link":
      chrome.tabs.create({url: "https://twitter.com/intent/tweet?url="+data.linkUrl});
      break;
      case "image":
      chrome.tabs.create({url: "https://twitter.com/intent/tweet?url="+data.srcUrl});
      break;
      case "page":
      chrome.tabs.create({url: "https://twitter.com/intent/tweet?text="+tab.title});
    }
}
