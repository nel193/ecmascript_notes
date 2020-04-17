//#Nuevos metodo implementados en ES10
//##El metodo flat() sirve para poder definir la profundidad de
//  niveles que tenga un array dependiendo de cuantos subarreglos
//  tenga anidados

let array = [1,2,3, [4,5, [6,7,8]]];

console.log(array.flat(2))

//##El metodo flat() sirve para poder definir la profundidad de
//  niveles que tenga un array dependiendo de cuantos subarreglos
//  tenga anidados

//## El metodo flatMap() posibilita mapear el array y proporcionarle 
//  funciones y metodos nuevos

let array = [1,2,3,4,5];

console.log(array.flatMap(value => [value, value * 2]))


//## El metodo flatMap() posibilita mapear el array y proporcionarle 
//  funciones y metodos nuevos

////## Los metodos trimStart() y trimEnd() permiten borrar los espacios al inicio
//  o al final de cualquier string 
const hello = '         Hello Wolrd'
console.log(hello)
console.log(hello.trimStart())

const hello = 'Hello Wolrd                '
console.log(hello)
console.log(hello.trimEnd())

////## Los metodos trimStart() y trimEnd() permiten borrar los espacios al inicio
//  o al final de cualquier string 

// A partir de la version ES10 ya es posible omitir los parametros de catch a la hora 
//  realizar promesas para asì poder trabajar de forma màs fluida
try{

} catch {
    error
}
// A partir de la version ES10 ya es posible omitir los parametros de catch a la hora 
//  realizar promesas para asì poder trabajar de forma màs fluida

//## haciendo uso del metodo fromEntries() anexado al metodo Object se puede transformar 
//##    un array a objeto
let entries = [['name', 'Oscar'], ['age', 32]];

console.log(Object.fromEntries(entries))

//## haciendo uso del metodo fromEntries() anexado al metodo Object se puede transformar 
//##    un array a objeto

//## al metodo Symbol() se le ha añadido la posibilidad de acceder a la descripciòn de los
//  elementos de su tipo anexando en parametro .description a un elemento que anteriormente
//  haya sido inicializado como Symbol

let mySymbol = 'My Symbol'
let symbol = Symbol(mySymbol)
console.log(symbol.description)

//## al metodo Symbol() se le ha añadido la posibilidad de acceder a la descripciòn de los
//  elementos de su tipo anexando en parametro .description a un elemento que anteriormente
//  haya sido inicializado como Symbol