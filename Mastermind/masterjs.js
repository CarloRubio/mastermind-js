var colors = ["red","blue","green","yellow","white","black"];
var row = 0;
var x = x;

function start() {
for (i = 0 ; i < 6; i++) {
	colorKnop = document.createElement("button");
	colorKnop.id = i;
	colorKnop.setAttribute("onClick", "setColor(event)");
	colorKnop.style.backgroundColor = colors[i];
	document.getElementById("bottom").appendChild(colorKnop);
	}
	createButtons();
}

function createButtons() {
	row++;
	for (i = 0; i < 4; i++) {
		targetKnop = document.createElement("button");
		targetKnop.id = row + "_" + i;
		targetKnop.setAttribute("onClick", "putColor(event)");
		document.getElementById("game").appendChild(targetKnop);		
	}
}

function setColor(event) {
	//console.log(event)
	x = event.target.style.backgroundColor;
	return x;
	console.log(x);
}

function putColor(event){
	event.target.style.backgroundColor = x;
}