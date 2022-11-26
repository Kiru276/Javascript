const txtA = document.getElementById("valorA");
const txtB = document.getElementById("valorB");
const txtC = document.getElementById("valorC");
const btnCalcular = document.getElementById("botonCalcular");
const pResultado = document.getElementById("resultado");


function calculo(){
    const A = parseFloat(txtA.value);
    const B = parseFloat(txtB.value);
    const C = parseFloat(txtC.value);

    if(!isNaN(A) && !isNaN(B) && !isNaN(C)){

        const discriminante = (B*B -4*A*C);

        if( discriminante < 0){
            pResultado.innerText = "Resultado: ∉, valor discriminate negativo";
        }else{
            let resultado1;
            let resultado2;

            resultado1 = (-B + (Math.sqrt(discriminante))) / (2*A);
            resultado2 = (-B - (Math.sqrt(discriminante))) / (2*A);

            pResultado.innerText = "Resultados: " + resultado1 + " y " + resultado2;
        }

    }else{
        pResultado.innerText = "ERROR: valores ingresados invalidos";
    }
}