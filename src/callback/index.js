//-------------------------------------------------
//-------------------------------------------------
// Este es un ejemplo de callback

//creamos la función que vamos a usar después
function sum(num1, num2) {
  return num1 + num2;
}

//Definimos las variables que vamos a usar en nuestra otra función
function calc(num1, num2, callback) {
  return callback(num1, num2);
}

//No hace falta colcoar los paréntesis al pasarlo por parámetro
console.log(calc(2, 2, sum));
//-------------------------------------------------
//-------------------------------------------------
// SetTimeOut

setTimeout(function () {
  console.log("Hola Javascript");
}, 2000);

function gretting(name) {
  console.log(`Hola ${name}`);
}

setTimeout(gretting, 2000, `Camilo`);
