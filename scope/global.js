//variables
var a; // declarando la variable a
var b = 'b'; //declaramos y asignamos
b = 'bb'; //reasignar
var a = 'aa'; //re declaracion

//Global scope
var fruit = 'apple'; //global

function bestFruit() {
    console.log(fruit);
}
bestFruit();

function countries() {
    country = 'Colombia'; //global
    console.log(country);
}
countries();
console.log(country);





