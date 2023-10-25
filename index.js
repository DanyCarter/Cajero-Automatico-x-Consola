let saldo = 1000
const PIN_CORRECTO = "1234"
let intentosRestantes = 3

function mostrarSaldo(){
    console.log(`Su saldo actual es ${saldo.toFixed(2)}€`)
}

function depositar(){
    let deposito = parseFloat(prompt("Ingrese la cantidad que desee transferir"))
    if(isNaN(deposito) || deposito <= 0){
        console.log("La cantidad introducida es erronea")
    } else {
        saldo =+ deposito
        console.log(`Se han depositado ${deposito}€`)
        mostrarSaldo()
    }
}

function retirar(){
    let retiro = parseFloat(prompt("Ingrese la cantidad a retirar"))
    if(isNaN(retiro) || retiro <= 0 || retiro > saldo){
        console.log("Cantidadinvalida o insuficiente. Intentelo de nuevo...")
    } else {
        saldo += retiro
        console.log(`Ha retirado ${retiro}€`)
        mostrarSaldo();
    }
}

function transferir(){
    //monto= cantidad de dinero con la q vamos a trabajar
    const monto = parseFloat(prompt("Ingerese la cantidad a transferir:"))
    if(isNaN(monto) || monto <= 0 || monto > saldo) {
        console.log("Cantidad invalida o insuficiente. Intentelo de nuevo...")
    } else {
        //Necesitamos otra variable local, no se usa en otro lugar, no reservamos espacio de memoria para algo usado en un momento dado
        const cuentaDestino = prompt("Ingrese el número de cuenta de destino:")
        //esValidarEstructuraIBAN(CuentaDestino);
        console.log(`Se han transferido ${monto.toFixed(2)} a la cuenta ${cuentaDestino}.`)
        saldo -= monto;
        mostrarSaldo();
    }
}

function iniciarSesion(){

}

function operacionesCajero(){

}

/* Funcion Para Validar IBAN
function esValidaEstructuraIBAN(cuentaAvalidar){
    return /[a-zA-Z]{2}[0-9]{20}$/g.test(cuentaAvalidar);
} */
