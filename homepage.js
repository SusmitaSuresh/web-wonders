const loginButton=documentgetElementById("loginButton");
const signUpButton=document.getElementById("signUpButton");

loginButton.addEventListener("click",function () {
    window.location.href="login.html";
});
signUpButton.addEventListener("click",() => {
    window.location.href="signup.html";
});
