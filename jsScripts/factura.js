let factura = {
    nombreEmisor:'Alejandro',
    rfcEmisor:'DSJFÑDJHFGDH',
    nombreReceptor:'Luis',
    rfcReceptor:'CJKSDFKJFLJF',
    concepto:[
        {nombre:'Pala', cantidad:'3', costoUnitario:79, sku:'8978SD'},
        {nombre:'Metro', cantidad:'2', costoUnitario:90, sku:'WERFSD'},
        {nombre:'Pico', cantidad:'1', costoUnitario:200, sku:'FGHGDJ'},
        {nombre:'Desarmador', cantidad:'1', costoUnitario:40, sku:'IJKGJHGK'}
    ],
    iva:16
};

console.log(factura.nombreEmisor);
let subtotal = 0;

factura.concepto.forEach(element => {
    subtotal += (element.cantidad * element.costoUnitario)
});

let total = (subtotal*(factura.iva/100)+subtotal);

console.log('Subtotal:', subtotal);
console.log('Total:', total)


let numeros = [7, 8, 9, 3, 10, 2, 1, 0];

console.log(numeros);

// numeros[0] = 8;
// console.log(numeros);

let numeroUno = numeros[0]; 
let numeroDos = numeros[1]; 

if(numeroUno > numeroDos){
    console.log('Es mayor número uno');
}else{
    console.log('Es mayor número dos');
}

let aux;

for(let i = 0; i < numeros.length -1; i++){
    for(let j = 0; j < numeros.length -1; j++){
        if(numeros[j] > numeros[j+1]){
            console.log(numeros[j]+' Es mayor que: ' + numeros[j+1]);
            aux = numeros[j] 
            numeros[j] = numeros[j+1]; 
            numeros[j+1] = aux; 
        }
    } 
}

console.log(numeros);
