let emailLst = "";
let passwordLst = "";
const btnLogIn = document.querySelector(".logInPg")
const inptEml = document.querySelector("#email")
const inptPss = document.querySelector("#password")

window.addEventListener("DOMContentLoaded",() => {
    const savedPassw = localStorage.getItem("password")
    const savedEmail = localStorage.getItem("email")

    if(savedPassw){
        emailLst = savedEmail;
    }
    if (savedEmail) {
        passwordLst = savedPassw;
    }
})

btnLogIn.addEventListener("click", e => {
    vlEm = inptEml.value;
    vlPss = inptPss.value;
    
    if (vlEm == "" || vlPss == "") {
        showToast("error", "Ingrese los datos");
        e.preventDefault();
    }
    else if (vlEm != emailLst || vlPss != passwordLst) {
        showToast("error", "Contraseña o correo incorrecta");
        e.preventDefault();
    }
    else {
        e.preventDefault()
        let url = 'https://youtube.com/';
        window.open(url,'_self')
    }
    
})

function showToast(icon, title) {
    const Toast = Swal.mixin({
        toast: true,
        position: "top-end",
        showConfirmButton: false,
        timer: 3000,
        timerProgressBar: true,
        didOpen: (toast) => {
            toast.onmouseenter = Swal.stopTimer;
            toast.onmouseleave = Swal.resumeTimer;
        }
    });
    Toast.fire({
        icon: icon,
        title: title
    });
}