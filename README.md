# Explicación del Ejercicio

- ## Obtener el número mayor

para obtener el mayor de los números de un array de números, utilizamos La función Math.max(), ya que, devuelve el mayor de cero o más números.

const numbers = [-17, 24, 9, 32, 100, -80, 28, 0, -10];

var mayor = Math.max(...numbers);

//devuelve 100 

- ## obtener el menor de los números


para obtener el menor de los números de un array de números,utilizamos La función Math.max(), ya que, devuelve el menor de los números.

const numbers = [-17, 24, 9, 32, 100, -80, 28, 0, -10];

var menor = Math.min(...numbers);

//devuelve -80


- ## Obtener el segundo número mayor de los números

### ubicamos la posición del número mayor con el metodo indexOf:

let posicion = numbers.indexOf(mayor);

### con el indice obtenido lo eliminamos aplicando el metodo splice:

let elimMayor = numbers.splice(posicion, 1);

//devuelve 4

### volvemos a aplicar el metodo Math.max para obtener el mayor del nuevo array de numeros
let sigMayor = Math.max(...numbers);

//devuelve 32

