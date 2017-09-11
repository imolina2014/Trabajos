var TextoLeido;
var Postulantes = [];
var Aspirantes  = [];
var ConTeorico  = [];
var ConPractico = [];
var ConTodo     = [];
var Brigadistas = [];
var Reprobados = []; 

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
	muestra_postulantes();
}

	function muestra_postulantes() {
	var aux = 0;
	var str = "";
	for (var i = Postulantes.length - 1; i >= 0; i--) {  //Mostramos los elementos
		str += Postulantes[i][0] + " "; 
		if((aux%2)==0) str+= "</br>";
		aux++;
	}
	document.getElementById('Postulante').innerHTML=str;
	}

	function muestra_aspirantes(argument) {
	var aux = 0;
	var str = "";
	for (var i = Aspirantes.length - 1; i >= 0; i--) {  //Mostramos los elementos
		str += Postulantes[i][0] + " "; 
		if((aux%2)==0) str+= "</br>";
		aux++;
	}
	document.getElementById('Aspirante').innerHTML=str;
	}

	function muestra_conteorico(argument) {
	var aux = 0;
	var str = "";
	for (var i = ConTeorico.length - 1; i >= 0; i--) {  //Mostramos los elementos
		str += ConTeorico[i][0] + " "; 
		if((aux%2)==0) str+= "</br>";
		aux++;
	}
	document.getElementById('ConTeorico').innerHTML=str;
	}

	function muestra_conpractico(argument) {
	var aux = 0;
	var str = "";
	for (var i = ConPractico.length - 1; i >= 0; i--) {  //Mostramos los elementos
		str += ConPractico[i][0] + " "; 
		if((aux%2)==0) str+= "</br>";
		aux++;
	}
	document.getElementById('ConPractico').innerHTML=str;
	}

	function muestra_brigadistas(argument) {
	var aux = 0;
	var str = "";
	for (var i = Brigadistas.length - 1; i >= 0; i--) {  //Mostramos los elementos
		str += Brigadistas[i][0] + " "; 
		if((aux%2)==0) str+= "</br>";
		aux++;
	}
	document.getElementById('Brigadistas').innerHTML=str;
	}

	function muestra_reprobados(argument) {
	var aux = 0;
	var str = "";
	for (var i = Reprobados.length - 1; i >= 0; i--) {  //Mostramos los elementos
		str += Reprobados[i][0] + " "; 
		if((aux%2)==0) str+= "</br>";
		aux++;
	}
	document.getElementById('Reprobados').innerHTML=str;
	}

	function muestra_contodo(argument) {
	var aux = 0;
	var str = "";
	for (var i = ConTodo.length - 1; i >= 0; i--) {  //Mostramos los elementos
		str += ConTodo[i][0] + " "; 
		if((aux%2)==0) str+= "</br>";
		aux++;
	}
	document.getElementById('ConTodo').innerHTML=str;
	}






// function push_array1(){
// 	for (var i = Postulantes.length - 1; i >= 0; i--) {
// 		var porId=document.getElementById(Postulantes[i][0]).checked;
// 		if (porId==true){
// 			Aspirantes.push(Postulantes[i]);
// 		}else{
// 			Reprobados.push(Postulantes[i]);
// 		}
// 	}
// 	muestra_checks1();
// }
// function muestra_checks1(recibe){
// 	cont = 0;
// 	for (var i = Aspirantes.length - 1; i >= 0; i--) {  
// 		var checkbox = document.createElement('input');
// 		checkbox.type = "checkbox";
// 		checkbox.name = Aspirantes[i][0];
// 		checkbox.value = Aspirantes[i][0];
// 		checkbox.id = Aspirantes[i][0]+1;    
// 		checkbox2.appendChild(checkbox);
// 		var checkbox = document.createTextNode(Aspirantes[i][1]+" "+Aspirantes[i][3]+" "+Aspirantes[i][4]);
// 		checkbox2.appendChild(checkbox);
// 		cont++;
// 		if (cont==5){
// 			var checkbox = document.createElement('br');
// 			checkbox2.appendChild(checkbox);
// 			cont = 0;
// 		}	
// 	}
// }







