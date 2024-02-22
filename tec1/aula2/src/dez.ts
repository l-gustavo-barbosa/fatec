class Circulo{
    raio:number;

    constructor(raio:number){
        this.raio = raio;
    }


    area(){
        return 3.1415 * (this.raio * this.raio); 
    }

    perimetro(){
        return 2 * (3.1415 * this.raio)
    }
}

const circulo = new Circulo(5);
console.log("Área:", circulo.area());
console.log("Perímetro:", circulo.perimetro());