const gabarito = [4, 12, 34, 25, 17]
const aposta = [3, 17, 55, 21, 34, 4, 27, 29, 20, 11]

function loteria3(gabarito, aposta){
    let pontos = 0;
    gabarito.map(elemGabarito =>
    aposta.map(elemAposta => (elemAposta === elemGabarito) && pontos++
    ))
    return pontos;
}
console.log("O número de pontos acertados é: ", loteria3(gabarito, aposta))