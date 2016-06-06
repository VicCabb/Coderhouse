
function getValues(){
var num1 = document.getElementById("numero1").value;
var num2 = document.getElementById("numero2").value;
	return [num1, num2];
}


function showResult(value){
	document.getElementById("resultado").innerHTML = value;
}



function suma(){
	var values = getValues();
	showResult(sum(values[0], values[1]));
}


function sum(a, b) {
	return parseInt(a) + parseInt(b);
}

function resta(){
	var values = getValues();
	showResult(res(values[0], values[1]));
}

function res(a, b) {
	return parseInt(a) - parseInt(b);
}


function multi(){
	var values = getValues();
	showResult(mul(values[0], values[1]));
}


function mul(a, b) {
	return parseInt(a) * parseInt(b);
}


function divi(a, b){
	var values = getValues();
	showResult(div(values[0], values[1]));
}


function div(a, b) {
	return parseInt(a) / parseInt(b);
}



