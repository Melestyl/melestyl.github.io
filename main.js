var refText;
var textPossibilities =
	["motivé",
	"un passionné",
	"content de vous voir ici :)",
	"quelqu'un qui aime apprendre",
	"quelqu'un qui aime faire",
	"un photographe",
	"un développeur",]

function init() {
	refText = document.getElementById("autoText");
	changeText();
}

function changeText() {
	refText.innerHTML = "Je suis " + textPossibilities[Math.floor(Math.random() * textPossibilities.length)] + ".";
}

setInterval(changeText, 4000);