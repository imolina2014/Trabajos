var TextoLeido;
var Postulantes = [];
var Aspirantes  = [];
var ConTeorico  = [];
var EvaTeorivo  = [];
var ConPractico = [];
var EvaPractico = [];
var Brigadistas = [];

//Se lee el texto y se deja su contenido en la variable TextoLeido
function processFiles(files) {
	var file = files[0];
	var reader = new FileReader();
 
	reader.onload = function (e) {                            //EN UNA DE ESTAS LINEAS
	var output = document.getElementById("fileOutput");       //LO DEJA EN LA PRIMERA WEA
	//alert(e.target.result);                                   //HAY QUE SACARLA
	TextoLeido = e.target.result;                             //EN UNA DE ESTAS
	output.textContent = e.target.result;                     //EN UNA DE ESTAS
	};                                                        //EN UNA DE ESTAS
	reader.readAsText(file);                                  //EN UNA DE ESTAS
}


function procesamiento() {
	var filtro1 = TextoLeido.split(";");              //Dividimos por ;
	for (var i = filtro1.length - 2; i >= 0; i--) {
		var individuo = filtro1[i].split(",");        //Dividimos por ,
		Postulantes.push(individuo);                  //Matriz compuesta por cada individuo
	}

	for (var i = Postulantes.length - 1; i >= 0; i--) {  //Mostramos los elementos
		alert(Postulantes[i][0]); 
	}
}