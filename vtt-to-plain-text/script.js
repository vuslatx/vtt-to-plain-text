document.getElementById("convertButtonId").onclick = function() {
    var willBePlainText = document.getElementById("inputText").value;

const timeRegex = /\d\d\:\d\d\:\d\d\.\d\d\d\s-->\s\d\d\:\d\d\:\d\d\.\d\d\d/g;
const titleRegex = /WEBVTT\nKind: captions\nLanguage:.*\n/gm;
const twoLineRegex = /\n\n/gm;
const unRegex1 = / \n/gm;
const unRegex2 = /\n/gm;
const unRegex3 = /\. /g;
const unRegex4 = /\? /g;
const unRegex5 = /\! /g;
const unRegex6 = /\: /g;
const unRegex7 = /\n/gm;

willBePlainText = willBePlainText.replaceAll(timeRegex, '');
willBePlainText = willBePlainText.replaceAll(titleRegex, '');
willBePlainText = willBePlainText.replaceAll(twoLineRegex, '');
willBePlainText = willBePlainText.replaceAll(unRegex1, '\n');
willBePlainText = willBePlainText.replaceAll(unRegex2, ' ');
willBePlainText = willBePlainText.replaceAll(unRegex3, '\.\n');
willBePlainText = willBePlainText.replaceAll(unRegex4, '\?\n');
willBePlainText = willBePlainText.replaceAll(unRegex5, '\!\n');
willBePlainText = willBePlainText.replaceAll(unRegex6, '\:\n');
willBePlainText = willBePlainText.replaceAll(unRegex7, '\n\n');

document.getElementById("inputText").value = willBePlainText;


}

