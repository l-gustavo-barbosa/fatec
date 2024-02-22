class Operacao{
    primeiroNumero:number;
    segundoNumero:number;

    constructor(primeiroNumero:number, segundoNumero:number){
        this.primeiroNumero = primeiroNumero;
        this.segundoNumero = segundoNumero;
    }

    somar(){
        return this.primeiroNumero + this.segundoNumero;
    }

    subtrair(){
        return this.primeiroNumero - this.segundoNumero;
    }

    dividir(){
        return this.primeiroNumero / this.segundoNumero;
    }


}

const op = new Operacao(3,5);
console.log("Soma:", op.somar());
console.log("Diferença:", op.subtrair());
console.log("Divisão:", op.dividir());