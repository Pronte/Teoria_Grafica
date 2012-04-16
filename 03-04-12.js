

*TRASFORMAZIONI AFFINI*:

mappare fig o modello in un altro di differente misura, posizione e orientamento

si riducono a una trasformazione lineare invertibile usando coordinate omogenee

SONO RAPPRESENTATE DA MATRICI QUADRATE dette *MATRICI DI TRASFORMAZIONE*


p* = Q * p


se uso vettori colonna posso fare prodotti a sinistra:

(x*)	(ab0)	(x)
(y*) =  (cd0)	(y)
(1 )	(001)	(1)

se avessi usato vettori riga avrei dovuto fare p* = p * Q


TRASLAZIONE NEL PIANO:
 E^2 -> E^2

 a ogni t sommo p

 			p 		p*

 1 0 m 	   	x		x+m
 0 1 n 	*	y	=	y+n
 0 0 1		1		1

LA MATRICE È IL *TENSORE* DELLA TRASFORMAZIONE


TRASFORMAZIONE DI SCALA:

		p 		p*

a 0 0 	x		ax
0 b	0 *	y  =	by
0 0 1	1		1


RIFLESSIONE:

rispetto a x
-1 0    x  =	-x
 0 1	y		 y

rispetto a y
 1  0   x  =	 x
 0 -1	y		-y


ROTAZIONE:

cosA -sinA 
sinA  cosA

SCORRIMENTO:

spiaccico in verticale:
1 0 	x	x
a 1 	y	ax +y

o spiaccico in orizzontale:    || -> //
1 a 	x	x+ay
0 1 	y	y

????
1 a 	x	x+ay
b 1 	y	bx+y








