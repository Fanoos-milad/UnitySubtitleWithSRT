#pragma strict

var text = "";
var tashkeel = true;
var hinduNumbers = true;

function Start () {
	gameObject.guiText.text = ArabicSupport.ArabicFixer.Fix(text, tashkeel, hinduNumbers);
}

function Update () {

}