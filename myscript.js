/*variabli per videon

let bgVideo = document.getElementsByTagName("video")[0];
    bgVideo = document.getElementsByTagName("video")[0];
*/

//variabli per buttonin Login

let loginButton = document.getElementById("loginbutton");

//variablet per Login Form dhe Register Form 

let modalForm = document.getElementById("id01");
let loginForm = document.getElementById("login-form");
let signUp = document.getElementById("sign-up");
let registerForm = document.getElementById("register");
    registerForm.style.display = "none";
let backToLogin = document.getElementById("back-to-login");
const span = document.getElementsByClassName("close")[0];
const spanRegister = document.getElementsByClassName("close")[1];
let wrapper = document.getElementsByClassName("wrapper")[0];


/*kur te ngarkohet windowsi videjoa te bej autoply ne vazhdimsi

window.addEventListener("load",function() {
  bgVideo.setAttribute("autoplay", "true");
  bgVideo.setAttribute("loop", "true");
  });
*/

//kur te klikojm butonin login te shfaqet login-form

loginButton.addEventListener("click",function() {
  modalForm.style.display = "block";
  loginForm.style.display = "block";
  registerForm.style.display = "none";
  });

//kur te klikojm sign up te shfaqet Register-Form

signUp.addEventListener("click",function() {
  loginForm.style.display = "none";
  registerForm.style.display = "block";
});

//kur te klikojm linkun login te kthehemi te Login Form

backToLogin.addEventListener("click",function() {
  loginForm.style.display = "block";
  registerForm.style.display = "none";
  });

//kur te klikojm te span te mbyllet Modal

span.addEventListener("click",function() {
  modalForm.style.display = "none";
  });

spanRegister.addEventListener("click",function() {
  modalForm.style.display = "none";
  });

/*kur te klikojm brenda "class = Wrapper" ,
 "id = register" ose divit id = "id01" 
 clas = "modal" te mbyllet  Modali*/

window.addEventListener("click",function() {
  
    if (event.target == wrapper ||
    event.target == registerForm ||
    event.target == modalForm) {
    modalForm.style.display = "none";
      }
    });