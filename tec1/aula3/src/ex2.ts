/*Codificar as classes representadas no diagrama    
UML de classes. Codificar em cada método as seguintes
instruções:
No corpo do método um:
console.log("um");
No corpo do método dois. Incluir também a chamada do
método um:
console.log("dois");
No corpo do método tres. Incluir também a chamada do
método dois:
console.log("três");
Utilize o objeto a seguir para testar o código e produzir o
resultado mostrado ao lado.
const z = new Z();
z.tres();

Output esperado:
um
dois
tres
*/

class X {
    nome: string;

    constructor(nome:string){
        this.nome = nome;
    }

    imprimir():void{
        console.log(this.nome);
    }
}

class Y extends X{

}

class Z extends Y{

}

let um: X = new X("Um");
let dois: Y = new Y("Dois");
let tres: Z = new Z("Tres");

um.imprimir();
dois.imprimir();
tres.imprimir();