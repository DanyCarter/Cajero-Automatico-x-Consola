let saldo = 1000
const PIN_CORRECTO = "1234"
let intentosRestantes = 3

function mostrarSaldo(){
/*     const getSaldo = documennt.getElementById("saldo");

    getSaldo.innerHTML = `Su saldo es: ${saldo.toFixed(2)`; */

    console.log(`Su saldo actual es ${saldo.toFixed(2)}€`)
}

function depositar(){

        const montoDeposito = prompt("Ingrese la cantidad que desea depositar:");
        if (montoDeposito === null) {
            // El usuario ha cancelado la operación
            return;
        }
        
        const deposito = parseFloat(montoDeposito);
        if(isNaN(deposito) || deposito <= 0){
            alert("La cantidad introducida es errónea");
        } else {
            saldo += deposito;
            alert(`Se han depositado ${deposito}€`);
            mostrarSaldo();
        }
    }
    

/*     if(inputIngresar.style.display === "none"){
        inputIngresar.style.display = 'block'
        buttonIngresar.innerHTML = 'cancelar'
    }else {
        inputIngresar.style.display = 'none'
        buttonIngresar.innerHTML = 'Ingresar Dinero'
    }

     */

   /*  let deposito = parseFloat(prompt("Ingrese la cantidad que desee transferir"))
    if(isNaN(deposito) || deposito <= 0){
        console.log("La cantidad introducida es erronea")
    } else {
        saldo =+ deposito
        console.log(`Se han depositado ${deposito}€`)
        mostrarSaldo()
    } */


function retirar(){
    let retiro = parseFloat(prompt("Ingrese la cantidad a retirar"))
    if(isNaN(retiro) || retiro <= 0 || retiro > saldo){
        console.log("Cantidadinvalida o insuficiente. Intentelo de nuevo...")
    } else {
        saldo -= retiro
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
        alert(`PIN incorrecto. Le quedan ${intentosRestantes} intentos.`)
        //Es aqui donde va a cambiar
        pin = prompt ("Ingrese su PIN:")
    }

    if (pin === PIN_CORRECTO){
        console.log("Inicio de sesion exitoso")
        mostrarSaldo()
        operacionesCajero()
    } else {
        alert("PIN incorrecto. El cajero se ha bloqueado");
        window.location.href = "cajeroBloqueado.html"; 
    }

}

iniciarSesion()
