/* Definindo e invocando funções 
** 
** Autor: Fabrício G. M. de Carvalho
*/

function somar(a: number, b:number){
    let resultado: number = a + b;
    return resultado;
}

console.log(somar(2,3));

export {
    somar
}