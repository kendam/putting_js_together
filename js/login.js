import { validatePassword } from "./validation.js";

const form = document.getElementById("loginForm");
form.addEventListener("submit",function(event){
    event.preventDefault();
    const passwordField = form.elements["password"];
    if(validatePassword(passwordField)){
        window.location='dashboard.html';

    }

})
