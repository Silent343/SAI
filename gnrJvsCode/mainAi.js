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
let txtTtl = document.querySelector(".ttltTxt")

function activeInputVerify() {
    if (inputChck.checked) {
        iconMoon.classList.remove("fa-moon");
        iconMoon.classList.add("fa-sun");
        sect.classList.add("dark-lttr");
        btnChng.classList.add("dark-Btn");
        document.body.style.backgroundColor = "#dbd2d2cb";
        txtTtl.style.color = "#000";
    }
    else{
        iconMoon.classList.add("fa-moon");
        iconMoon.classList.remove("fa-sun");
        sect.classList.remove("dark-lttr");
        btnChng.classList.remove("dark-Btn");
        document.body.style.backgroundColor = "#021024";
        txtTtl.style.color = "#fff";
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

const container = document.querySelector(".pnlAi")
const btnAddChat = document.querySelector(".incCtn")
const txtChat = document.querySelector(".txtWrite")
const ttlMain = document.querySelector(".iaTitle")

btnAddChat.addEventListener("click", () =>{
    ttlMain.classList.add("invisible")

    const chatGlove = document.createElement("DIV")
    const pGlove = document.createElement("P")
    const imgGlove = document.createElement("IMG");
    const txtShow = document.createTextNode(txtChat.value)
    
    imgGlove.src = img.src;

    pGlove.appendChild(txtShow)
    chatGlove.appendChild(imgGlove)
    chatGlove.appendChild(pGlove)
    chatGlove.classList.add("gloveDec")
    container.appendChild(chatGlove);

    txtChat.value = "";

    const iaGlove = document.createElement("DIV")
    const pIaGlove = document.createElement("P")
    const imgIaGlove = document.createElement("IMG");
    const txtIaShow = document.createTextNode("...")

    imgIaGlove.classList.add(".imgGlovex")
    imgIaGlove.src = "../imgLogo/pixelcut-export.png";
    pIaGlove.classList.add(".txtGlove")

    pIaGlove.appendChild(txtIaShow)
    iaGlove.appendChild(imgIaGlove)
    iaGlove.appendChild(pIaGlove)
    iaGlove.classList.add("gloveDecAi")
    container.appendChild(iaGlove);

})
