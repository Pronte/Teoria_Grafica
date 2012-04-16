

var square = new simplexn.SimplicialComplex([[0,0],[1,0],[1,1],[0,1]],[[0,1,3],[1,3,2]]);
var c = CUBOID([1,2,3]);

var mod = new plasm.Model(square, c.viewer);

COLOR([1,0,0])(mod);
DRAW(mod);



//FURIO
var drawModel = function(input) {
	var myViewer = CUBOID([1,1,1]).viewer;
	var drawableModel = new plasm.Model(input, myViewer);

	DRAW(drawableModel);

	return drawableModel;
}

var quad = new simplexn.SimplicialComplex([[0,0],[1,0],[1,1],[0,1]],[[0,1,3],[1,2,3]]);

drawModel(quad);
drawModel(SKELETON(1)(quad));



// mesh = cell complex 