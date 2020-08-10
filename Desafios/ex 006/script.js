function carregar(){
    var num = document.getElementById("txtnum")
    var n = Number(num.value)
    var text = document.getElementById("texto")
    var res = document.getElementById("res")
    if(num.value.length == 0){
        alert("Antes de converter digite um valor!")
    }else{
        text.style.fontSize = "20pt"
        text.style.fontFamily = "Arial, sans-serif"
        text.innerHTML = `A temperatura de ${num.value}°C, corresponde a...`
        res.style.fontFamily = "Arial, sans-serif"
        res.style.color = "green"
        res.style.fontSize = "15pt"
        res.style.padding  = "10px"
        res.innerHTML = `${n + 273}°K (Kelvin)<br>`
        res.innerHTML += `${1.8 * num.value + 32}°F (Fahrenheit)`
    }
}