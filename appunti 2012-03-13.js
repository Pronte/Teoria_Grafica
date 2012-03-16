GRAFICA 13/03
spazio vettoriale (lineare)
operazioni
- interna: SOMMA chiusa nello spazio
- esterna: PRODOTTO 
			vettore*scalare = vettore 

ASSIOMI
addiz di vettori è 
	commutativa: v + w = w + v
	associativa: u + (v + w) = (u + v) + w
	elemento nullo 0: v + 0 = v
	inverso: preso un vettore v esiste un unico vettore inverso -v tale che +v -v = 0
	distibutiva della somma rispetto al prodotto: a*(v + w) = a*v + a*w
	distibutiva del prodotto rispetto alla somma: (a+b)*v = a*v + b*v
	associativo a*(b*v) = (a*b)*V
	elem unitario: 1*v = v

spazio delle matrici
stesse propr di prima
NB le matrici devono essere compatibili! (stesso num di righe e colonne)

somma di matrici: ogni elem è somma degli elem delle due matrici
prodotto scalare* matrice: prodotto dello scalare per ogni elem della matrice

spazio dei polinomi di grado <=n (dim spazio n+1)

dato uno spazio vettoriali V con le operazioni + e * (V,+,*)
un sottoinsieme è un SOTTOSPAZIO se è cmq uno spazio vettoriali che rispetta le stesse operazioni (è chiuso rispetto a quelle operazioni)
il sottoinsieme è sottospazio U se non è vuoto e se per ogni u1,u2 appartenenti a U a*u1 + u2 € U

CODIMENSIONE di un sottoinsieme di uno spazio vett
quanto manca per avere una dimensione piena (per essere tutto lo spazio)
es. una retta è un sottospazio del piano con dim. 1 e ha codimensione 1: manca una dimensione per arrivare alla dim del piano

IPERPIANO
sottospazio lineare con codimensione 1 (o dimensione d-1)

combinazione lineare di vettori (con scalari) mi danno un vettore ancora appartenente allo spazio
v1,..,vn € V
a1*v1 + .. + an * vn = vx € V

SPAN
insieme di tutte le combinazioni degli elementi di un sottospazio S di uno spazio V è ancora un sottospazio di V
definito con:	lin S

insieme generatore/ spanning set del sottospazio. hanno insieme finito, piccolo di elementi
se un sottospaz U di V può essere generato come span di un set S ...

INDIPENDENZA LINEARE
insieme (set) di elem di uno spazio. lo è (indipendente) quando non posso generare nessun altro elem dagli altri (come combinaz lineare degli altri)
un insieme di vettori è linearmente indipendente se nessuno di esse appartiene allo span degli altri, può essere generato dagli altri:
sommatoria per i=1..n di ai*vi = 0 		(implica che ai=0 per ogni i)

BASI e COORDINATE
BASE: sottoinsieme discreto di elementi linearmente indipendenti -> ogni elem dello spazio può essere rappresentato UNIVOCAMENTE da combinazioni lineari degli elementi della base.
scelta una base abbiamo una parametrizzazione dello spazio (rappresentare ogni elemento con una sequenza di scalari o COORDINATE)

S = {e1,e2,....,en} n elementi -> cardinalità n, spazio ha dimensione n
è una base se
S è linearmente indipendente
V = lin{e1,e2,...,en}		(S è span di V ?)

DIMENSIONE DELLO SPAZIO
dim V


PROPRIETA' di BASI di uno spazio vettoriale
qualunque spanning set per V contiene una base / ciascuno spanning set è MINIMALE rispetto alla base: 
ogni spanning set minimale è una base.
massimale rispetto a una proprietà: soddisfa quella proprietà e nn esiste nessun altro insieme che la soddisfa e lo contiene
es U contenuto in V

BASE ORDINATA
se B = {e1,..,en} è base ordinata per ogni v € V esiste un'unica tupla di scalari a1,a2,a...n € F tale che
v = somm per i=1..n di ai*ei


COMPONENETS
...



CAMBIAMENTO DI BASE
come? attraverso permutaz di vertici (??)
supponiamo B base di V 		B = {e1,...,en} C V 

NB permutazione: funzione biiettiva su un insieme finito. es. 1234 -> 4123. la f porta 1->4, 2->1, 3->2, 4->3
				 pigreco: {1,2,3,4} --> {4.1,2,3}
				 pigreco(1) = 4
				 pigreco(2) = 1
				 pigreco(3) = 2
				 pigreco(4) = 3

es. coordinate degli elem della base
1 0 ... 0
0 1 ... 0
...
0 0 ... 1

[B] = [I]		in questo caso (solo in questo caso?) la base è la matrice identità!

...............


[I] = [T][V]
[T] matrice della trasformazione dalla vecchia base B alla nuova base V
	si calcola conoscendo le vecchie coordinate della base e le coord della nuova
	[T] = [V]^(-1) è la matrice inversa di V



I POLINOMI SONO FUNZIONI da un campo a un campo
p: R -> R
p(u) = 3u^3 è 2u^2 -4u + 5
u € R -> p(n) € R

p: R^2 -> R
p(u) = 3u^3v^2 è 2u^2v -4u + 5v + 3
(u,v) € R^2 -> p(n) € R

P^n(R) si rappresenta lo spazio dei polinomi <= n con coefficenti lineari

es. P3 = (u^3,u^2,u,1) è un polinomio linearmente indipendente, a partire da ogni elem non posso ricavarne un altro tramite la somma o il prodotto per scalari

B3 = ((1-u)^3, 3u(1-u)^2, 3u^2(1-u),u^3) genera un sottospazio di tutti i polinomi di grado 3

[B3]P3 = rappresentazione di B3 in base P3
-1 	 3 	-3 	 1
3 	-6 	 3 	 0
-3 	 3   0   0
1    0   0   0

cubo di binomio (a+b)^3 = a^3 + 3a^2b +3ab^2 + b^3
	(1 - u)^3 = 1 -3u^2 +3u^2 +u^3 		coeff. -1 3 -3 1




PLASM - coffe script
nomi visibili dall'esterno usati con lettere maiuscole
funzioni con max 1 argomento (spesso un array)

usiamo js invece che coffee per i suoi strumenti di test e debugging
no var
no ;
la funz ritorna l'ultimo valore che produce