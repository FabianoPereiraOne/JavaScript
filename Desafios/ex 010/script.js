function carregar(){
    var a = window.prompt("Qual é o valor de A?")
    var b = window.prompt("Qual é o valor de B?")
    var c = window.prompt("Qual é o valor de C?")
    if(a.length == 0 || b.length == 0 || c.length == 0){
        alert("Preencha todos os valores antes de aperta em OK")
    }else{
            //seletores
           var text = document.getElementById("texto")
           var res = document.getElementById("res")
            var delta = (b ** 2) - (4 * a * c)
           //Estilo
           text.style.fontFamily = "Arial, sans-serif"
           text.style.fontSize = "20pt"
           text.style.fontWeight = "bolder"
           text.innerHTML = "Resolvendo Baskara"
           res.style.fontFamily = "Arial, sans-serif"
           res.style.fontSize = "13pt"
            res.innerHTML = `A equação atual é de ${a}x² + ${b}x + ${c} = 0.<br><br>`
            res.innerHTML += `O cálculo realizado será  <strong>△</strong> = ${b}² - 4 . ${a} . ${c}<br><br>`
            res.innerHTML += `O valor calculado foi <strong>△</strong> = ${delta}<br><br>`

            if(delta > 0){
                res.innerHTML += "------------------------------------- <br>"
                res.innerHTML += "Exite duas raizes possiveis.<br>"
                res.innerHTML += "-------------------------------------"
            }
            if(delta == 0){
                res.innerHTML += "---------------------------------- <br>"
                res.innerHTML += "Exite uma raiz possivel. <br>"
                res.innerHTML += "----------------------------------"
            }
            if(delta < 0){
                res.innerHTML += "---------------------------- <br>"
                res.innerHTML += "Não possui raizes. <br>"
                res.innerHTML += "----------------------------"
            }
        }
    }
