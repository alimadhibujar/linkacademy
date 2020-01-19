/*variabli per videon

let bgVideo = document.getElementsByTagName("video")[0];
*/

//variabli per buttonin Login

let loginButton = document.getElementById("loginbutton");

//variablet per Login Form dhe Register Form

let modalForm = document.getElementById("id01");
let loginForm = document.querySelector("#login-form");
let signUp = document.getElementById("sign-up");
let registerForm = document.getElementById("register");
registerForm.style.display = "none";
let backToLogin = document.getElementById("back-to-login");
const span = document.getElementsByClassName("close");
let wrapper = document.querySelector(".wrapper");

//variablat per main menun ne versionin mobail
// const menuja = document.getElementsByClassName("main")[0];
const butoniMenus = document.getElementsByClassName("icon")[0];
var mobilMenu = document.getElementById("mobilmenu");
var mobileLink = document.querySelectorAll("a.menulink");
//Variablat per Drop menun ne versioni mobile
// const htmlButton = menuja.children[0].children[0];
// const cssButton = menuja.children[1].children[0];
// const jsButton = menuja.children[2].children[0];
// const sqlButton = menuja.children[3].children[0];
// const phpButton = menuja.children[4].children[0];
// const pythonButton = menuja.children[5].children[0];
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

span[0].addEventListener("click", function() {
  modalForm.style.display = "none";
});

span[1].addEventListener("click", function() {
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
  } // else if (
  //   event.target != butoniMenus ||
  //   (event.target == mobileLink && mobilMenu.style.display === "none")
  // ) {
  //   mobilMenu.style.display = "none";
  // } //  else {
  //   mobilMenu.style.display = "block";
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
