const form=document.getElementById("signup");
form.addEventListener("submit",function(event){
event.preventDefault();
const fullname =document.getElementById("fullname").value;
const email = document.getElementById("email").value;
const username = document.getElementById("username").value;
const password = document.getElementById("password").value;
const confirmpassword = document.getElementById("confirmpassword").value;
document.getElementById("fe").textContent="";
document.getElementById("ee").textContent="";
document.getElementById("ue").textContent="";
document.getElementById("pe").textContent="";
document.getElementById("cpe").textContent="";
if(fullname.trim()===""){
document.getElementById("fe").textContent="Full name is required.";
}
if(email.trim() === ""){
document.getElementById("ee").textContent = "Email is required.";
}
if(username.trim() === ""){
document.getElementById("ue").textContent = "Username is required.";
}
if(password.trim() === ""){
document.getElementById("pe").textContent = "Password is required.";
}
if(confirmpassword.trim() === ""){
document.getElementById("cpe").textContent = "Confirm Password is required.";
}
else if(password !== confirmpassword){
document.getElementById("cpe").textContent = "Passwords do not match.";
}
});
document.getElementById("fullname").addEventListener("input", function(){
document.getElementById("fe").textContent = "";
});

document.getElementById("email").addEventListener("input", function(){
document.getElementById("ee").textContent = "";
});

document.getElementById("username").addEventListener("input", function(){
document.getElementById("ue").textContent = "";
});

document.getElementById("password").addEventListener("input", function(){
    document.getElementById("pe").textContent = "";
});

document.getElementById("confirmpassword").addEventListener("input", function(){
    document.getElementById("cpe").textContent = "";
});
