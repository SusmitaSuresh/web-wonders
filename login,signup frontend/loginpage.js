const form=document.getElementById("loginform");
form.addEventListener("submit",function(event){
event.preventDefault();
const username=document.getElementById("username").value;
const password=document.getElementById("password").value;
document.getElementById("ue").textContent = "";
document.getElementById("pe").textContent = "";
if(username.trim() ===""){
document.getElementById("ue").textContent="Username is required."; 
}
if(password===""){
document.getElementById("pe").textContent="password is required.";}
});
document.getElementById("username").addEventListener("input",function(){
document.getElementById("ue").textContent="";});
document.getElementById("password").addEventListener("input",function(){
document.getElementById("pe").textContent="";
});