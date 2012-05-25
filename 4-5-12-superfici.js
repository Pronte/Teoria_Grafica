
var POLYPOINT = function(points){
	var pp = SIMPLICIAL_COMPLEX(points)(
		points.map(function(element,index,array){return [index];})
		);

	DRAW(pp);
	return pp;
};



a CUBIC_HERMITE passo 

prima disegno una curva, poi la generalizzo
arco di circonferenza:
passante per i punti (1,0) e (0,1)
con tangenti vettori in direz rispettivamente (0,1) e (-1,0)

var domain = INTERVALS(1)(20);
var controlpoints = [[1,0],[0,1],[0,1],[-1,0]]; // p0 p1 t0 t1
var curveMapping = CUBIC_HERMITE(S0)(controlpoints);
var c1 = MAP(curveMapping)(domain);
DRAW(c1);

// è troppo schiacciata -> aumento il modulo della tangente per renderlo più allargato
var domain = INTERVALS(1)(20);
var controlpoints = [[1,0],[0,1],[0,2],[-2,0]]; // p0 p1 t0 t1
var curveMapping = CUBIC_HERMITE(S0)(controlpoints);
var c12 = MAP(curveMapping)(domain);
DRAW(COLOR([1,0,0])(c12));

// il cerchio è piccolino -> aumento il diametro
// NB devo aumentare anche le tangenti! altrimenti si schiaccia
var domain = INTERVALS(1)(20);
var controlpoints = [[2,0],[0,2],[0,3],[-3,0]]; // p0 p1 t0 t1
var curveMapping = CUBIC_HERMITE(S0)(controlpoints);
var c2 = MAP(curveMapping)(domain);
DRAW(COLOR([0,1,0])(c2));


var draw = STRUCT([c1,c12]);


// ora disegno una superficie compresa tra c12 e c2
var domain2 = ([0,1],[0,1])([30,30])
var curves = [c12,c2]
var mapping = BEZIER(S1)(curves);
var s12 = MAP(mapping)(domain2);
DRAW(s12);

var s12 = BEZIER(S1)()
var surface1 MAP(s12)(domain)



var indxs = function(array){
	return array.map(function(el,i,arr){return [i];});
}

var POLYPOINT = function(points){
	var pp = SIMPLICIAL_COMPLEX(points)(indxs(points));

	DRAW(pp);
	return pp;
};

var domain = INTERVALS(1)(20);
var bezpoints = [[10,0,0],[0,5,0],[0,-3,0],[5,2,0],[10,0,0]];
var mapping = BEZIER(S0)(bezpoints);

var c = MAP(mapping)(domain);
DRAW(c);
DRAW(COLOR([0.7,0.7,0.7])(POLYLINE(bezpoints)));


var c0 = MAP(function(p){return[p[0],p[1],p[2]+10];})(c);
var c1 = MAP(function(p){return[p[0],p[1],p[2]+20];})(c);
var c2 = MAP(function(p){return[p[0],p[1],p[2]+30];})(c);
var c3 = MAP(function(p){return[p[0],p[1],p[2]+40];})(c);


DRAW (STRUCT([c0,c1,c2,c3]));

var domain2 = DOMAIN([[0,1],[0,1]])([30,50]);
var curves = STRUCT (CONS (AA (MAP) ([c0,c1,c2,c3])(domain2))));
DRAW(curves);
/*
// il cerchio è piccolino -> aumento il diametro
// NB devo aumentare anche le tangenti! altrimenti si schiaccia
var domain = INTERVALS(1)(20);
var controlpoints = [[2,0],[0,2],[0,3],[-3,0]]; // p0 p1 t0 t1
var curveMapping = CUBIC_HERMITE(S0)(controlpoints);
var c2 = MAP(curveMapping)(domain);
DRAW(COLOR([0,1,0])(c2));


var draw = STRUCT([c1,c12]);


// ora disegno una superficie compresa tra c12 e c2
var domain2 = ([0,1],[0,1])([30,30])
var curves = [c12,c2]
var mapping = BEZIER(S1)(curves);
var s12 = MAP(mapping)(domain2);
DRAW(s12);
*/