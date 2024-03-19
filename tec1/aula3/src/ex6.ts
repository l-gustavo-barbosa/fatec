/*Adicionar a classe Subtrair no código do Exercício 5.*/
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

  class Subtrair extends Matematica {
    calcular(): void {
        for (let i = 0; i <= 10; i++) {
            console.log(`${this.nro} - ${i} = ${this.nro - i}`);
          }
    }
  }
  const a: Matematica = new Somar(5);
  a.calcular();
  const b: Matematica = new Multiplicar(5);
  b.calcular();
  const subtrair: Matematica = new Subtrair(5);
  subtrair.calcular();