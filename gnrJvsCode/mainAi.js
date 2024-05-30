let usrName = document.querySelector(".usr-Name")
let img = document.getElementById("imgPerfil3")

let arrPnl = new Array()
let arrHst  = new Array()

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




const sectPnl = "section"
let interNum = 0


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
    else if(txtTr.includes("eres?")){
        answr = "Soy una inteligencia artificial, creada con el fin de ayudar a las personas en su salud"
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

    iaGlove.classList.add(sectPnl + interNum.toString())
    chatGlove.classList.add(sectPnl + interNum.toString())

    arrPnl.push(chatGlove)
    arrPnl.push(iaGlove)

    txtChat.value = "";
})





let dateAct = "";

function getHour(){
    let arrDate = new Array()
    const now = new Date()
    dateAct = now.toLocaleTimeString()

    for (let i = 0; i < dateAct.length; i++) {
        if (i < dateAct.length - 3) {
            arrDate.push(dateAct.charAt(i))
        }
    }

    dateAct = "";
    
    for (let i = 0; i < arrDate.length; i++) {
        dateAct += arrDate[i];
    }

    for (let i = 0; i <= 24; i++) {
        let mmt = dateAct.startsWith(i);
        if (mmt >= 0 && mmt <= 11) {
            dateAct += " a.m."
            break;
        }
        else{
            dateAct += " p.m."
            break;
        }
    }
    setTimeout(getHour,1000)
}


const firtsArrELe = document.querySelector(".txt_Bx")

const txtHstBx = document.querySelector(".txt_Bx-ctn")
let nro = 1

if(arrHst.length == 0)
    arrHst.push(firtsArrELe)

btnChng.addEventListener("click", () =>{

    const newTxtBx = document.createElement("DIV")
    const txtTtl = document.createElement("P")
    const timeTk = document.createElement("P")

    newTxtBx.classList.add("txt_Bx")
    txtTtl.classList.add("txtTitle")
    timeTk.classList.add("timeTask")

    let txtOne = document.createTextNode("newTopic")

    getHour()

    let txtTwo = document.createTextNode(dateAct)

    let mrgTp = nro*20

    txtTtl.appendChild(txtOne)
    timeTk.appendChild(txtTwo)
    newTxtBx.appendChild(txtTtl)
    newTxtBx.appendChild(timeTk)
    newTxtBx.style.marginTop = mrgTp.toString() + "%";
    txtHstBx.appendChild(newTxtBx)

    newTxtBx.classList.add(sectPnl + (interNum + 1).toString())
    arrHst.push(newTxtBx)

    deletePnlAct()

    if (ttlMain.classList.contains("invisible")) 
        ttlMain.classList.toggle("invisible")
        
    nro++;
    interNum++;
})

//str1.padEnd(25, '.')

function deletePnlAct(){
    for (let i = 0; i < arrPnl.length; i++) {
        if (!arrPnl[i].classList.contains("invisible")) {
            arrPnl[i].classList.toggle("invisible")
        }
    }
}

function clickHst() {
    for (let i = 0; i < nro; i++) {
        arrHst[i].addEventListener("click",()=>{ 
            ttlMain.classList.remove("invisible")

            const elementOne = arrHst[i];
            arrHst[i].classList.add("seen")
            
            for (let j = 0; j < arrHst.length; j++) {
                if (arrHst[j].classList.contains("seen") && arrHst[j] != elementOne) {
                    arrHst[j].classList.remove("seen")
                }
            }

            let sctPnl = "";

            for (let j = 0; j < nro; j++) {
                if (arrHst[i].classList.contains(sectPnl + j.toString())) 
                    sctPnl = sectPnl + j.toString()
            }

            choosePnl(sctPnl,arrHst[i])
        })
    }
    setTimeout(clickHst,0)    
}

clickHst()

choosePnl = (exp, arrH)=>{
    for (let i = 0; i < arrPnl.length; i++) {
        let e = arrPnl[i];
        if (arrPnl[i].classList.contains(exp)) {
            ttlMain.classList.add("invisible")
            arrPnl[i].classList.remove("invisible")
            arrPnl[i].classList.add("visible")
            if (arrPnl[i].classList.contains("visible")) {
                arrPnl[i].classList.toggle("visible")
            }
        }else{
            arrPnl[i].classList.remove("visible")
            arrPnl[i].classList.add("invisible")
        }

    }
}


const comentsBtn = document.querySelector(".comentBx")
const comentsSect = document.querySelector(".comentSect")
const comentsReturn = document.querySelector(".headArr")
const bxTxtTrCmnt = document.querySelector(".comentTxtBx")
const txtTrCmnt = document.querySelector(".txtWriteCmt")
const btnSendCmnt = document.querySelector(".incCtnCmt")

comentsBtn.addEventListener("click", () =>{
    comentsSect.classList.add("backSectTw")
})

comentsReturn.addEventListener("click", () =>{
    comentsSect.classList.remove("backSectTw")
})

txtTrCmnt.addEventListener("click", () =>{
    bxTxtTrCmnt.classList.add("xdCmt")
})

btnSendCmnt.addEventListener("click", () =>{
    txtTrCmnt.value = ""
    bxTxtTrCmnt.classList.toggle("xdCmt")
})