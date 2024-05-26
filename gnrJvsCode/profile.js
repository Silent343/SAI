let NcNameChng = document.querySelectorAll(".usr-NickName");
const usrName = document.querySelector("#name");
const usrEmail = document.querySelector("#email");
const usrNicknm = document.querySelector("#nickName");


const defaultFile = "https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/271deea8-e28c-41a3-aaf5-2913f5f48be6/de7834s-6515bd40-8b2c-4dc6-a843-5ac1a95a8b55.jpg?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7InBhdGgiOiJcL2ZcLzI3MWRlZWE4LWUyOGMtNDFhMy1hYWY1LTI5MTNmNWY0OGJlNlwvZGU3ODM0cy02NTE1YmQ0MC04YjJjLTRkYzYtYTg0My01YWMxYTk1YThiNTUuanBnIn1dXSwiYXVkIjpbInVybjpzZXJ2aWNlOmZpbGUuZG93bmxvYWQiXX0.BopkDn1ptIwbmcKHdAOlYHyAOOACXW0Zfgbs0-6BY-E";
const img = document.getElementById( 'imgPerfil' );
const img1 = document.getElementById( 'imgPerfil2' );
const img2 = document.getElementById( 'imgPerfil3' );
const file = document.getElementById( 'inputPrf' );



window.addEventListener("DOMContentLoaded", () => {
    const savedNickName = localStorage.getItem("nickname");
    const savedImgProfile = localStorage.getItem("general-img");
    const savedNameUsr = localStorage.getItem("nameUsr");
    const savedEmail = localStorage.getItem("email");

    if(savedNickName) {
        usrNicknm.value = savedNickName;
        NcNameChng.forEach(element => {
            element.textContent = savedNickName;
        })
    }
    if (savedNameUsr) {
        usrName.value = savedNameUsr;
    }
    if (savedEmail) {
        usrEmail.value = savedEmail;
    }
    if(savedImgProfile) {
        img.src = savedImgProfile;
        img1.src = savedImgProfile;
        img2.src = savedImgProfile;
        img.style.backgroundColor = "#ebecf0a2";
        img1.style.backgroundColor = "#ebecf020";
        img.style.boxShadow = "inset 0 0 0 1px rgba(57,76,96,.15)"
        img1.style.boxShadow = "inset 0 0 0 2px rgba(57,76,96,.15)"
    }
})


file.addEventListener( 'change', e => {
    if( e.target.files[0] ){
        const reader = new FileReader( );
        reader.onload = function( e ){
            img.src = e.target.result;
            img1.src = e.target.result;
            img2.src = e.target.result;
            localStorage.setItem("general-img", e.target.result)
        }
        reader.readAsDataURL(e.target.files[0])
    }
    else{
        img.src = defaultFile;
        img1.src = defaultFile;
        img2.src = defaultFile;
    }
} );

const acctPag = document.querySelector("#account-general")
const passPag = document.querySelector("#account-change-password")
const apkPag = document.querySelector("#account-aplication")
const ntfcPag = document.querySelector("#account-notifications")

const acctLink = document.querySelector(".accntCtn")
const passLink = document.querySelector(".pwrdCtn")
const apkLink = document.querySelector(".appCtn")
const ntfcLink = document.querySelector(".ntfcCtn")

const allInfoSec = document.querySelector(".all-Info-ctn")
const backArrow = document.querySelector(".fa-arrow-left")
const profileInfo = document.querySelector(".prflIfn_cnt")

const arrPagChng = [acctPag, passPag, apkPag, ntfcPag];
const arrLnkChng = [acctLink, passLink, apkLink, ntfcLink];

backArrow.addEventListener("click", () => {
    allInfoSec.classList.remove("bringBack")
})

for (let i = 0; i < arrPagChng.length; i++) {
    arrLnkChng[i].addEventListener("click", () => {
        const element = arrPagChng[i]; 
        const elementL = arrLnkChng[i]; 
        arrPagChng[i].classList.add("visibleCnt")
        arrPagChng[i].classList.remove("invisibleCnt")
        arrLnkChng[i].classList.add("active")
        allInfoSec.classList.toggle("bringBack");

        for (let i = 0; i < arrPagChng.length; i++) {
            if (arrPagChng[i].classList.contains("visibleCnt") && arrPagChng[i] != element) {
                arrPagChng[i].classList.remove("visibleCnt");
                arrPagChng[i].classList.add("invisibleCnt");
            }
            if(arrLnkChng[i].classList.contains("active") && arrLnkChng[i] != elementL){
                arrLnkChng[i].classList.remove("active");
            }
        } 
    })  
}

const btnSvDtAcct = document.querySelector("#saveFirstData")

btnSvDtAcct.addEventListener("click", () => {
    /***/
    let newValue = usrNicknm.value;
    NcNameChng.forEach(element => {
        element.textContent = newValue
    })

    if (usrNicknm.value == "") {
        NcNameChng.forEach(element => {
            element.textContent = "User"
        })
    }
    /***/
    let newNameV = usrName.value;
    let newEmailV = usrEmail.value;
    
    localStorage.setItem("email", newEmailV)
    localStorage.setItem("nameUsr", newNameV)
    localStorage.setItem("nickname", newValue)

    const Toast = Swal.mixin({
        toast: true,
        position: "top-end",
        showConfirmButton: false,
        timer: 2000,
        timerProgressBar: true,
        didOpen: (toast) => {
        toast.onmouseenter = Swal.stopTimer;
        toast.onmouseleave = Swal.resumeTimer;
        }
    });
    Toast.fire({
        icon: "success",
        title: "Cambios guardados"
    });
})

/*usrNicknm.addEventListener("input", () => {
    let newValue = usrNicknm.value;
    NcNameChng.forEach(element => {
        element.textContent = newValue
    })

    if (usrNicknm.value == "") {
        NcNameChng.forEach(element => {
            element.textContent = "Name"
        })
    }

    localStorage.setItem("nickname", newValue)
})*/