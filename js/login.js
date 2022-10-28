function validarLogin() {
    const user = document.getElementById("usernameInput")
    const password = document.getElementById("passwordLogin")

    if (user.value == "") {
        password.value = ""
        const naoPreenchido = alert("Campo usuário não preenchido!")
        return naoPreenchido
    }
    else if (user.value.charAt(0) !== "@") {
        password.value = ""
        const semArroba = alert("O nome de usuário deve ter @ no começo!")
        return semArroba
    }
    else if (password.value == "") {
        user.value = ""
        const faltaSenha = alert("Campo senha não preenchido!")
        return faltaSenha
    }
    else {
        user.value = ""
        password.value = ""
        const concluido = alert("Login efetuado com sucessso!")
        return concluido
    }
}
const test = "saudação"
console.log(test.charAt(0) + test.charAt(2) + test.charAt(7))