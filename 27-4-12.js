
var plines = [];

var pp = function (arr){plines.push(POLYLINE(arr))}

var l1 = [[0,0],[9,0],[9,3],[8,3],[8,1],[5,1],[5,3],[4,3],[4,1],[1,1],[1,3],[0,3],[0,0]];

pp(l1);



var labplant = STRUCT(plines);

var labwalls = EXTRUDE([2])(labplant);
// var labroof = BOUNDARY(labwalls);

lab = STRUCT([labwalls]);

// DRAW(lab);


