import { validatePassword, showError } from "./validation.js";
import { setData,getData } from "./constants.js";
const form = document.getElementById("signupForm");

form.addEventListener("submit",function(event){
    event.preventDefault();
    const emailField = form.elements["email"];
    const passwordField = form.elements["password"];
    const cpasswordField = form.elements["cpassword"];
    

    // compare cpassword with password
    if(passwordField.value !== cpasswordField.value){
        showError(cpasswordField,"Password mismatch");
        
    }

    // validate strength
    if(validatePassword(passwordField)){
        // save the record
        if(confirmUnique(emailField.value)){
            register(passwordField, emailField);
    
        }
        alert("User exists");
       

    }
    // confirm uniqueness

    



    
})

function register(passwordField, emailField){

    const firstNameField = form.elements["firstName"];
    const lastNameField = form.elements["lastName"];
   

    const regData = {
        'firstName' :  firstNameField.value,
        'lastName'  :  lastNameField.value,
        'email'     :  emailField.value,
        'password'  :  passwordField.value
    }
    // get existing users
    let users = getData('users');

    // set value 
    let existingUsers = users == undefined ? [] : JSON.parse(users);
    
    // 
    existingUsers.push(regData);
    setData('users', JSON.stringify(existingUsers))

    alert('Registration successful, redirectin in 2 secs')
    setTimeout(() => {
        window.location = "index.html"
    }, 1000);

}

function confirmUnique(email){
    let users = getData('users');
    let existingUsers = users == undefined ? [] : JSON.parse(users);
    let found = existingUsers.find(user=>user.email==email);
    if(found == undefined){
        return true
    }
    return false;

    
}
