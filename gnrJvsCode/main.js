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
let password = document.getElementById("password");

eyeicon.onclick = function(){
    if(password.type == "password"){
        password.type = "text";
        eyeicon.src = "../imgpag/eye-open.png"
    }
    else{
        password.type = "password";
        eyeicon.src = "../imgpag/eye-close.png"
    }
}



/**************************************************/ 
