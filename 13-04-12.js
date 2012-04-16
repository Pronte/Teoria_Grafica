


ROTAZIONI

3 dimensioni: 3 rotazioni naturali



ESERCIZIO ROTATE:

ESEMPIO:
var c = CUBOID([5,5,1]);
DRAW(c);
var c2 = R([0,1])([PI/4])(c);
DRAW(c2);	
c2.translate([2],[1]);


var drawPila = function(n,ang){
	var c = CUBOID([5,5,1]);
	DRAW(c);
	for(var i = 0; i<n ; i++){
		c = T([0,1])([-2.5,-2.5])(c);
		c.rotate([0,1],ang);
		c.translate([0,1,2],[2.5,2.5,1]);
		DRAW(c);
	}
}	