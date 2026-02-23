function validateForm() {

    const telefone = document.getElementById("telefone").value;
    const email = document.getElementById("email").value;
    const senha = document.getElementById("senha").value;

    if (telefone === "" || email === "" || senha === "") {
        alert("Todos os campos são obrigatórios!");
        return false;
    }

    const fonePatern = /^\(\d{2}\) (?:[2-8]|9\d{1})\d{3}-\d{4}$/;
    if (!fonePatern.test(telefone)) {
        alert("Por favor insira um telefone válido");
        return false;
    }

    const emailPatern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailPatern.test(email)) {
        alert("Por favor insira um email válido");
        return false;
    }

    const senhaPatern = /^(?=(?:.*?[A-Z]){0})(?=(?:.*?[0-9]){1})(?=(?:.*?[!@#$%*()_+^&}{:;?.]){0})(?!.*\s)[0-9a-zA-Z!@#$%;*(){}_+^&]*$/;
    if (!senhaPatern.test(senha)) {
        alert("Por favor insira uma senha válida. \nA senha deve ter pelo menos um caractere maiúsculo e 1 número.");
        return false;
    }
    
    return true;

}

document.getElementById("contactForm").addEventListener("submit", function(event){
    event.preventDefault();
    if(validateForm())
    {
        alert("Formulário validado.");
    }
    /* Limpa os campos*/
    telefone.value = "";
    email.value = "";
    senha.value = "";
})

document.getElementById("telefone").addEventListener("input", function(e) {

    let valor = e.target.value.replace(/\D/g, ""); // remove tudo que não é número

    valor = valor.substring(0, 11);

    if (valor.length > 10) {
        valor = valor.replace(/^(\d{2})(\d{5})(\d{4})$/, "($1) $2-$3");
    } else if (valor.length > 6) {
        valor = valor.replace(/^(\d{2})(\d{4,5})(\d{0,4})$/, "($1) $2-$3");
    } else if (valor.length > 2) {
        valor = valor.replace(/^(\d{2})(\d{0,5})$/, "($1) $2");
    } else if (valor.length > 0) {
        valor = valor.replace(/^(\d*)$/, "($1");
    }

    e.target.value = valor;
});
