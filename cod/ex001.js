function intersecao(r,s){
    let x = [];

    for(let i = 0; i < r.length; i++){
        for(let j = 0; j < s.length; j++){
            if(r[i]===s[j]){
                x.push(r[i])
            }
        }
    }
    return x;
}
//console.log(intersecao([21,12,1,3,7], [13,31,3,21,14,6,1,42,23,32]))

function uniao(r,s){
    let x = [];
    r.map(elem => x.push(elem))
    s.map(elem =>{
        if(!x.includes(elem)){
            x.push(elem)
        }
    })
    return x
}
console.log(uniao([1,3,5,7],[2,3,6,7])) 