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
    //Es let por que va a cambiar, por tanto no puede ser ser const
    let pin = prompt ("Ingrese su PIN:")
    while (pin !== PIN_CORRECTO && intentosRestantes > 1){
        intentosRestantes--
        console.log(`PIN incorrecto. Le quedan ${intentosRestantes} intentos.`)
        //Es aqui donde va a cambiar
        pin = prompt ("Ingrese su PIN:")
    }

    if (pin === PIN_CORRECTO){
        console.log("Inicio de sesion exitoso")
        mostrarSaldo()
        operacionesCajero()
    } else {
        console.log("PIN incorrecto. El cajero se ha bloqueado")
    }

}

function operacionesCajero(){
    let continuar = true;

    while (continuar){
        console.log("Menu del Cajero");
        console.log("1. Consultar saldo");
        console.log("2. Depositar dinero");
        console.log("3. Retirar dinero");
        console.log("4. Transferir dinero");
        console.log("5. Salir");
        
        const opcion = prompt("Elija una opcion: ")

        switch (opcion){
            case "1": 
                mostrarSaldo();
                break;

            case "2":
                depositar();
                break;
            
            case "3":
                retirar();
                break;

            case "4":
                transferir()
                break;

            case "5":
                console.log("Gracias por utilizar el cajero. ¡Hasta luego!")
                continuar = false;
                break;

            default: 
                console.log("Opcion no valida, elija una correcta basura")
        }
    }
}

/* Funcion Para Validar IBAN
function esValidaEstructuraIBAN(cuentaAvalidar){
    return /[a-zA-Z]{2}[0-9]{20}$/g.test(cuentaAvalidar);
} */

iniciarSesion()
