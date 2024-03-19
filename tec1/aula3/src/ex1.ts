/*Completar o código a seguir para produzir o resultado mostrado ao
lado. O método somar da classe Calcular deverá usar a operação de soma
implementada na superclasse. 

Output esperado: Somar:20
*/

class Operacao {
  somar(a: number, b: number): number {
    return a + b;
  }
}

class Calcular extends Operacao {
    x: number;
    y: number;

  constructor(x: number, y: number) {
    super();
    this.x = x;
    this.y = y;
  }
  somar(): number {
    return super.somar(this.x, this.y);
  }
}
const c = new Calcular(5, 15);
console.log("Somar:", c.somar());