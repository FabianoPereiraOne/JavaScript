function carregar(){
    var num = document.getElementById("txtnum")
    var text = document.getElementById("texto")
    var res = document.getElementById("res")
    if(num.value.length == 0){
        alert("Antes de converter digite um valor!")
    }else{
        text.style.fontSize = "20pt"
        text.style.fontFamily = "Arial, sans-serif"
        text.innerHTML = `A distância de ${num.value} metros, corresponde a...`

        var km = num.value / 1000
        var hec = num.value / 100
        var dec = num.value / 10
        var deci = num.value * 10
        var cent = num.value * 100
        var mili = num.value * 1000
        res.style.fontFamily = "Arial, sans-serif"
        res.style.fontSize = "15pt"
        res.style.padding = "5px"
        res.style.marginBottom = "10px"
        res.innerHTML = `${km} quilômetros(Km) <br>`
        res.innerHTML += `${hec} hectômetros(Hm)<br>`
        res.innerHTML += `${dec} decâmetros(Dam)<br>`
        res.innerHTML += `${deci} decimetros(dm)<br>`
        res.innerHTML += `${cent} centímetros(cm)<br>`
        res.innerHTML += `${mili} milímetros(mm)`
    }
}