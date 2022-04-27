function calculaMedia(n){
    let vetMedia = [];
    n.map(elem => elem >=6 && vetMedia.push(elem))

    let media = 0;
    vetMedia.map(elem => media = media + elem)
    media = media/vetMedia.length

    let p = [];
    n.map((elem, index) => {
        if(media <= elem){
            p.push(index)
        }
    })
    console.log(media)
    console.log(p)
}
calculaMedia([8.5, 5, 10, 8, 3.5, 7, 9, 4, 2, 9,])