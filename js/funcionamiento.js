var TextoLeido;
var Postulantes = [];
var Aspirantes  = [];
var ConTeorico  = [];
var EvaTeorivo  = [];
var ConPractico = [];
var EvaPractico = [];
var Brigadistas = [];

//Rut1,Nombre1,Nombre2,Apellido1,Apellido2,Edad,FechaNac,Celular;







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
	cont = 0;
	var filtro1 = TextoLeido.split(";");              //Dividimos por ;
	for (var i = filtro1.length - 2; i >= 0; i--) {
		var individuo = filtro1[i].split(",");        //Dividimos por ,
		Postulantes.push(individuo);                  //Matriz compuesta por cada individuo
	}

	for (var i = Postulantes.length - 1; i >= 0; i--) {  //Mostramos los elementos


		var checkbox = document.createElement('input');
		checkbox.type = "checkbox";
		checkbox.name = Postulantes[i][0];
		checkbox.value = Postulantes[i][0];
		checkbox.id = Postulantes[i][0];    
		checkbox1.appendChild(checkbox);
		var checkbox = document.createTextNode(Postulantes[i][1]+" "+Postulantes[i][3]+" "+Postulantes[i][4]);
		checkbox1.appendChild(checkbox);

		cont++;
		if (cont==5){
			var checkbox = document.createElement('br');
			checkbox1.appendChild(checkbox);
			cont = 0;
		}
		
	}

}

function recuperar_check(){
	
	for (var i = Postulantes.length - 1; i >= 0; i--) {

		var porId=document.getElementById(Postulantes[i][0]).checked;
		if (porId==true){
			alert("Esta chekeado");
			

		}else{
			alert("No esta chekeado");
		}
	}



}