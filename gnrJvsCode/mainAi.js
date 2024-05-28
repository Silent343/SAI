let usrName = document.querySelector(".usr-Name")
let img = document.getElementById("imgPerfil3")

window.addEventListener("DOMContentLoaded", () => {
    const savedNickName = localStorage.getItem("nickname");
    const savedName = localStorage.getItem("nameUsr");
    const savedImgProfile = localStorage.getItem("general-img")

    let validNickName = "";

    if(savedNickName){
        usrName.textContent = savedNickName;
        validNickName = savedNickName;
    }

    if(validNickName == "" && savedName){
        usrName.textContent = savedName;
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
    const txtTr = txtChat.value;

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

    const iaGlove = document.createElement("DIV")
    const pIaGlove = document.createElement("P")
    const imgIaGlove = document.createElement("IMG");

    let answr = "...";

    if (txtTr.includes("ola")) {
        answr = "Hola, en que podría ayudarte ?"
    }
    else if (txtTr.includes("Cuál es tu nombre") || txtTr.includes("Cómo te llamas")) {
        answr = "Me llamo SAI, soy una IA que t ayudará a ver las diversas enfermedades que te pueden asechar"
    }
    else if((txtTr.includes("preguntar") || txtTr.includes("preguntarte") || txtTr.includes("pregunta")) && txtTr.includes("puedo")){
        answr = "Sí claro, en que puedo ayudarte ?"
    }

    const txtIaShow = document.createTextNode(answr)

    imgIaGlove.classList.add(".imgGlovex")
    imgIaGlove.src = "../imgLogo/pixelcut-export.png";
    pIaGlove.classList.add(".txtGlove")

    pIaGlove.appendChild(txtIaShow)
    iaGlove.appendChild(imgIaGlove)
    iaGlove.appendChild(pIaGlove)
    iaGlove.classList.add("gloveDecAi")
    container.appendChild(iaGlove);

    txtChat.value = "";
})
