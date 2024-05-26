window.addEventListener("scroll", function(){
    var header = document.querySelector("header");
    header.classList.toggle("sticky", window.scrollY > 0)
})

const navMenu = document.querySelector(".first-list")
const backNavBar = document.querySelector(".nav-container")
const navToggle = document.querySelector(".menuToggle")

navToggle.addEventListener("click", () => {
    navMenu.classList.toggle("blockft")
    backNavBar.classList.toggle("bckScroll")
})


let eyeicon = document.getElementById("eyeicon");
let eyeicon2 = document.getElementById("eyeicon2");
let password = document.querySelector(".password");
let password2 = document.querySelector(".Rpassword");

const eyeArr = [eyeicon,eyeicon2]
const passArr = [password,password2]

for (let i = 0; i < eyeArr.length; i++) {
    eyeArr[i].addEventListener("click",()=>{
        if(passArr[i].type == "password"){
            passArr[i].type = "text";
            eyeArr[i].src = "../imgpag/eye-open.png"
        }
        else{
            passArr[i].type = "password";
            eyeArr[i].src = "../imgpag/eye-close.png"
        }
    })
}



/**************************************************/ 