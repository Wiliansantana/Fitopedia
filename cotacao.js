function getCotacao() {
    fetch("https://apifito.herokuapp.com/api/v1/cotacao")
        .then((resp) => resp.json()) 
        .then(function (data) {
            console.log(data)
            document.getElementById("soja").innerText = data.soja 
            document.getElementById("milho").innerText = data.milho 
            document.getElementById("cafe").innerText = data.cafe 
            document.getElementById("dolar").innerText = data.dolar 
        })
}

getCotacao()