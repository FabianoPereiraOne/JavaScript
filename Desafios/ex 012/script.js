function carregar(){
    var nome = prompt("Qual é o nome do produto?")
    var anterior = prompt(`Qual era o preço anterior de ${nome}`).valueOf()
    var atual = prompt(`Qual é o preço atual de ${nome}`).valueOf()
    if(nome.length == 0 || anterior.length == 0 || atual.length == 0){
        alert("[ERRO] Digite todos os valores para saber detalhes do preço")
    }else{
    var text = document.getElementById("text")
    var res = document.getElementById("res")
    var sn = document.getElementById("txtsn")

    //subtitulo
    text.innerHTML = `Analisando valores informados`
    text.style.fontFamily = "Arial, sans-serif"
    text.style.fontSize = "20pt"
    text.style.color = "#505050"
    // parte de resultado
    res.style.fontFamily = "Arial, sans-serif"
    res.style.fontSize = "15pt"
    res.style.color = "#606060"
    res.style.marginBottom = "5px"
    res.style.textAlign ="left"
    res.innerHTML = `O ${nome} custava R$ ${anterior},00 e agora custa R$ ${atual},00.<br>`
    

    if(anterior < atual){
        res.innerHTML += "Hoje o produto está mais caro.<br>"
        let sub = atual - anterior
        res.innerHTML += `O preço subiu R$ ${sub} em relação ao preço anterior.<br>`
        let perc= (sub * 100)/anterior
        res.innerHTML += `Uma variação de ${perc}% pra cima`
    }else{
        res.innerHTML += "Hoje o produto está mais barato.<br>"
        let sub = anterior - atual
        res.innerHTML += `O preço caiu R$ ${sub} em relação ao preço anterior.<br>`
        let perc= (sub * 100)/anterior
        res.innerHTML += `Uma variação de ${perc}% pra baixo`
    }
    
    }
    
}