// function push_array2(){
// 	for (var i = Aspirantes.length - 1; i >= 0; i--) {
// 		var porId=document.getElementById(Aspirantes[i][0]+1).checked;
// 		if (porId==true){
// 			ConTeorico.push(Aspirantes[i]);
// 		}else{
// 			Reprobados.push(Aspirantes[i]);
// 		}
// 	}

// 	muestra_checks2();
// }
// function muestra_checks2(recibe){
// 	cont = 0;
// 	for (var i = ConTeorico.length - 1; i >= 0; i--) {  
// 		var checkbox = document.createElement('input');
// 		checkbox.type = "checkbox";
// 		checkbox.name = ConTeorico[i][0];
// 		checkbox.value = ConTeorico[i][0];
// 		checkbox.id = ConTeorico[i][0]+2;    
// 		checkbox3.appendChild(checkbox);
// 		var checkbox = document.createTextNode(ConTeorico[i][1]+" "+ConTeorico[i][3]+" "+ConTeorico[i][4]);
// 		checkbox3.appendChild(checkbox);
// 		cont++;
// 		if (cont==5){
// 			var checkbox = document.createElement('br');
// 			checkbox3.appendChild(checkbox);
// 			cont = 0;
// 		}	
// 	}
// }









// function push_array3(){
// 	for (var i = ConTeorico.length - 1; i >= 0; i--) {
// 		var porId=document.getElementById(ConTeorico[i][0]+2).checked;
// 		if (porId==true){
// 			ConPractico.push(ConTeorico[i]);
// 		}else{
// 			Reprobados.push(ConTeorico[i]);
// 		}
// 	}

// 	muestra_checks3();
// }
// function muestra_checks3(recibe){
// 	cont = 0;
// 	for (var i = ConPractico.length - 1; i >= 0; i--) {  
// 		var checkbox = document.createElement('input');
// 		checkbox.type = "checkbox";
// 		checkbox.name = ConPractico[i][0];
// 		checkbox.value = ConPractico[i][0];
// 		checkbox.id = ConPractico[i][0]+3;    
// 		checkbox4.appendChild(checkbox);
// 		var checkbox = document.createTextNode(ConPractico[i][1]+" "+ConPractico[i][3]+" "+ConPractico[i][4]);
// 		checkbox4.appendChild(checkbox);
// 		cont++;
// 		if (cont==5){
// 			var checkbox = document.createElement('br');
// 			checkbox4.appendChild(checkbox);
// 			cont = 0;
// 		}	
// 	}
// }







// function push_array4(){
// 	for (var i = ConPractico.length - 1; i >= 0; i--) {
// 		var porId=document.getElementById(ConPractico[i][0]+3).checked;
// 		if (porId==true){
// 			Brigadistas.push(ConPractico[i]);
// 		}else{
// 			Reprobados.push(ConPractico[i]);
// 		}
// 	}

// 	muestra_checks4();
// }
// function muestra_checks4(recibe){
// 	for (var i = Brigadistas.length - 1; i >= 0; i--) {  
// 		var checkbox = document.createTextNode(Brigadistas[i]);
// 		checkbox5.appendChild(checkbox);
// 		var checkbox = document.createElement('br');
// 			checkbox5.appendChild(checkbox);
// 	}
// 	alert(Reprobados);
// }





