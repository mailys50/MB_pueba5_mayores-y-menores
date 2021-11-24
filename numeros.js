// Implementa una función que reciba un arreglo de números y devuelva un nuevo arreglo con 3 elementos, en este orden:

// el número mayor del arreglo.
// el número menor del arreglo.
// // el segundo número mayor del arreglo.
// // const analyseArray = (arr) => {
// //   // ...
// // };
//  const numbers = [-17, 24, 9, 32, 100, -80, 28, 0, -10];
// // const [max, min, max2] = analyseArray(numbers);
// // console.log(max); // 100
// // console.log(min); // -80
// // console.log(max2); // 32


let espacio =document.getElementById("root");

const numbers = [-17, 24, 9, 32, 100, -80, 28, 0, -10];
var mayor = Math.max(...numbers);
var menor = Math.min(...numbers);
let posicion = numbers.indexOf(mayor);
let elimMayor = numbers.splice(posicion, 1);
let sigMayor = Math.max(...numbers);


// Console.WriteLine("NUMEROS MAYOR   Primer Numero:"+primNum+" Segundo Numeros:"+numbers);
espacio.innerHTML = "El número mayor es:"+ ""+ mayor+"<br> "+"El número menor es:"+menor+"<br>"+"El segundo numero mayor es:"+sigMayor
console.log(mayor);
console.log(menor);
console.log(sigMayor);
