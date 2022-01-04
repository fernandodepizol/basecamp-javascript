class ContaBancaria {
    constructor(agencia, numero, tipo) {
        this.agencia = agencia;
        this.numero = numero;
        this.tipo = tipo;
        this._saldo = 0;
    }

    get saldo(){
        return this._saldo;
    }
    set saldo(valor){
        this._saldo = valor;
    }

    sacar(valor){
        if(valor > this._saldo){
            return console.log('Operação Negada');
        }
        this.saldo = this._saldo - valor;
        
        return this._saldo;
    }

    depositar(valor){
        this._saldo = this._saldo + valor;
        return this._saldo;
    }
}

class ContaCorrente extends ContaBancaria {
    constructor(agencia, numero, cartaoDeCredito){
        super(agencia, numero);
        this.tipo = 'Corrente';
        this._cartaoDeCredito = cartaoDeCredito;
    }

    get cartaoDeCredito(){
        return this._cartaoDeCredito;
    }
    set cartaoDeCredito(valor){
        this._cartaoDeCredito = valor;
    }
}

class ContaPoupanca extends ContaBancaria {
    constructor(agencia, numero){
        super(agencia, numero);
        this.tipo = 'Corrente';
        
    }

 
}

class ContaUniversitaria extends ContaBancaria{
    constructor(agencia, numero, saldo){
        super(agencia, numero, saldo);
        this.tipo = 'Corrente';
        
    }
    sacar(valor){
        if(valor > 500){
            return 'Você não pode realizar saques superiores a R$500,00';
        }else{
            this._saldo = this._saldo - valor;
            
        }
        return this._saldo;
        }
}
 


