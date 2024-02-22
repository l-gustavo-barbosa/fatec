class Ponto{
    pontoA:number;
    pontoB:number;

    constructor(pontoA:number, pontoB:number){
        this.pontoA = pontoA;
        this.pontoB = pontoB;
    }

    distancia(pontoFornecido:Ponto){
        let pontoAQ = (this.pontoA - pontoFornecido.pontoA) * (this.pontoA - pontoFornecido.pontoA); //ponto A ao Quadrado
        let pontoBQ = (this.pontoB - pontoFornecido.pontoB) * (this.pontoB - pontoFornecido.pontoB); //ponto B ao Quadrado
        return Math.sqrt(pontoAQ + pontoBQ);
    }
}

const a = new Ponto(3,5);
const b = new Ponto(1,2);
//observe que passamos como parâmetro um objeto do tipo Ponto
console.log("Distância:", a.distancia(b));