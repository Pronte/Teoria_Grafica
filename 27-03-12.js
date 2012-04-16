


OMOGENIZZARE:

x -> [X,1]   ????


COORDINATE AFFINI


triangolo: [x1,y1]   -   [x2,y2]   -   [x3,y3]

omogenizzo: [x1,y1,1]   -   [x2,y2,1]   -   [x3,y3,1]



var solidHelicoid = (width=0.1, radius=1, h=1, turns=6, n=180, m=1, p=1) -> domain = SIMPLEXGRID ([REPEAT(n)(turns*2*Math.PI/n), REPEAT(m)(radius/m)]);
var fx = function([u,v,w]) {return v * Math.sin(-u);}
var fy = function([u,v,w]) {return v * Math.cos(-u);}
var fz = function([u,v,w]) {return width*w + (u * h/(turns*2*Math.PI));}
var object = MAP([fx, fy, fz])(domain);
var model = viewer.draw solidHelicoid(width=0.05, radius=1, h=3);
