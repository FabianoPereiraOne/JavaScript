function carregar(){
    var nome = prompt("Qual é o nome do aluno?")
    var notaone = prompt(`Primeira nota de ${nome}:`)
    var notatwo = prompt(`Segunda nota de ${nome}:`)
 
    if(nome.length == 0 || notaone.length == 0 || notatwo.length == 0){
        alert("[ERRO] Digite todos os valores para saber detalhes sobre o aluno")
    }else{
    var text = document.getElementById("text")
    var res = document.getElementById("res")
    var one = Number(notaone.valueOf())
    var two = Number(notatwo.valueOf())
    var m = (one + two)/2

    //subtitulo
    text.innerHTML = `Analisando a situação de ${nome}`
    text.style.fontSize = "20pt"
    // parte de resultado
    res.innerHTML = `Com as notas ${notaone}, e ${notatwo} a média é de ${m}.<br>`
    
    if(m > 6){
        res.innerHTML += "Com média acima de 6.0, o Aluno está <strong> aprovado </strong> "
    }else if(m > 3 && m  <= 6){
        res.innerHTML += "Com média entre 3.0 e 6.0, o Aluno está em <strong> recuperação </strong>"
    }else{
        res.innerHTML += "Com média abaixo de 3.0, o Aluno está <strong> reprovado </strong>"
    }
    
    
    }
    
}