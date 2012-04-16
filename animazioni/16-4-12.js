


SPAZIO DELLE CONFIGURAZIONI:

insieme degli attributi che definiscono lo stato del modello
(es: angoli delle braccia, gambe ecc)

DOF (Degrees Of Freedom - gradi di libertà)

numero dei parametri che possono variare per definire lo stato

una curva nello spazio delle configurazioni, parametrizzata nel dominio del tempo,
specifica completamente il moto del sistema


DOF detti anche COORDINATE GENERALIZZATE (o coordinate lagrangiane)

in generale sono numeri reali


LO SPAZIO delle configurazioni è il prodotto cartesiano di qualcosa che non ho fatto in tempo a appuntare



ESEMPIO:


var link = CUBOID([2,20]);
link = T([0,1]) ([-1,-19]) (link);


/*var giradi = function (angolo){
	return function(oggetto){
		var ang = angolo * (PI/180);
		return T([0,1]) ([-2,-18]) ( R([0,1])(ang)(oggetto) );
	}
}*/

var joint = function (alpha){
	return COMP([T([1])([-18]),R(2)(alpha*(PI/180))]);
}

var arm = function(a1,a2,a3){
	return STRUCT([link, joint(a1),link, joint(a2),link, joint(a3),link]);
}

DRAW(arm(20,30,40));

//var sist = STRUCT([link]);

//DRAW(sist);



