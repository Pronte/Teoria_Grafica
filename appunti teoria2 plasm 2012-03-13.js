
GRAFICA 16/03

PLaSM BASICS


SUM[1,2,3] ------> 6


AA : Applay to All

AA(SUM) [[1,2,3],[4,5,6]]   ------> [6,15]


DISTRIBUZIONE

DISTL[2,[1,2,3]] ------> [[2,1],[2,2,],[2,3]]
DISTR[2,[1,2,3]] ------> [[1,2],[2,2],[3,2]]  // o forse va scritto DISTR[[1,2,3],2]



TRANSPOSE (scambia righe con colonne)

TRANS [[1,2,3],[10,20,30],[100,200,300]] 

----------> [[1,10,100],[2,20,200],[3,30,300]]



SUM [1,2] ----> 3
SUM [[1,2,3],[10,10,10]] ----> [11,12,13]

MUL [[1,2,3],[10,10,10]] ----> [10,20,30]



........



REPEAT(3) [1] ---> [1] [1] [1]

REPLICA(3) 1 ---> [1,1,1]



IDNT = (n) -> MAT(m,n) AR[REPLICA(n-1) (AL[1,REPEAT(n)0]),1]



............


SOMMA DI VETTORI

U,V vettori

U + V : somma di VETTORI (PRIMITIVA)

U - V : U + (V*-1) (DEFINITA IN FUNZIONE DI SOMMA E PRODOTTO SCALARExVETTORE)


X punto

X + U : punto







SISTEMA DI RIFERIMENTO: 
COPPIA (punto, (e1, e1)) //origine, versori degli assi?




















