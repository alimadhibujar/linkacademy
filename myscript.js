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

//variablat per main menun ne versionin mobail
// const menuja = document.getElementsByClassName("main")[0];
const butoniMenus = document.getElementsByClassName("icon")[0];
var mobilMenu = document.getElementById("mobilmenu");
var mobileLink = document.getElementsByClassName("menulink");
//Variablat per Drop menun ne versioni mobile
// const htmlButton = menuja.children[0].children[0];
// const cssButton = menuja.children[01].children[0];
// const jsButton = menuja.children[02].children[0];
// const sqlButton = menuja.children[03].children[0];
// const phpButton = menuja.children[04].children[0];
// const pythonButton = menuja.children[05].children[0];
// const dropMenu1 = document.getElementsByClassName("drop menu1")[0];
// dropMenu1.style.display = "block";
// const dropMenu2 = document.getElementsByClassName("drop menu2")[0];
// dropMenu2.style.display = "block";
// const dropMenu3 = document.getElementsByClassName("drop menu3")[0];
// dropMenu3.style.display = "block";
// const dropMenu4 = document.getElementsByClassName("drop menu4")[0];
// dropMenu4.style.display = "block";
// const dropMenu5 = document.getElementsByClassName("drop menu5")[0];
// dropMenu5.style.display = "block";
// const dropMenu6 = document.getElementsByClassName("drop menu6")[0];
// dropMenu6.style.display = "block";
// const drMenu = dropMenu1.children;
// console.log(htmlButton);
/*kur te ngarkohet windowsi videjoa te bej autoply ne vazhdimsi

window.addEventListener("load",function() {
  bgVideo.setAttribute("autoplay", "true");
  bgVideo.setAttribute("loop", "true");
  });
*/

//kur te klikojm butonin login te shfaqet login-form

loginButton.addEventListener("click", function() {
  modalForm.style.display = "block";
  loginForm.style.display = "block";
  registerForm.style.display = "none";
});

//kur te klikojm sign up te shfaqet Register-Form

signUp.addEventListener("click", function() {
  loginForm.style.display = "none";
  registerForm.style.display = "block";
});

//kur te klikojm linkun login te kthehemi te Login Form

backToLogin.addEventListener("click", function() {
  loginForm.style.display = "block";
  registerForm.style.display = "none";
});

//kur te klikojm te span te mbyllet Modal

span.addEventListener("click", function() {
  modalForm.style.display = "none";
});

spanRegister.addEventListener("click", function() {
  modalForm.style.display = "none";
});

/*kur te klikojm brenda "class = Wrapper" ,
 "id = register" ose divit id = "id01" 
 clas = "modal" te mbyllet  Modali*/

window.addEventListener("click", function() {
  if (
    event.target == wrapper ||
    event.target == registerForm ||
    event.target == modalForm
  ) {
    modalForm.style.display = "none";
  }
  //  else if (event.target !== mobileLink && mobilMenu.style.display.match("block")) {
  //   mobilMenu.style.display = "none";
  // }
});

//fuksioni per hapjen e menus ne versionin mobail
butoniMenus.addEventListener("click", function() {
  if (mobilMenu.style.display === "block") {
    mobilMenu.style.display = "none";
  } else {
    mobilMenu.style.display = "block";
  }
});

//mobilemenu

var i;
for (i = 0; i < mobileLink.length; i++) {
  mobileLink[i].addEventListener("click", function() {
    // this.classList.toggle("show");
    var dropdown = this.nextElementSibling;
    if (dropdown.style.display === "block") {
      dropdown.style.display = "none";
    } else {
      dropdown.style.display = "block";
    }
  });
}
// e pa perfunduar!
// var i;
// for (i = 0; i < drMenu.length; i++) {
// htmlButton.addEventListener("click", function() {
//   //     this.classList.toggle("active");
//   //     var dropcontent = this.nextElementSibling;
//   if (window.innerWidth < 500 && dropMenu1.style.display === "none") {
//     dropMenu1.style.display = "block";
//   } else {
//     dropMenu1.style.display = "none";
//   }
// });
// }
// cssButton.addEventListener("click", function() {
//   if (window.innerWidth < 500 && dropMenu2.style.display === "none") {
//     dropMenu2.style.display = "block";
//   } else {
//     dropMenu2.style.display = "none";
//   }
// });
// jsButton.addEventListener("click", function() {
//   if (window.innerWidth < 500 && dropMenu3.style.display === "none") {
//     dropMenu3.style.display = "block";
//   } else {
//     dropMenu3.style.display = "none";
//   }
// });
// sqlButton.addEventListener("click", function() {
//   if (window.innerWidth < 500 && dropMenu4.style.display === "none") {
//     dropMenu4.style.display = "block";
//   } else {
//     dropMenu4.style.display = "none";
//   }
// });
// phpButton.addEventListener("click", function() {
//   if (window.innerWidth < 500 && dropMenu5.style.display === "none") {
//     dropMenu5.style.display = "block";
//   } else {
//     dropMenu5.style.display = "none";
//   }
// });
// pythonButton.addEventListener("click", function() {
//   if (window.innerWidth < 500 && dropMenu6.style.display === "none") {
//     dropMenu6.style.display = "block";
//   } else {
//     dropMenu6.style.display = "none";
//   }
// });
