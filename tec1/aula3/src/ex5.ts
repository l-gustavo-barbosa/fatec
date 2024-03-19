/* O relacionamento entre as classes gera um polimorfismo, onde os
objetos das subclasses sobrescrevem o comportamento do método calcular da
superclasse. Completar o código a seguir codificando os construtores das
classes. */

class Matematica {
  nro: number;
  calcular(): void {}

  constructor(nro:number){this.nro = nro};
}

class Multiplicar extends Matematica {
  calcular(): void {
    for (let i = 0; i <= 10; i++) {
      console.log(`${this.nro} * ${i} = ${this.nro * i}`);
    }
  }
}

class Somar extends Matematica {
  calcular(): void {
    for (let i = 0; i <= 10; i++) {
      console.log(`${this.nro} + ${i} = ${this.nro + i}`);
    }
  }
}
const a: Matematica = new Somar(5);
a.calcular();
const b: Matematica = new Multiplicar(5);
b.calcular();

export default Matematica;