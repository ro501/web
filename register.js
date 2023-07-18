const username = document.getElementById("username"),
    password = document.getElementById("password"),
    submit = document.getElementById("submit");

function reg(){
    sessionStorage.setItem("username", username.value);
    sessionStorage.setItem("password", password.value);
}
submit.addEventListener("click", reg);