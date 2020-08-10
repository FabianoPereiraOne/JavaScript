function carregar(){
    var num = document.getElementById("txtnum")
    var dolar = document.getElementById("txtdolar")
    var n = Number(num.value)
    var res = document.getElementById("res")
    if(num.value.length == 0  || dolar.value.length == 0){
        alert("Antes de converter Preencha os dados corretamente!")
    }else{
        res.innerHTML = ""
        res.style.fontFamily = "Arial, sans-serif"
        res.style.color = "green"
        res.style.fontSize = "15pt"
        res.style.padding  = "10px"
        res.innerHTML += `Com ${n} Reais você pode comprar ${parseInt(n / dolar.value)} Dólares`
        num.value = ""
        dolar.value = ""
        dolar.focus()
    }
}
