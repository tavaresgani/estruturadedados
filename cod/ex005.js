function permuta(x,y){
    let novoVetor = [];
    for(var i=0; i<x.length; i++){
        novoVetor.push(x[i])
        novoVetor.push(y[i])
    }
    return novoVetor;
}
const vetx = [11, 5, 10, 8, 23, 12, 91, 21, 7, 9]
const vety = [22, 34, 33, 53, 52, 41, 13, 14, 27, 81]
console.log(permuta(vetx, vety))