function push_array(paso){   //PASO HABLA DEL PASO DEL HTML (POSTULANTE, ASPIRANTE, ETC.)
	if (paso==1){
		a= Postulantes;				//ESTA PARTE ES PARA VER QUE ARREGLO PROCESAREMOS Y CUAL LLENAREMOS RESPECTIVAMENTE
		b= Aspirantes;
	}
	if (paso==2){
		a= Aspirantes;
		b= ConTeorico;
	}
	if (paso==3){
		a= ConTeorico;
		b= ConPractico;
	}
	if (paso==4){
		a= ConPractico;
		b= ConTodo;
	}
	if (paso==5){
		a= ConTodo;
		b= Brigadistas;
	}
	for (var i = a.length - 1; i >= 0; i--) {
		if (paso==1)var porId=document.getElementById(a[i][0]).checked;   //POR UNA MAÑA DE ABAJO SE DEBIERON PONER ESTOS IF y ELSE
		else {
			num = paso -1;
			n = num.toString();
			var porId=document.getElementById(a[i][0]+n).checked;
		}

		if (porId==true){												//SI ESTA CLICKEADO SE HACE PUSH AL ARREGLO SGTE. SI NO SE HACE PUSH A LOS REPROBADOS
			b.push(a[i]);
		}else{
			Reprobados.push(a[i]);
		}
	}

	if(paso==1)
		{
			document.getElementById('Postulante').innerHTML="";
			muestra_aspirantes();
			muestra_reprobados();
		} 

	if(paso==2)
		{ 
			document.getElementById('Aspirante').innerHTML="";
			muestra_conteorico();
			muestra_reprobados();
		}
	if(paso==3) 
		{
			document.getElementById('ConTeorico').innerHTML="";
			muestra_conpractico();
			muestra_reprobados();
		}

	if(paso==4)
		{   document.getElementById('ConPractico').innerHTML="";
			muestra_contodo();
			muestra_reprobados();
		}

	if(paso==5)
		{
			document.getElementById('ConTodo').innerHTML="";
			muestra_brigadistas();
			muestra_reprobados();	
		}

		//AQUI HABRIA QUE AGREGAR EL ORO ESTADO NO ENTIENDO TU LOGICA



	
	muestra_checks(paso);											//PASAMOS A LA FUNCION DE MAS ABAJO
}
function muestra_checks(paso){   
	cont = 0;														// ESTO ES SOLO PARA VER CUANTOS SE MOSTRA POR LINEA
	if (paso==1){
		a= Aspirantes;
		b= checkbox2;
	}
	if (paso==2){													//LO MISMO DE ARRIBA. PARA VER QUE ARREGLO SE LEERA PARA CREAR LOS CHECKBOX
		a= ConTeorico;
		b= checkbox3;												//Y B ES PAARA NO REPETIR LAS ETIQUETAS DE HTML(PUDO SER MAS OPTIMIZADO)
	}
	if (paso==3){
		a= ConPractico;
		b= checkbox4;
	}
	if (paso==4){
		a= ConTodo;
		b= checkbox5;
	}
	if (paso==5){													//SOLO EN CASO DE QUE SEA EL ULTIMO PASO SE MOSTRARAN TODOS LOS DATOS DE LOS BRIGADISTAS FINALES
		a= Brigadistas;
		for (var i = Brigadistas.length - 1; i >= 0; i--) {  
			var checkbox = document.createTextNode(Brigadistas[i]);
			checkbox6.appendChild(checkbox);
			var checkbox = document.createElement('br');
				checkbox6.appendChild(checkbox);
		}
		alert(Reprobados);
	}
	if (paso==1 || paso==2 || paso==3 ){							//EN CASO DE QUE NO SEA EL PASO FINAL SE CREAN CHECKBOX CON LOS ASPIRANTES QUE VA AVANZANDO.
		alert("Entra")
		for (var i = a.length - 1; i >= 0; i--) {  
			var checkbox = document.createElement('input');
			checkbox.type = "checkbox";
			checkbox.name = a[i][0];
			checkbox.value = a[i][0];
			checkbox.id = a[i][0]+paso;    
			b.appendChild(checkbox);
			var checkbox = document.createTextNode(a[i][1]+" "+a[i][3]+" "+a[i][4]);
			b.appendChild(checkbox);
			cont++;
			if (cont==5){
				var checkbox = document.createElement('br');
				b.appendChild(checkbox);
				cont = 0;
			}	
		}
	}
}