const nameUsr = document.querySelector("#name")
const emailUsr = document.querySelector("#email")
const passwordx = document.querySelector("#password")
const cnfPassWord = document.querySelector("#Cpassword")
const btnForm = document.querySelector(".btn_ctrAccount")

btnForm.addEventListener("click", event => {
    if (nameUsr.value == "" || emailUsr.value == "" || passwordx.value == "" || cnfPassWord.value == "") {
        showSweetAlt("error","Ingrese los datos")
        event.preventDefault();
    }
    else if(!emailUsr.value.includes("@")){
        showSweetAlt("error","Ingrese un correo valido")
        event.preventDefault();
    }
    else if(passwordx.value.length < 8){
        showSweetAlt("error","La contraseña debe tener más d 8 digitos")
        event.preventDefault();
    }
    else{
        showSweetAlt("success","Registro exitoso")
        event.preventDefault();

        nameVl = nameUsr.value;
        emailVl = emailUsr.value;
        passWVl = passwordx.value;

        localStorage.setItem("nameUsr", nameVl)
        localStorage.setItem("email", emailVl)
        localStorage.setItem("password", passWVl)

        const url = "../SAIgpt/index.html";
        const standBy = 1000; 
        setTimeout(() =>{
            window.open(url, '_self');
        }, standBy)
    }
})

showSweetAlt = (iconx,titlex) => {
    const Toast = Swal.mixin({
        toast: true,
        position: "top-end",
        showConfirmButton: false,
        timer: 1000,
        timerProgressBar: true,
        didOpen: (toast) => {
        toast.onmouseenter = Swal.stopTimer;
        toast.onmouseleave = Swal.resumeTimer;
        }
    });
    Toast.fire({
        icon: iconx,
        title: titlex,
    });
}

