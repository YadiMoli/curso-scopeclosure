// variables

var a; // declarando
var b = 'b'; // declaramos / asignamos
b = 'bb'; // reasignacion
var a = 'aa'; // redeclaracion


// Global Scope
var fruit = 'Apple'; // global
console.log(fruit);

function bestFruit() {
  console.log(fruit);
}

bestFruit();

//cuando no se declara una variable y solo la asignamos por defecto será una variable global:

function countries() {
    country = "Alemania" //asignacion sin declaración
    console.log(country)
}

countries()
console.log(country)

