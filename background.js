chrome.contextMenus.create({
  title: "Twitter-Social-Toolkit",
  contexts: ["selection"],  //It is used so that this option in context menu only displays when the user selects some text
  onclick: myFunction
});

function myFunction() {
    alert('You just clicked me folk!');
}
