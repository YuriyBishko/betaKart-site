document.getElementById("lightShow").addEventListener("click", fadeOut);
document.getElementById("light-blue").addEventListener("click", blueChange);
document.getElementById("light-red").addEventListener("click", redChange);
document.getElementById("light-white").addEventListener("click", whiteChange);
document.getElementById("light-green").addEventListener("click", greenChange);

//var kartImg = document.getElementById('centerSettings');

function fadeOut(){
	var elem = document.getElementById('lightChoose');
	elem.style.visibility = "visible";
	elem.style.transition = "opacity 4s ease-in";

}

function blueChange (){
	document.getElementById('centerSettings').style.backgroundImage = "url('img/kart-light/blu.gif')";
	fadeIn();
}

function redChange (){
	document.getElementById('centerSettings').style.backgroundImage = "url('img/kart-light/red.gif')";
	fadeIn();
}

function whiteChange (){
	document.getElementById('centerSettings').style.backgroundImage = "url('img/kart-light/white.gif')";
	fadeIn();
}

function greenChange (){
	document.getElementById('centerSettings').style.backgroundImage = "url('img/kart-light/green.gif')";
	fadeIn();
}

function fadeIn(){
	var elem = document.getElementById('lightChoose');
	elem.style.transition = "opacity 2.5s linear";
	elem.style.visibility = "hidden";
}
