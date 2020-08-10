function iniciar(){
    let res = document.getElementById("res")
    var produto = String(window.prompt("Que produto você está comprando?"))
    var preço = Number(window.prompt(`Quanto custa o ${produto} que você está comprando?`))
    var doaçao = Number(window.prompt(`Qual foi o valor que você deu para pagar ${produto}?`))
    var troco = doaçao - preço

    res.innerHTML = (`Você comprou ${produto} que custou R$ ${preço},00.`)
    res.innerHTML += (`     Deu R$ ${doaçao},00 em dinheiro e vai receber R$ ${troco},00 de troco.`)
    res.innerHTML += "      Volte Sempre!!!"
    
}
