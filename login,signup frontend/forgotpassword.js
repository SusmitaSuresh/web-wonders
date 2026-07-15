const form=document.getElementById("forgot");
form.addEventListener("submit",function(event){
    event.preventDefault();
    const email=document.getElementById("email").value;
    document.getElementById("ee").textContent="";
    if(email.trim()===""){
        document.getElementById("ee").textContent="Email is required";
    }
    else{
        document.getElementById("success").textContent ="✔ Password reset link sent successfully! Please check your email.";
        setTimeout(function(){
            window.location.href="login.html";
        },3000);
    }
    document.getElementById("email").addEventListener("input",function(){
         document.getElementById("ee").textContent="";
    });
})