const username = document.getElementById("username"),
password = document.getElementById("password"),
submit = document.getElementById("submit"),
message = document.getElementById("message");

var user = sessionStorage.getItem("username");
var passwd = sessionStorage.getItem("password");
var link = "./cong.html";
flag = false;
function usera(){
if (user == username.value && passwd == password.value){
    message.innerHTML = `<h1>Login successful</h1> <h1> congratulations </h1>
    <h2 align="center" style="padding: 30px; margin:20px">Congratulations on logging into our web page! We are so glad to have you as a member of our community. We hope you enjoy all that our site has to offer.<br>
     We know that you have worked hard to get to this point, and we are proud of you for your dedication. We are excited to see what you will accomplish in the future.<br>
     Thank you for choosing our site. We look forward to working with you!<br>
     Sincerely,<br>
     The Ro706</h2>`;
}
else{
    message.innerHTML = "<h1>Login failed</h1>";
}
if (flag == true){
    window.location.href = link;
}
}
submit.addEventListener("click", usera);