function carregar(){
    var perg = prompt("Qual é o ano?").valueOf()

    var text = document.getElementById("text")
    var res = document.getElementById("res")
    var sn = document.getElementById("txtsn")

    //subtitulo
    text.innerHTML = `Verificando o ano de ${perg}...`
    text.style.fontFamily = "Arial, sans-serif"
    text.style.fontSize = "20pt"
    text.style.color = "#505050"
    // parte de resultado
    res.innerHTML = `O ano de ${perg} `
    res.style.fontFamily = "Arial, sans-serif"
    res.style.fontSize = "15pt"
    res.style.color = "#606060"

    if(perg % 4 == 0){
        sn.innerHTML = "É BISSEXTO"
        sn.style.backgroundColor = "green"
        sn.style.width = "150px"
        sn.style.padding = "5px"
        sn.style.textAlign = "center"
        sn.style.margin = "auto"
        //config font
        sn.style.fontFamily = "Arial, sans-serif"
        sn.style.fontSize = "15pt"
        sn.style.color = "white"
        sn.innerHTML += `\u2705`
    }else{
        sn.innerHTML =" NÃO É BISSEXTO"
        sn.style.backgroundColor = "red"
        sn.style.width = "200px"
        sn.style.padding = "5px"
        sn.style.textAlign = "center"
        sn.style.margin = "auto"
        //config font
        sn.style.fontFamily = "Arial, sans-serif"
        sn.style.fontSize = "15pt"
        sn.style.color = "white"
        sn.innerHTML += `\u274c`
    }
    
}