/* No TS, não é possível herdar diretamente da classe string, pois
string (s minúsculo) é um tipo primitivo e não uma classe. Aqui, criamos a classe
Texto que estende String (S maiúsculo). A classe Texto possui o comportamento
disponível na classe String. */
class Texto extends String {
  primeira(): string {
    return this.charAt(0);
  }
  ultima(): string {
    return this.charAt(this.length - 1);
  }
  quantidade(): number{
    return this.length;
  }
  minusculo(): string{
    return this.toLowerCase();
  }
}

const texto: Texto = new Texto('Boa noite');
console.log(`Quantidade: ${texto.quantidade()}`);
console.log(`Primeira: ${texto.primeira()}`);
console.log(`Ultima: ${texto.ultima()}`);
console.log(`Minusculo: ${texto.minusculo()}`);

/*Crie um objeto do tipo Texto fornecendo “Boa noite”, na sequência imprima no
console:
• A quantidade de letras do texto “Boa noite”; ok 
• A primeira letra do texto. Use o método primeira; ok
• A última letra do texto. Use o método ultima; ok
• O texto fornecido em minúsculo.*/