function sendForm(formName,FormEmail){
    localStorage.setItem("Nome",formName);
    localStorage.setItem("Email",FormEmail);
    document.getElementById("exampleSucess").innerHTML = "Salvamos em seu navegador o seu nome "+localStorage.getItem("Nome")+" e o seu e-mail "+localStorage.getItem("Email")+ " !";
    document.getElementById("exampleSucess").style.display = "block";
}