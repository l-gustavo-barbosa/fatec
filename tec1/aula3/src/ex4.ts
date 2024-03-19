/* Utilizando a sobrecarga de construtores.
Complete o código a seguir adicionando assinaturas de
construtores para atender as instanciações marcadas em
amarelo. 
Observação: só é permitido adicionar construtores na
classe Carro.

Output esperado: 

Carro {marca: "VW", modelo: "Gol", ano: 2010}
Carro {marca: "fiat", modelo: "Uno"}
Carro {}*/

class Carro {
marca?: string;
modelo?: string;
ano?: number;

constructor(marca?: string, modelo?:string, ano?:number){
    if(marca != null) this.marca = marca;
    if(modelo != null) this.modelo = modelo;
    if(ano != null) this.ano = ano;
}
print(): void {
console.log(this);
}
}
const g = new Carro("VW","Gol",2010);
g.print();
const f = new Carro("Fiat", "Uno");
f.print();
const v = new Carro();
v.print();