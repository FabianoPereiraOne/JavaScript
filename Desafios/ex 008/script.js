function carregar(){
    var product = window.prompt("Qual produto você está comprando?")
    if(product.length == 0){
        alert("Coloque o produto antes de clicar em ok")
    }else{
        var money = prompt(`Qual é o preço de ${product}?`)
        if(money.length == 0){
        alert(`Por favor Digite o preço de ${product}.`)
        }else{
           var text = document.getElementById("texto")
           var res = document.getElementById("res")
           text.style.fontFamily = "Arial, sans-serif"
           text.style.fontSize = "20pt"
           text.style.fontWeight = "bolder"
           text.innerHTML =`Calculando desconto de 10% para ${product}`
           res.style.fontFamily = "Arial sans-serif"
           res.style.fontSize = "13pt"
            res.innerHTML = `O preço original era R$ ${money}.<br>`
            var desc = Math.round(money * 10) / 100
            var cashfinal = money - desc
            res.innerHTML += `Você acaba de ganhar R$ ${desc} de desconto (-10%).<br>`
            res.innerHTML += `No fim, você vai pagar R$ ${cashfinal} no produto ${product}.`
        }
    }
}
