function carregar(){
    var nome = window.prompt("Qual é o nome do Funcionário?")
    if(nome.length == 0){
        alert("Digite o nome do Funcionário antes de clicar em ok")
    }else{
        var money = parseInt( prompt(`Qual é o salário de ${nome}?`))
        var porc = parseInt( prompt(`O salário de ${nome} vai ser reajustado em qual porcentagem?`))
        if(money.length == 0 || porc.length == 0){
        alert(`Por favor corrija as informações.`)
        }else{
           var text = document.getElementById("texto")
           var res = document.getElementById("res")
           text.style.fontFamily = "Arial, sans-serif"
           text.style.fontSize = "20pt"
           text.style.fontWeight = "bolder"
           text.innerHTML =`${nome} recebeu um aumento salarial!`
           res.style.fontFamily = "Arial sans-serif"
           res.style.fontSize = "13pt"
            res.innerHTML = `O salário atual era R$ ${money}.<br>`
            var juros = (money * porc)/100
            var moneyfinal = money+juros
            
            res.innerHTML += `Com um aumento de ${porc}%, o salário vai aumentar R$ ${juros} no próximo mês.<br>`
            res.innerHTML += `E a partir dai, ${nome} vai passar a ganhar R$${moneyfinal}.`
        }
    }
}
