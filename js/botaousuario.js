

function login(event){

    event.preventDefault();
    const email = document.getElementById("email").value;
    const senha = document.getElementById("senha").value;
    const mensagem = document.getElementById("mensagem");

    if(email == "rafael@gmail.com" && senha == "Rafa"){
        mensagem.textContent = "Login realizado com sucesso!";
        location.href = "../index.html";
    } else {
        mensagem.textContent = "Usuário ou senha incorretos.";
    }
}