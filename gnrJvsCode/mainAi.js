let usrName = document.querySelector(".usr-Name")
let img = document.getElementById("imgPerfil3")

window.addEventListener("DOMContentLoaded", () => {
    const savedNickName = localStorage.getItem("nickname");
    const savedImgProfile = localStorage.getItem("general-img")
    if(savedNickName){
        usrName.textContent = savedNickName;
    }
    if(savedImgProfile){
        img.src = savedImgProfile;
        img.style.backgroundColor = "#ebecf0a2";
        img.style.boxShadow = "inset 0 0 0 1px rgba(57,76,96,.15)"
    }
})

const iconMoon = document.querySelector(".icnBck")
let inputChck = document.querySelector(".Mcheckbox")
let sect = document.querySelector(".sct")
let btnChng = document.querySelector(".btnAdd")

function activeInputVerify() {
    if (inputChck.checked) {
        iconMoon.classList.remove("fa-moon");
        iconMoon.classList.add("fa-sun");
        sect.classList.add("dark-lttr");
        btnChng.classList.add("dark-Btn");
        document.body.style.backgroundColor = "#dbd2d2cb";
    }
    else{
        iconMoon.classList.add("fa-moon");
        iconMoon.classList.remove("fa-sun");
        sect.classList.remove("dark-lttr");
        btnChng.classList.remove("dark-Btn");
        document.body.style.backgroundColor = "#021024";
    }
}

const bringArrow = document.querySelector(".bringArrowSec")
const backArrow = document.querySelector(".backArrow")
const hideSect = document.querySelector(".sct")

bringArrow.addEventListener("click", () =>{
    hideSect.classList.toggle("backSect")
})

backArrow.addEventListener("click", () =>{
    hideSect.classList.toggle("backSect")
})