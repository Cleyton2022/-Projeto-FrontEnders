
function redefSenha() {
    const email = document.getElementById("email")
    const feedback = document.getElementById("feedbackRedef")
    
    
    if (email.value == "") {
        const falhaMsg = feedback.innerHTML = `<center>Precisamos do seu email para recuperar sua conta!</center>`
        return falhaMsg
    }
    else  {
        const validadoMsg = feedback.innerHTML = `<center>Enviamos um email para você com um link para redefinir sua senha. Caso não tenha recebido, verifique se você digitou seu email corretamente</center>`
        return validadoMsg
    }
}