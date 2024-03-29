                        
2012-04-20 appunti di unganub

schema di rappresentazione

corrispondenza tra spazio dei modelli matematici M e spazio di rappresentazioni simboliche R
seguendo una certa sintassi di generazione S
D dominio dello schema: sottoins di M, modelli che lo schema può rappresentare
V insieme di validità: in corrispondenza con gli oggetti significativi contenuti in D
		S
D c M  --> V c R

c: contenuto in



esistono varie classi di schemi di rappresentazione
le più importanti:
- schemi decompositivi
	oggetto rappresentato da unione di componenti. la loro intersez, a coppie, è vuoto o è il bordo di entrambi
	es. di rappresentazione decompositiva:
		classi usate in Plasm: Topology, Pointset, Simplicial Complex (coppia di Topology e Pointset)
	non si presta a rappresentare modelli di enormi dimensioni (QUESTO è IL NOSTRO OBIETTIVO!)
- schemi al contorno
	tipo di schema di rappresentazione che rappresenta il solido attraverso il suo bordo (orientabile).
	il bordo chiuso (che non ha a sua volta bordo) permette di determinare un interno e un esterno


f caratteristica di A*: X(A*B)
X(A*B) = X(A)*X(B)
X(A U B) = X(A) + X(B) - X(A int B)

vettore caratterisitico di un sottoinsieme di X
array dei valori delle f. caratterisitiche per tutti gli elem dell'insieme
X(A) = (X(A(x))) 		x € X

matrice caratteristica della famiglia di sottoinsiemi
numero righe
numero colonne: num elem ..

complessi:
- politopali (soprainsieme che continene simpliciali e cuboidali)
- simpliciali (famiglia di simplessi. ogni simplesso è caratterizzato dai suoi vertici, identificato dall'iniseme X)
- cuboidali

ogni complesso può essere identificato da una matrice caratteristica


vertici, spigoli e facce le rappresento con le loro matrici (o mappe) caratteristiche
posso pensare un complesso come unione dei suoi scheletri (dei vari ordini che corrispondono a vertici,spigoli, facce ?)


stesso numero di colonne. sulle colonne metto i vertici
sulle colonne ho l'1 se la cella è generata da quel vertice
sulle ogni riga avrò due volte 1

da qui ricavo la matrice delle facce
la riga mi dice da quali vertici è generata
es. cella di ordine 2: C2
1 1 0 1 0 0 	questa faccia è generata dai vertici 0,1,3

NB quando conosco la matrice caratteristica della cella di ordine massimo posso ricavare tutte le altre!!

NB all'aumentare della grandezza delle dimensioni del modello diminuisce la % di elem della matrice != 0


MATRICE SPARSA
matrice con un elem dominante che predomina (es. lo zero)
a quel punto basta memorizzare gli elem non dominanti per risparmiare memoria
ooggi in disuso

in generale devo memorizzare delle triple i,j,v (riga,colonna,valore) che posso ordinare in determinati modi

NB se la matrice sparse è binaria posso rappresentare il tutto con coppie i,j:
	se rappresento per righe posso rappresentare il tutto usando gli indici di colonna. se le indico vale 1 altrimenti vale 0



grafo: complesso simpliciale di ordine 1

MATRICI DI ADIACENZA
relazione tra elementi dello stesso tipo
Av: matrice di ADIACENZA dei vertici (dim v*v)
Ae: matrice di ADIACENZA degli spigoli (dim e*e)


MATRICI DI INCIDENZA
relazione tra elementi di tipo diverso
Ive matrice di INCIDENZA vertici-spigoli (vertici sulle righe, spigoli sulle colonne) (dim v*e)
trasponendo la matrice posso avere vertici su colonne e spigoli su righe


K^d 	Ak (0 <= K <= d)


NB numero vertici = numero spigoli!! (se il bordo è chiuso ovviamente)

matrice di adiacenza di ordine 2
A2 numero di vertici in comune (sulla diagonale ogni elem ha tre vertici in comune con sé stesso)


matrice di adiacenza
Ck*C(k-1) 		1 <= k <= d

se rappr è per righe quando moltiplico devo moltiplicare da davanti (??)

C1*C0(trasposta)
c2*C1(trasposta)  9 spigoli 4 facce -> ogni elem in posizione ij di questa matrice di incidenza rappresenta il numero di vertici in comune tra spigolo i e faccia j
es.
2 2 2 1 1 0 1 0 0
2 1 1 2 2 1 1 1 0
1 0 1 1 2 2 2 1 1
0 0 0 1 1 2 1 2 2

la faccia 0 (1a riga) ha due vertici in comune con gli spigoli 0,1,2 (1a, 2a, 3a colonna)
						 un vertice in comune con gli spigoli 3,4,6 (4a,5a,7a colonna)
...


COBORDO
cobordo di ordine 1
delta1 (operatore di cobordo) si mette sempre l'ordine di partenza


complesso a celle K = unione delle celle dei vari ordini: K0 U K1 U K2
ogni campo può essere visto come uno spazio vettoriale(spazi lineare: combinazioni generali di insiemi generatori, cioè o-celle generano C0, le 1-celle generano)
spazi vettoriali sono associati a ogni cella
C0 C1 e C2 hanno elem chiamati CATENE
le celle supportano certi spazi di catene
avrò gli insiemi 0-catene, 1-catene, 2-catene
	 partial2
C2 		-> 		C1
l'operazione che mi porta da una cella a quella di ordine inferiore si chiama BORDO

	   delta1
C2 		<-		 C1
l'operazione inversa si chiama COBORDO
una 2-catena è una qualunque combinazione lineare di 2 celle

spazi e operatori definiscono il COMPLESSO DI CATENE/COCATENE (chain complex)
cioè tutti i possibili campi supportati da un complesso a celle K'


appunti miei


a2 1 = matrice che non ho capito bene cos'e'

a2 * [1111]T = vettore con 2 per spigoli interni e 1 per quelli di bordo.


a2 : c2 -> c1

CATENA DI TRIANGOLI (TRIANGLE MESH)
c2 = 	110100   //1 in corrispondenza dei vertici che definiscono la faccetta
		010110

comprimo scrivendo gli indici delle colonne non zero (che tanto sono 3):
c2 =	013
		134
		124
		245
NORMALIZZO: //aggiungo la prima colonna di 1
c2 =	1013
		1134
		1124
		1245 //considero questi indici come coordinate
		// mi preparo all'estrusione

c2* = c2segnato * E =  c2 * 	[0001666]
	






