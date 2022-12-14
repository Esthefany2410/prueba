//**recordar como crear variables del tipo string
var lenguaje = "Python";
var ciudad = "Lima";
var mensaje = "¡Bienvenidos a mi sitio web!";

const single = 'comillas simple';
const double = "comillas dobles";
const backticks = `backticks`; //comillas invertidas

//**Seleccionar una letra de los strings
var animal = "gato"; //comentar a las estudiantes que el orden es: primer letra ubicación o indice 0, segunda letra ubicación 1, etc.
console.log(animal.charAt(2)) // devuelve t en la consola del navegador
console.log(animal[2]) // devuelve a en la consola del navegador
var electro = "computadora de escritorio";
console.log(electro.charAt(12));
console.log(electro[15]);

//**Comillas o tildes invertidas:
const saludo = 'a todos';
//assert permite que salga un mensaje de error si ambas frases son diferentes
//en la comparación. Si son iguales no muestra mensaje en consola.
//atención con el uso de: ${saludo} para poder utilizar la variable saludo.
//cambiar el texto dentro de 'Hola Mundo' para mostrar el error a las estudiantes
console.assert(`Hola ${saludo}` === 'Hola Mundo'); 

/*var palabra = 'ejemplo';
console.log('Esto es un '+ palabra);
console.log(`Esto es otro ${palabra}`)*/

//**Caracteres especiales
var frase1 =  `Hola:
                amiga 1`;
alert(frase1);
//el \n genera un salto de linea
var frase2 =  `Hola:\n\namiga 2`;
alert(frase2);
//UTILIZANDO String.length
var letras = "abcdefghijklmnopqrstuvwxyz";
var cant_let = letras.length;
alert(cant_let);

//convertir minusculas a mayusculas
var minus = "peru";
console.log(minus.toUpperCase()); //pasa a mayuscula
//ejemplo con comprobación usando assert 
console.log('Interface'.toUpperCase());
console.log('INTERFACE'.toLowerCase());
console.log('INTERFACE'[5].toLowerCase());

//substrings:
var str = 'primero segundo tercero';

var texto_1 = str.indexOf('primero');
console.log(texto_1);
console.log(str.indexOf('primero'));
console.log(str.indexOf('segundo'));

/*if ("limpié mi cuarto"){
    "Salgo con mis amigos"
}
else{
    "Estaré castigado"
}*/
var nombre = 'Andrea';
if (nombre.length > 7) {
  console.log('Qué nombre tan largo tienes!');
}
else{
    console.log("Tu nombre NO es tan largo");
}

//varios if y else:
var num = 200;
if (num < 10) {
    console.log('Diste un número Pequeño');
  } else if (num < 100) {
    console.log('Diste un número Mediano');
  } else {
    console.log('Diste un número Grande');
  }

/*if(condicion){
    //Si se cumple la condicion se ejecuta ésta línea
}else{//else significa "SINO"
    //Si NO se cumple la condición se ejecuta ésta línea
}

if(condicion1){
    //Si se cumple la condición 1 se ejecuta ésta línea    
}else if(condicion2){
    //Si NO se cumple la condición 1 y se cumple la condición 2 se ejecuta ésta línea
}else{
    //Si NO se cumple NINGUNA condición se ejecuta ésta línea
}*/

//if anidados:
var temperatura = 15; 
if (temperatura > 10) {
  if (temperatura < 26) {
     alert("Temperatura moderada.");
  }else if (temperatura >26) {
      alert("La temperatura esta alta.");
  }
}else{
    alert("Hace frio en la ciudad");
}

/*var figura_color="circulo verde"
if(figura=="circulo"){
    if(color=="verde"){
        console.log("Ganaste");
    }else{
        console.log("Intentalo de nuevo");
    }
}else{
    console.log("Figura incorrecta");
}*/






