function retornaPositivos(vetor){
    let novoVetor = [];
    vetor.map(elem => (elem>0) && novoVetor.push(elem))
    return novoVetor;
}
const inicial = [13, -3,  3,  0, -1,  6,  1,-42, 23,  0]
console.log(retornaPositivos(inicial))

function retornaPositivosEPares(vetor){
    let novoVetor = [];
    vetor.map(elem =>{
        if(elem > 0 && elem % 2 == 0) novoVetor.push(elem)
    })
    return novoVetor;
  }
  console.log(retornaPositivosEPares(inicial))