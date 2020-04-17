//#nuevas caracterticas añadidas en ES8
//## Uso del metodo Object.entries para poder consultar la información de una matriz

const data = {
    frontend = 'Oscar',
    backend = 'Isabel',
    design = 'Ana',
}

const entries = Object.entries(data);
console.log(entries);
console.log(entries.length);


//## Uso del metodo Object.entries para poder consultar la información de una matriz

//## Uso del metodo Object.values para poder convertir la información de una 
//  matriz a arrays

const data = {
    frontend = 'Oscar',
    backend = 'Isabel',
    design = 'Ana',
}
const values = Object.values(data);
console.log(values)
console.log(values.length)

//## Uso del metodo Object.values para poder convertir la información de una 
//  matriz a arrays

//## Uso del metodo padStart y padEnd el cual permite añadir caratereste a 
//  lineas de texto

const string = 'hello';
console.log(string.padStart(7,'hi'));
console.log(string.padEnd(12, ' ------'))
console.log('food'.padEnd(12, ' ------'))


//## Uso del metodo padStart y padEnd el cual permite añadir caratereste a 
//  lineas de texto

//Uso de Async Await, metodo implementado a partir de ES8
const helloWorld = () => {
    return new Promise ((resolve, reject)=> {
        (false)
            ? setTimeout(() => resolve('Hello World'), 3000)
            : reject (new Error ('Test error'))

    })
};

const helloAsync = async () => {
    const hello = await helloWorld();
    console.log(hello)
}

helloAsync();

const anotherFunction = async () => {
    try {
        const hello = await helloWorld();
        console.log(hello)
    } catch (error) {
      console.log(error)  
    }
}

anotherFunction();

//Uso de Async Await, metodo implementado a partir de ES8






