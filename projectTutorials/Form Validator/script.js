let userName = '';
let email = '';
let password = '';
let userExists = false;
let registered = false;
const formContainer = document.getElementById("form-container");
const profileContainer = document.getElementById("profile-container");

const userDatabase = ["John","Jane","Bob","Ashley"];

function formInput(e) {
  e.preventDefault();
  // userName = document.getElementById("username").value;
  // email = document.getElementById("email").value;
  // password = document.getElementById("password").value;
  // Assighn the code values 
  userName = e.target.username.value;
  email = e.target.email.value;
  password = e.target.password.value;

  checkExistingUser(userDatabase);

}

// Checks for existing user 
function checkExistingUser(array){
    for (let i = 0; i < array.length; i++){
          if(userName === array[i]){
                console.log("Usename taken");
                return true;
}
}
formValidate(userName,email,password);
}

// Function validates user 
function formValidate(usernameVar, emailVar,passwordVar){
if( usernameVar && emailVar && passwordVar){
  console.log("registration is successful");
  registered = true;
  renderProfile(registered);
}else{
  console.log("All form fields must be filled out");
}
}
// lenders user profile after register 
function renderProfile(registeredBoolean){
if(registeredBoolean === true){
formContainer.setAttribute("id", "none");
profileContainer.style.visibility = "visible";
}
}
