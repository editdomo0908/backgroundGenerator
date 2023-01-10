
var css = document.querySelector("h3");
var color1 = document.querySelector(".color1");
var color2 = document.querySelector(".color2");
var body = document.getElementById("gradient");
var button = document.querySelector("button");
var switchButton= document.getElementById("switch");
var hexValues = [0,1,2,3,4,5,6,7,8,9,'A','B','C','D','E','F']; 



window.addEventListener('load', function () {
    color1.value = "#068E53";
    color2.value ="#7D3786" ;
    setGradient();
}, false);



function switchColors() {
	var a = color1.value;
	var b = color2.value;
	color1.value = b;
	color2.value = a;

	setGradient();
}



function setGradient(){
	body.style.background = "linear-gradient(to right," 
 	+color1.value +", " 
 	+ color2.value + ")" 

     css.textContent = body.style.background + ",";
}

function changeHex () {
	var hex1 = "#";
	var hex2= "#";
for (var i=0; i<6; i++){
    
    var hexValuesItem = Math.floor(Math.random()* hexValues.length);

	hex1 += hexValues[hexValuesItem];
	}

    color1.value=hex1
  
for (var i=0; i<6; i++){
    
    var hexValuesItem = Math.floor(Math.random()* hexValues.length);

	hex2 += hexValues[hexValuesItem];
	}

    color2.value=hex2
  
 
	body.style.background = "linear-gradient(to right," 
 	+color1.value+", " 
 	+ color2.value + ")" 

}

button.addEventListener('click', changeHex);
switchButton.addEventListener('click', switchColors)
color1.addEventListener("input", setGradient);
color2.addEventListener("input", setGradient);

