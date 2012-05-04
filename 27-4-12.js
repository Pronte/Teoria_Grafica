
var plines = [];

var pp = function (arr){plines.push(POLYLINE(arr))}

var l1 = [[0,0],[9,0],[9,3],[8,3],[8,1],[5,1],[5,3],[4,3],[4,1],[1,1],[1,3],[0,3],[0,0]];

pp(l1);



var labplant = STRUCT(plines);

var labwalls = EXTRUDE([2])(labplant);
// var labroof = BOUNDARY(labwalls);

lab = STRUCT([labwalls]);

// DRAW(lab);



-------------------MAPPING 3D :


RICHIAMO MAPPING 2D:


var d = DOMAIN([[0,2*Math.PI]])([60]);
var mapping = function(p){
	var u = p[0];
	return [u, Math.sin(u)];
}
var model = MAP(mapping)(d);



3d:

var d = DOMAIN([[0,2*Math.PI],[0,1]])([60,10]);
var mapping = function(p){
	var u = p[0];
	var v = p[1]
	return [u, Math.sin(u),v];
}
var model = MAP(mapping)(d);
DRAW(model);

più bello:
var d = DOMAIN([[0,2*PI],[0,2*PI]])([30,30]);
var mapping = function(p){
	var u = p[0];
	var v = p[1]
	return [u, Math.sin(u)+Math.sin(v),v];
}
var model = MAP(mapping)(d);
DRAW(model);






// COSE INENARRABILI:


var drawBezier = function(manici){

	var dominio = INTERVALS(1)(30);
	var curva = BEZIER(S0)(manici);

	var out = MAP(curva)(dominio);
	DRAW(out);
	return out;
}


var d = DOMAIN([[0,2*PI],[0,2*PI]])([30,30]);
var mapping = function(p){
	var u = p[0];
	var v = p[1]
	return [u, Math.sin(u)-Math.sin(v),v];
}
var model = MAP(mapping)(d);
//DRAW(model);

var drawVaso = function(){
	var d = DOMAIN()();

	var mapping = function (p){
			var u = p[0];
			var v = p[1];
			return [r*Math.cos(u),r*Math.sin(u),h*v];	
	}
	var model = MAP(mapping)(d);
}



var dbm = function(mapping){
	var dominio = INTERVALS(1)(30);
	var out = MAP(mapping)(dominio);
	DRAW(out);
	return out;

}
var domain = PROD1x1([INTERVALS(1)(16),INTERVALS(1)(16)]);


var c0 = BEZIER(S0)([[0,0,0],[10,0,0]]);
var c1 = BEZIER(S0)([[0,2,0],[8,3,0],[9,2,0]]);
var c2 = BEZIER(S0)([[0,4,1],[7,5,-1],[8,5,1],[12,4,0]]);
var c3 = BEZIER(S0)([[0,0,0],[1,6,13],[-10,-6,-1]]);
var c4 = BEZIER(S0)([[10,20,30],[11,21,31],[15,15,15]]);
var c5 = BEZIER(S0)([[0,6,0],[9,6,3],[10,6,-1]]);
var out = MAP(BEZIER(S1)([c0,c1,c2,c3,c4,c5]))(domain);
// DRAW(out);
var c0 = BEZIER(S0)([[0,0,0],[10,0,0]]);
var c1 = BEZIER(S0)([[0,2,0],[8,3,0],[9,2,0]]);
var c2 = BEZIER(S0)([[0,4,1],[7,5,-1],[8,5,1],[12,4,0]]);
var c3 = BEZIER(S0)([[0,6,0],[9,6,3],[10,6,-1]]);
var out = MAP(BEZIER(S1)([c0,c1,c2,c3]))(domain);
// DRAW(out);

var bzs = [];
for(i = 0; i<10; i++){
	var b = BEZIER(S0)([[SIN((i/10)*2*PI),COS((i/10)*2*PI),0],[SIN((i/10)*2*PI),COS((i/10)*2*PI),3]]);
	bzs.push(b);
	// dbm(b);
}
var out = MAP(BEZIER(S1)(bzs))(domain);

// DRAW(out);


// dbm(c0);
// dbm(c1);
// dbm(c2);
// dbm(c3);



//test della muerte

var h = BEZIER(S0)([[1,0,0],[3.5,0,1],[3.5,0,10],[5.5,0,15],[8.5,0,20]]);
// var c = BEZIER(S0)([[1,0,0],[1,1,0],[-1,1,0],[-1,-1,0],[1,-1,0],[1,0,0]]);
var c = BEZIER(S0)([[1,0],[1,1],[-1,1],[-1,-1],[1,-1],[1,0]]);

var hmap = dbm(c);
var cmap = dbm(h);

var prod = PROD1x1([hmap,cmap]);
DRAW(prod);
//var out = MAP(BEZIER(S1)([h,c]))(domain);
// DRAW(out);

