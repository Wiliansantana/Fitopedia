function getCotacao() {
    fetch("http://localhost:8080/api/v1/cotacao")
        .then((resp) => resp.json()) 
        .then(function (data) {
            console.log(data)
            document.getElementById("soja").innerText = data.soja 
            document.getElementById("milho").innerText = data.milho 
            document.getElementById("cafe").innerText = data.cafe 
        })
}

getCotacao()