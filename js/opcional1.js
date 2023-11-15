/*
Objeto "Cuenta Bancaria": Crea un objeto llamado cuentaBancaria con propiedades
 como saldo y titular, y métodos como depositar y retirar que actualicen el saldo.
*/

class cuentaBancaria{
    constructor(saldo,titular){
        this.saldo=saldo;
        this.titular=titular;
    }

    depositar(dinero){
        this.saldo+=dinero;

        document.write("<h3>Deposito de dinero</h3>")
        document.write(`<p>saldo actualizado : ${this.saldo}</p>`)
    }

    retirar(dinero){
        this.saldo-=dinero;
        
        document.write("<h3>Retiro de dinero</h3>")
        document.write(`<p>saldo actualizado : ${this.saldo}</p>`)
    }
}

let cb1= new cuentaBancaria(220,"Sergio Ruiz");

document.write(`<h3>Datos de la cuenta bancaria:</h3>
                <p>Titular: ${cb1.titular}</p>
                <p>Saldo: ${cb1.saldo}</p>`);

cb1.depositar(330);
cb1.retirar(330);