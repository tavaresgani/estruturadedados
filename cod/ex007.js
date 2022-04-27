function insereNoInicio(vetor, x){
    let aux = [];
    aux[0] = x;
    for(let i=0; i<vetor.length; i++){
        aux[i+1] = vetor[i];
    }
    return aux;
}
console.log(insereNoInicio([13, -3,  3,  0, -1, 6 ,  1, -42, 23], 80))

function insereNoInicio2(vetor, x){
    let aux = [];
    aux.push(x)
    vetor.map(elem => aux.push(elem))
    return aux;
}

console.log(insereNoInicio2([13, -3,  3,  0, -1, 6 ,  1, -42, 23], 80))
