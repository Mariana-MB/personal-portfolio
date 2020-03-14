//alert('Callbacks');
function saludar(){
    return 'Hola';
}
//saludar();
//alert(saludar());
function saludar(hola){
    return 'Hola';
}
//saludar('Helo world!');
// EJEMPLO :o 
/*function principal(callback){
    console.log('Se ejecuto principal');
    //callback();
    callback('Se ejecuto callback');
}

principal(function(value) {
    //console.log('Se ejecuto callback');
    console.log(value);
});

function principal(callbackUno, callbackDos, callbackTres){
    console.log('Se ejecuto principal');
    callbackUno();
    callbackDos();
    callbackTres();
}

principal( function () {
    console.log('Se ejecuto Callback Uno');
},
function () {
    console.log('Se ejecuto Callback Dos');
},
function () {
    console.log('Se ejecuto Callback Tres');
});
*/
$('#calcular').click(function(e){
    e.preventDefault();
   
    let numUno=$('#numUno').val();
    let numDos=$('#numDos').val();
    let result=0;


    function calculadora(suma, resta, mult, div){
        //console.log('Se ejecuto principal');
        suma(numUno,numDos);
        resta(numUno,numDos);
        mult(numUno,numDos);
        div(numUno,numDos);
    }

    calculadora( function (numUno, numDos) {
        result=parseInt(numUno)+parseInt(numDos);
        //return result;
        //console.log('Suma: '+result);
        $('#result').append('<p>La suma es: '+result);
    },
    function (numUno, numDos) {
        result=numUno-numDos;
        //console.log('Resta: '+result);
        $('#result').append('<p>La resta es: '+result);
    },
    function (numUno, numDos) {
        result=numUno*numDos;
        //console.log('Multiplicacion: '+result);
        $('#result').append('<p>La multiplicación es: '+result);
    },
    function (numUno, numDos) {
        result=numUno/numDos;
        //console.log('Division: '+result);
        $('#result').append('<p>La división es: '+result);
    });

});


