//variabli per buttonin Login

let loginButton = document.getElementById("loginbutton");

//variablet per Login Form dhe Register Form

const modalForm = document.getElementById("id01");
const loginForm = document.querySelector("#login-form");
const signUp = document.getElementById("sign-up");
const registerForm = document.getElementById("register");
registerForm.style.display = "none";
const backToLogin = document.getElementById("back-to-login");
const closeSpans = document.getElementsByClassName("close");
const wrapper = document.querySelector(".wrapper");

//variablat per main menun ne versionin mobail
const menuja = document.getElementsByClassName("main")[0];
const butoniMenus = document.getElementsByClassName("icon")[0];
const mobilMenu = document.getElementById("mobilmenu");
const mobileLink = document.querySelectorAll("a.menulink");

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

loginButton.addEventListener("click", () => {
  modalForm.style.display = "block";
  loginForm.style.display = "block";
  registerForm.style.display = "none";
});

//kur te klikojm sign up te shfaqet Register-Form

signUp.addEventListener("click", () => {
  loginForm.style.display = "none";
  registerForm.style.display = "block";
});

//kur te klikojm linkun login te kthehemi te Login Form

backToLogin.addEventListener("click", () => {
  loginForm.style.display = "block";
  registerForm.style.display = "none";
});

//kur te klikojm te span te mbyllet Modal
for (const closeSpan of closeSpans) {
  closeSpan.addEventListener("click", () => (modalForm.style.display = "none"));
}
// for (i = 0; i < 2; i++) {
//   closeSpans[i].addEventListener("click", function () {
//     modalForm.style.display = "none";
//   });
// }
// closeSpans[1].addEventListener("click", function() {
//   modalForm.style.display = "none";
// });

/*kur te klikojm brenda "class = Wrapper" ,
 "id = register" ose divit id = "id01" 
 clas = "modal" te mbyllet  Modali*/

window.addEventListener("click", () => {
  if (
    event.target == wrapper ||
    event.target == registerForm ||
    event.target == modalForm
  ) {
    modalForm.style.display = "none";
  }
});

//fuksioni per hapjen e main menus ne versionin mobile
// menuja.classList.toggle("show");
butoniMenus.addEventListener("click", () => {
  mobilMenu.style.display === "block"
    ? (mobilMenu.style.display = "none")
    : (mobilMenu.style.display = "block");
  closeDropdown();
});

//mobilemenu
function closeDropdown() {
  const dropDown = document.querySelectorAll(".dropdown");
  dropDown.forEach(({ style }) => (style.display = "none"));
  // for (let j = 0; j < dropDown.length; j++); dropDown[j].style.display = "none";
}
mobileLink.forEach((link) => {
  link.addEventListener("click", function () {
    closeDropdown();
    const dropdown = this.nextElementSibling;
    if (dropdown.style.display === "none") {
      dropdown.style.display = "block";
    } else {
      dropdown.style.display = "none";
    }
  });
});

// for (let i = 0; i < mobileLink.length; i++) {
//   mobileLink[i].addEventListener("click", function () {
//     closeDropdown();
//     const dropdown = this.nextElementSibling;
//     if (dropdown.style.display === "none") {
//       dropdown.style.display = "block";
//     } else {
//       dropdown.style.display = "none";
//     }
//   });
// }
