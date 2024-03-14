// Desenvolva um programa recursivo para calcular o menor elemento presente em um array não ordenado
//Incluir modelo/view

    function menor_a(array: number[]): number{
        if(array.length == 1){
            return array[0]
        } else {
            const menor_restante: number = menor_a(array.slice(1, array.length));
            if(array[0] <= menor_restante){
                return array[0];
            } else{
                return menor_restante;
            }
        }
    }

let array: number[] = [5,-1,3];
console.log(menor_a(array));