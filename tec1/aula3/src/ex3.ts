/* Completar o código dos métodos incrementar para o resultado dar
6 ao chamar o método incrementar do objeto que está na variável teste. 

Output experado: Nro : 6 */

class Um {
  nro: number = 0;
  incrementar(): void {
    this.nro++;
  }
}
class Dois extends Um {
  incrementar(): void {
    super.incrementar();
    this.nro += 2;
  }
}
class Tres extends Dois {
  incrementar(): void {
    super.incrementar();
    this.nro += 3;
  }
}
const teste = new Tres();
teste.incrementar();
console.log("Nro:", teste.nro);