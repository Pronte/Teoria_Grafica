

//CURVA DI HERMITTE : 

/*
var manici = [[0,0],[10,0],[0,10],[10,10]];


var dominio = INTERVALS(1)(30);
var curva = CUBIC_HERMITE(S0)(manici);

var out = MAP(curva)(dominio);
DRAW(out);
*/

var drawHermite = function(manici){

	var dominio = INTERVALS(1)(30);
	var curva = CUBIC_HERMITE(S0)(manici);

	var out = MAP(curva)(dominio);
	DRAW(out);
	return out;
}

var drawHermite2 = function(){
	var manici = [];
	for (var i = 0; i<arguments.length/2; i++){
		manici.push([arguments[i],arguments[i+1]]);
	}
	console.log(manici);
	return drawHermite(manici);
}

var drawBezier = function(manici){

	var dominio = INTERVALS(1)(30);
	var curva = BEZIER(S0)(manici);

	var out = MAP(curva)(dominio);
	DRAW(out);
	return out;
}
var drawBezier2 = function(){
	var manici = [];
	for (var i = 0; i<arguments.length/2; i++){
		manici.push([arguments[i],arguments[i+1]]);
	}
	console.log(manici);
	return drawBezier(manici);
}
var drawSerpentinaDellaMuerte = function(len){
	for(var i = 0; i<len ; i++){
		drawHermite2(i,i+1,i+2,i+3,i+4,i+5,i+6,i+7);
	}
}