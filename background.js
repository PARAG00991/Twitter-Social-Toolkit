chrome.contextMenus.create({
  title: "Twitter-Social-Toolkit",
  contexts: ["selection"],  //It is used so that this option in context menu only displays when the user selects some text
  onclick: myFunction
});

function myFunction(selectedText) {
    //alert('You just clicked me folk!');
    //alert(selectedText.selectionText);
    chrome.tabs.create({url: "https://twitter.com/intent/tweet?text="+selectedText.selectionText});
}
