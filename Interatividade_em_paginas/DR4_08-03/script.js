document.addEventListener("click", bang);

function bang(){
    document.body.style.backgroundColor = "yellow";
    // document.body.innerHTML = "<h1>BANG!!!</h1>"
    // document.body.innerHTML = "<button id='botao'>Clique aqui</button>"
}

let botaoBacana = document.querySelector("#botao");
botaoBacana.addEventListener("click", showText);

function showText(){
    document.body.classList = "body"
}
