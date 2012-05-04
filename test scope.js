

// LO SCOPE VIENE DEFINITO STATICAMENTE, NON A TEMPO DI ESECUZIONE

var x = "scope globale"

var padreNub = function (){
	
	var x = "scope padre";
	console.log("in padre: "+x)
	figlio();
}
var figlio = function(){
	console.log("in figlio: "+x); // SCOPE GLOBALE
}

//--------------------------------------------------------------------------------------------

var padreNub2 = function (){
	
	var x = "scope padre";
	console.log("in padre: "+x)
	figlio();
}

padreNub2.figlio = function(){
	console.log("in figlio: "+x); // SCOPE GLOBALE
}

//--------------------------------------------------------------------------------------------

var padrePro = function (){
	var figlio = function(){
		console.log("in figlio: "+x); // SCOPE PADRE
	}
	
	var x = "scope padre";
	console.log("in padre: "+x)
	figlio();

}
//--------------------------------------------------------------------------------------------
var padrePro2 = function (){
	var figlio = function(){
		console.log("in figlio: "+x); // se non definisco x prende cmq SCOPE GLOBALE
	}
	
	//var x = "scope padre";
	console.log("in padre: "+x)
	figlio();
}
//--------------------------------------------------------------------------------------------



