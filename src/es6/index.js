//Ejemplo de como se aplicaban los valores por defecto de las funciones antes de ES6
function newFunction(name, age, country){
    var name = name || 'oscar';
    var age = age || 32;
    var country = country || 'ARG';
    console.log(name,age,counrty);

}
//Ejemplo de como se aplicaban los valores por defecto de las funciones antes de ES6


//Ejemplo de como se aplican los valores por defecto de las funciones despues de ES6
function newFunction2(name = 'oscar', age = 32, country = "ARG"){
    console.log(name,age,counrty);
}

newFunction2(); //devuelve valores asignados por defecto por no tener parametros asignados
newFunction2("Mario", 35, "ESP")//devuelve valores asignados por parametros asignados
//Ejemplo de como se aplican los valores por defecto de las funciones despues de ES6

//Ejemplo de como se aplicaban los Template literals antes de ES6

let hello = 'Hello';
let wolrd = 'World';
let epicPhrase = hello + ' ' + wolrd;
console.log(epicPhrase);
//Ejemplo de como se aplicaban los Template literals antes de ES6


//Ejemplo de como se aplican los Template literals despues de ES6
let hello = 'Hello';
let wolrd = 'World';
let epicPhrase2 = `${hello} ${world}`;
console.log(epicPhrase2);
//Ejemplo de como se aplican los Template literals despues de ES6

//Ejemplo de como se aplican los multilinea antes de ES6
let lorem = "Quiero escribir una frase epica que pudiesemos \n"
+ "separta de esta otra frase"
console.log(lorem)
//Ejemplo de como se aplican los multilinea antes de ES6

//Ejemplo de como se aplican los multilinea despues de ES6
let lorem2 = `otra frase epica pero escrita en ECMAS6,
que con un solo enter ya separo la frase.`
console.log(lorem2)
//Ejemplo de como se aplican los multilinea despues de ES6

//Ejemplo de como se aplican la desestructuración de objetos antes de ES6
let person = {
    'name': 'oscar',
    'age' : 32,
    'country' : 'MX'
}
console.log (person.name, person.age,)
//Ejemplo de como se aplican la desestructuración de objetos antes de ES6

//Ejemplo de como se aplican la desestructuración de objetos despues de ES6
let person2 = {
    'name': 'oscar',
    'age' : 32,
    'country' : 'MX'
}
 let {name, age} = person2;
 console.log(name,age);
//Ejemplo de como se aplican la desestructuración de objetos despues de ES6

console.log(name);

//Metodo para enlazar arrays antes de ES6

let team1 = ['oscar', 'julia', 'danilo'];
let team2 = ['ramiro', 'david', 'esperanza']
let education = ['alfonso', 'oscar', 'julia', 'danilo', 'ramiro', 'david', 'esperanza']

//Metodo para enlazar arrays antes de ES6

//Metodo para enlazar arrays despues de ES6
let education2 = ['alfonso', ...team1, ...team2];

console.log(education)
console.log(education2)
//Metodo para enlazar arrays despues de ES6

//Metodo para crear variables usando let, nueva herramienta a partir de ES6 la cual solo
//puede ser invocada dentro del mismo bloque de codigo en que fue inicializada
{
    var globalVar = 'global VAR'
}
{
    let globalLet = 'global LET'
    console.log('globalLet')
}

    console.log('globalVar') //retorna global VAR
//  console.log('globalLet') //da error porque está fuera del scope

//Metodo para crear variables usando let, nueva herramienta a partir de ES6 la cual solo
//puede ser invocada dentro del mismo bloque de codigo en que fue inicializada

//Metodo para crear variables usando const, nueva herramienta a partir de ES6 la cual 
//posibilita bloquear el valor asignado en un principio, evitando que pueda ser reasignada
const a= 'b';
     a = 'a'; //retorna error

//Metodo para crear variables usando const, nueva herramienta a partir de ES6 la cual 
//posibilita bloquear el valor asignado en un principio, evitando que pueda ser reasignada

//Metodo para crear objetos antes de ES6
let name ='Nelson'
let age = 27
obj = {name : name, age : age,}
//Metodo para crear objetos antes de ES6

//Metodo para crear objetos despues de ES6
obj2 = {name, age}
console.log(obj2)
//Metodo para crear objetos despues de ES6

//Metodo de escritura de arrow functions
const names = [
    {name : "Oscar", age: 35},
    {name : "Alberto", age: 32},
    {name : "Ozzy", age: 53},
]

let listOfNames = names.map(function (item){
    console.log(item.name)
})

let listOfNames2 = names.map(item => console.log(item.name))

const listOfName3 = () => { 
    //...Bloque de código
 }

 const listOfName = name => {
     //...Bloque de código
 }

 const square = num => num * num;
//Metodo de escritura de arrow functions

//Metodo de escritura de promesas
 const helloPromise = () => {
     return new Promise((resolve, reject) => {
         if(true){
             resolve("Hey!")
         } else {
             reject ('Ups!!')
         }
     })
 }

 helloPromise()
    .then(response => console.log(response))
    .catch(error => console.log(error))
//Metodo de escritura de promesas

//Metodo de escritura de clases
 class  calculator{
     constructor(){
         this.valueA = 0;
         this.valueB = 0;
     }
     sumar(valueA, valueB){
        this.valueA = valueA;
        this.valueB = vAlueB;
        return this.valueA + this.valueB
     }
 } 

 const calc = new calculator();
 console.log(calc.sumar(2,2))

//Metodo de escritura de clases

//Metodo de uso de modulos importados

import {hello} from './module';
hello();

//Metodo de uso de modulos importados

//Metodo de uso de generator
function* helloWorld(){
    if(true){
        yield 'Hello, '
    }if (true){
        yield 'world'
    }
}

const generatorHello = helloWorld();
console.log(generatorHello.next().value);
console.log(generatorHello.next().value);
console.log(generatorHello.next().value);

//Metodo de uso de generator






