//#Nuevos metodo implementados en ES9
//## metodo para encapsular de manera diferencial los atributos
//  de un objeto posibilitando la desestructuración rapida de los mismos

const obj = {
    name: 'Nel',
    age : 27,
    country: 'Arg',
}

let {name, ...all} = obj;
console.log(name, all)

//## metodo para encapsular de manera diferencial los atributos
//  de un objeto posibilitando la desestructuración rapida de los mismos

//## metodo para transferir/unir atributos de un objeto a otro

const obj = {
    name: 'Nel',
    age : 27,
}

const obj1 = {
    ...obj,
    country: 'Arg',
}

console.log(obj1);

//## metodo para transferir/unir atributos de un objeto a otro

//## metodo para hacer promesas incluyendo la nueva función Finally añadido en ES9

const helloWorld = () => {
    return new Promise ((resolve, reject) =>{
        (true)
            ? resolve ('Hello World')
            : reject (new Error ('Test Error'))
    })
};

helloWorld()
.then (response => console.log(response))
.catch (error => console.log(error))
.finally (() => console.log('Finalizó'));


//## metodo para hacer promesas incluyendo la nueva función Finally añadido en ES9

//## Metodo para hacer Regex de forma mas eficiente a partir de ES9

const regexData = /([0-9]{4})-([0-9]{2})-([0-9]{2})/
const match = regexData.exec('2010-04-15');
const year = match[1];
const month = match[2];
const day = match[3];

console.log(year, month, day)

//## Metodo para hacer Regex de forma mas eficiente a partir de ES9
