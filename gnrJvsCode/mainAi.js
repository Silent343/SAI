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
let interNum = 0 // maneja la seccion
let interPnm = 0 // maneja los textos de la IA
let interTxt = 0 // maneja los textos de histori chat

const container = document.querySelector(".pnlAi")
const btnAddChat = document.querySelector(".incCtn")
const txtChat = document.querySelector(".txtWrite")
const ttlMain = document.querySelector(".iaTitle")

let answr = ""

btnAddChat.addEventListener("click", () =>{

    let inro = 0

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

    answr = "...";

    chatAiModel(txtTr)


    imgIaGlove.classList.add("imgGlovex")
    imgIaGlove.src = "../imgLogo/pixelcut-export.png";
    pIaGlove.classList.add("txtGlove" + interPnm.toString())

    iaGlove.appendChild(imgIaGlove)
    iaGlove.appendChild(pIaGlove)
    iaGlove.classList.add("gloveDecAi")
    container.appendChild(iaGlove);

    inro = interTxt

    iaGlove.classList.add(sectPnl + inro.toString())
    chatGlove.classList.add(sectPnl + inro.toString())

    arrPnl.push(chatGlove)
    arrPnl.push(iaGlove)

    txtChat.value = "";

    writeCharByChar(answr, interPnm)
    interPnm++
})

//Escribir letra por letra en el chat
const writeCharByChar = (strng, clasN) => {
    const pIaGlove = document.querySelector(".txtGlove" + clasN);
    const wrd = strng
    let nro = 0

    let interval = setInterval(() => {
        if (nro < wrd.length) { 
            let txt = document.createTextNode(strng.charAt(nro))
            pIaGlove.appendChild(txt)
            nro++;
        }
        else
            clearInterval(interval)
    }, 70)
}




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
        let mmt = parseInt(dateAct[0] + dateAct[1]);
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


//anñadir history text
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

    interTxt = interNum + 1 
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


//select hsitory chat
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
            interTxt = i
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
const planBtn = document.querySelector(".instPlan")
const planSect = document.querySelector(".planVIP-ctn")
const planReturn = document.querySelector(".fa-x")

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

planBtn.addEventListener("click", () =>{
    planSect.classList.add("backSectOth")
})

planReturn.addEventListener("click", () =>{
    planSect.classList.remove("backSectOth")
})


const chatAiModel = (sentence) => {
    let respt = "";

    if (sentence.includes("ola")) {
        respt = "Hola, en que podría ayudarte ?"
    }
    else if (sentence.includes("Cómo estás") || sentence.includes("Cómo estás")  || sentence.includes("Cómo te sientes")) {
        respt = "Estoy bien, gracias por preguntar. ¿Y tú?";
    }
    else if (sentence.includes("Cuál es tu nombre") || sentence.includes("Cuál es tu nombre") || sentence.includes("Cómo te llamas") || sentence.includes("Como t llamas") || sentence.includes("Como te llamas")) {
        respt = "Me llamo SAI, soy una IA que t ayudará a ver las diversas enfermedades que te pueden asechar"
    }
    else if((sentence.includes("preguntar") || sentence.includes("preguntarte") || sentence.includes("pregunta")) && sentence.includes("puedo")){
        respt = "Sí claro, en que puedo ayudarte ?"
    }
    else if (sentence.includes("Que puedes hacer") || sentence.includes("Para qué sirves")) {
        respt = "Puedo ayudarte con preguntas, generar texto, traducir idiomas, entre otras cosas. ¿En qué te gustaría que te ayudara?";
    }
    else if (sentence.includes("eres")){
        respt = "Soy una inteligencia artificial, creada con el fin de ayudar a las personas en su salud"
    }
    else if (sentence.includes("Cómo aprendes") || sentence.includes("Cómo te entrenaron")) {
        respt = "Fui entrenado utilizando una gran cantidad de texto en múltiples idiomas y temas, utilizando técnicas de aprendizaje automático.";
    }
    else if (sentence.includes("Qué es una enfermedad infecciosa") || sentence.includes("Qué son las enfermedades infecciosas")) {
        respt = "Las enfermedades infecciosas son trastornos causados por organismos como bacterias, virus, hongos o parásitos. Muchas de estas enfermedades se pueden propagar de persona a persona.";
    } 
    else if (sentence.includes("Cuáles son los síntomas de COVID-19") || sentence.includes("Qué síntomas causa el coronavirus")) {
        respt = "Los síntomas comunes de COVID-19 incluyen fiebre, tos, dificultad para respirar, pérdida del gusto o el olfato, y fatiga. Si tienes síntomas, es importante buscar atención médica.";
    } 
    else if (sentence.includes("Cómo se transmite la gripe") || sentence.includes("Cómo se propaga la influenza")) {
        respt = "La gripe se transmite principalmente a través de gotitas respiratorias que se expulsan cuando una persona infectada tose o estornuda. También se puede propagar al tocar superficies contaminadas y luego tocarse la cara.";
    } 
    else if (sentence.includes("Qué es la malaria") || sentence.includes("Cómo se transmite la malaria")) {
        respt = "La malaria es una enfermedad infecciosa transmitida por la picadura de mosquitos infectados. Es causada por parásitos del género Plasmodium.";
    } 
    else if (sentence.includes("Cuáles son las medidas preventivas contra el dengue") || sentence.includes("Cómo prevenir el dengue")) {
        respt = "Para prevenir el dengue, evita las picaduras de mosquitos usando repelente, instalando mosquiteros y eliminando lugares donde los mosquitos puedan reproducirse, como recipientes con agua estancada.";
    } 
    else if (sentence.includes("Qué es el dengue") || sentence.includes("Que es el dengue") || sentence.includes("Que es el dengue")) {
        respt = "El dengue es una infección vírica que se transmite de mosquitos a personas. Es más frecuente en las regiones de climas tropicales y subtropicales.";
    } 
    else if (sentence.includes("Qué es el VIH") || sentence.includes("Qué es el SIDA")) {
        respt = "El VIH (Virus de la Inmunodeficiencia Humana) es un virus que ataca el sistema inmunológico. Si no se trata, puede llevar al SIDA (Síndrome de Inmunodeficiencia Adquirida), una etapa avanzada de la infección por VIH.";
    } 
    else if (sentence.includes("Cuáles son los síntomas de la tuberculosis") || sentence.includes("Cómo se manifiesta la tuberculosis")) {
        respt = "Los síntomas de la tuberculosis incluyen tos persistente, fiebre, sudores nocturnos y pérdida de peso. Es una enfermedad causada por la bacteria Mycobacterium tuberculosis.";
    } 
    else if (sentence.includes("Qué es la hepatitis B") || sentence.includes("Cómo se contagia la hepatitis B")) {
        respt = "La hepatitis B es una infección viral que afecta el hígado. Se transmite a través del contacto con sangre u otros fluidos corporales de una persona infectada.";
    } 
    else if (sentence.includes("Qué es una vacuna") || sentence.includes("Para qué sirven las vacunas")) {
        respt = "Una vacuna es una preparación que se utiliza para estimular la respuesta inmunológica del cuerpo contra enfermedades específicas, proporcionando inmunidad adquirida contra esas enfermedades.";
    }
    else if (sentence.includes("Cuáles son los síntomas de la varicela") || sentence.includes("Cómo se manifiesta la varicela")) {
        respt = "Los síntomas de la varicela incluyen fiebre, cansancio, pérdida de apetito y una erupción cutánea con ampollas que pican. Es causada por el virus varicela-zóster.";
    } 
    else if (sentence.includes("Qué es el ébola") || sentence.includes("Cómo se transmite el ébola")) {
        respt = "El ébola es una enfermedad viral grave que causa fiebre hemorrágica y tiene una alta tasa de mortalidad. Se transmite a través del contacto directo con fluidos corporales de personas infectadas.";
    } 
    else if (sentence.includes("Cuáles son los síntomas del zika") || sentence.includes("Cómo se manifiesta el zika")) {
        respt = "Los síntomas del zika incluyen fiebre, sarpullido, dolor en las articulaciones y conjuntivitis. Se transmite principalmente a través de la picadura de mosquitos Aedes infectados.";
    } 
    else if (sentence.includes("Qué es la fiebre amarilla") || sentence.includes("Cómo se transmite la fiebre amarilla")) {
        respt = "La fiebre amarilla es una enfermedad viral transmitida por mosquitos. Los síntomas incluyen fiebre, escalofríos, dolor de cabeza y, en casos graves, ictericia y hemorragia.";
    } 
    else if (sentence.includes("Qué es la lepra") || sentence.includes("Cómo se transmite la lepra")) {
        respt = "La lepra es una enfermedad crónica causada por la bacteria Mycobacterium leprae, que afecta la piel, los nervios periféricos y las mucosas del tracto respiratorio superior. Se transmite por contacto prolongado con personas infectadas.";
    } 
    else if (sentence.includes("Qué es la rabia") || sentence.includes("Cómo se transmite la rabia")) {
        respt = "La rabia es una enfermedad viral que afecta el sistema nervioso central y es casi siempre fatal una vez que aparecen los síntomas. Se transmite a través de la saliva de animales infectados, generalmente por mordeduras.";
    }
    else if (sentence.includes("Cuáles son los síntomas de la varicela") || sentence.includes("Cómo se manifiesta la varicela")) {
        respt = "Los síntomas de la varicela incluyen fiebre, cansancio, pérdida de apetito y una erupción cutánea con ampollas que pican. Es causada por el virus varicela-zóster.";
    }
    else if (sentence.includes("Diagnóstico de") || sentence.includes("Qué tengo") || sentence.includes("Cómo me curo") || sentence.includes("Recomendación médica") || sentence.includes("Qué puedo hacer para curarme")) {
        respt = "Como IA, puedo proporcionar información general sobre síntomas y tratamientos. Sin embargo, para un diagnóstico preciso y un plan de tratamiento adecuado, te recomiendo que consultes a un médico o profesional de la salud.";
    } 
    else if (sentence.includes("Qué es el estrés") || sentence.includes("Cómo manejo el estrés")) {
        respt = "El estrés es una respuesta del cuerpo a situaciones desafiantes o demandantes. Para manejar el estrés, puedes practicar técnicas de relajación, hacer ejercicio regularmente, y asegurarte de dormir lo suficiente.";
    } 
    else if (sentence.includes("Cuáles son los síntomas de la depresión")) {
        respt = "Los síntomas de la depresión pueden incluir sentimientos persistentes de tristeza, pérdida de interés en actividades, cambios en el apetito o el sueño, y dificultades para concentrarse. Si experimentas estos síntomas, es importante buscar ayuda profesional.";
    } 
    else if (sentence.includes("Qué es la ansiedad")) {
        respt = "La ansiedad es una reacción normal al estrés, pero en algunas personas puede volverse excesiva y afectar su vida diaria. Los síntomas pueden incluir preocupación excesiva, inquietud, y síntomas físicos como aumento del ritmo cardíaco.";
    } 
    else if (sentence.includes("Qué es la microbiota intestinal")) {
        respt = "La microbiota intestinal es el conjunto de microorganismos que viven en el tracto digestivo. Desempeña un papel crucial en la digestión, el sistema inmunológico y la salud general.";
    } 
    else if (sentence.includes("Qué es el ADN")) {
        respt = "El ADN, o ácido desoxirribonucleico, es la molécula que contiene la información genética de los seres vivos. Está formado por una doble hélice de nucleótidos.";
    } 
    else if (sentence.includes("Qué es el genoma humano")) {
        respt = "El genoma humano es la secuencia completa de ADN en un ser humano, que incluye todos sus genes. Contiene la información necesaria para el desarrollo, funcionamiento y reproducción del organismo.";
    } 
    else if (sentence.includes("Qué es la biotecnología")) {
        respt = "La biotecnología es el uso de organismos vivos o sus componentes para desarrollar productos o procesos útiles. Incluye campos como la ingeniería genética, la biomedicina y la bioingeniería.";
    } 
    else if (sentence.includes("Qué es la nanotecnología")) {
        respt = "La nanotecnología es la manipulación de la materia a escala nanométrica (uno de mil millones de metros) para crear materiales y dispositivos con propiedades novedosas.";
    } 
    else if (sentence.includes("Qué es la realidad aumentada")) {
        respt = "La realidad aumentada es una tecnología que superpone información digital, como imágenes o datos, sobre el mundo real, generalmente a través de dispositivos como smartphones o gafas AR.";
    } 
    else if (sentence.includes("Qué es la realidad virtual")) {
        respt = "La realidad virtual es una tecnología que sumerge al usuario en un entorno completamente digital, simulando la presencia física en un mundo artificial mediante dispositivos como cascos VR.";
    }
    else if (sentence.includes("Cómo puedo mejorar mi salud mental")) {
        respt = "Para mejorar tu salud mental, puedes practicar la meditación, mantener una rutina de ejercicio regular, hablar con amigos y familiares, y buscar la ayuda de un profesional de la salud mental si es necesario.";
    } 
    else if (sentence.includes("Cuál es la fecha de hoy") || sentence.includes("Qué día es hoy")) {
        const today = new Date();
        const options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };
        respt = `Hoy es ${today.toLocaleDateString('es-ES', options)}.`;
    }
    else if (sentence.includes("Cómo se transmite el coronavirus")) {
        respt = "El coronavirus se transmite principalmente a través de gotículas respiratorias cuando una persona infectada tose, estornuda o habla cerca de otras personas.";
    } 
    else if (sentence.includes("Cómo funciona la vacuna contra la gripe")) {
        respt = "La vacuna contra la gripe estimula el sistema inmunológico para que produzca defensas contra los virus de la gripe, ayudando a prevenir la enfermedad.";
    } 
    else if (sentence.includes("Cómo se puede prevenir el cáncer")) {
        respt = "La prevención del cáncer incluye mantener un estilo de vida saludable, evitar el tabaco, mantener un peso saludable, hacer ejercicio regularmente y recibir vacunas contra ciertos virus cancerígenos.";
    } 
    else if (sentence.includes("Cuáles son los efectos del tabaco en la salud")) {
        respt = "El tabaco causa una amplia gama de problemas de salud, incluyendo cáncer, enfermedades cardiovasculares y respiratorias, entre otros.";
    } 
    else if (sentence.includes("Cómo se puede reducir la huella de carbono")) {
        respt = "Para reducir la huella de carbono, puedes optar por usar transporte público, reciclar, reducir el consumo de carne y productos lácteos, y usar fuentes de energía renovable.";
    } 
    else if (sentence.includes("Qué es la inteligencia emocional")) {
        respt = "La inteligencia emocional se refiere a la capacidad de reconocer, entender y gestionar las propias emociones y las de los demás de manera efectiva.";
    } 
    else if (sentence.includes("Cómo mejorar la memoria")) {
        respt = "Para mejorar la memoria, puedes practicar ejercicios mentales como rompecabezas y juegos de memoria, mantener una dieta saludable y hacer ejercicio físico regularmente.";
    } 
    else if (sentence.includes("Qué es la diabetes")) {
        respt = "La diabetes es una enfermedad crónica que afecta la manera en que el cuerpo procesa el azúcar en la sangre. Existen tipos diferentes, como la diabetes tipo 1 y la tipo 2.";
    } 
    else if (sentence.includes("Qué es el autismo")) {
        respt = "El autismo es un trastorno del desarrollo que afecta la comunicación, el comportamiento y la interacción social de una persona.";
    } 
    else if (sentence.includes("Qué es el cáncer de mama")) {
        respt = "El cáncer de mama es un tipo de cáncer que se forma en las células de la mama y puede afectar a hombres y mujeres.";
    } 
    else if (sentence.includes("Qué es la enfermedad de Alzheimer")) {
        respt = "La enfermedad de Alzheimer es una enfermedad neurodegenerativa que causa problemas de memoria, pensamiento y comportamiento.";
    }
    else if (sentence.includes("Cuáles son los síntomas de la diabetes")) {
        respt = "Los síntomas de la diabetes pueden incluir aumento de la sed, micción frecuente, aumento del hambre, pérdida de peso inexplicable, fatiga, visión borrosa y cicatrización lenta de heridas.";
    } 
    else if (sentence.includes("Qué es el colesterol")) {
        respt = "El colesterol es una sustancia cerosa similar a la grasa que se encuentra en todas las células del cuerpo. Existen dos tipos principales de colesterol: HDL (colesterol bueno) y LDL (colesterol malo).";
    } 
    else if (sentence.includes("Cómo se puede reducir el colesterol")) {
        respt = "Para reducir el colesterol, es importante llevar una dieta saludable baja en grasas saturadas y trans, hacer ejercicio regularmente, mantener un peso saludable y, en algunos casos, tomar medicamentos recetados por un médico.";
    } 
    else if (sentence.includes("Qué es la migraña")) {
        respt = "La migraña es un tipo de dolor de cabeza intenso que puede causar pulsaciones dolorosas, sensibilidad a la luz y al sonido, náuseas y vómitos. Puede durar horas o incluso días.";
    } 
    else if (sentence.includes("Cuáles son los síntomas del cáncer")) {
        respt = "Los síntomas del cáncer varían según el tipo y la ubicación, pero pueden incluir cambios en el tamaño o forma de un lunar, bultos anormales, cambios en los hábitos intestinales, pérdida de peso inexplicable y fatiga persistente.";
    } 
    else if (sentence.includes("Cómo se puede prevenir el cáncer")) {
        respt = "La prevención del cáncer incluye evitar el tabaco, limitar el consumo de alcohol, mantener un peso saludable, hacer ejercicio regularmente, protegerse del sol y vacunarse contra infecciones que pueden causar cáncer, como el virus del papiloma humano (VPH).";
    } 
    else if (sentence.includes("Qué es la enfermedad de Alzheimer")) {
        respt = "La enfermedad de Alzheimer es un trastorno neurodegenerativo progresivo que afecta la memoria, el pensamiento y el comportamiento. Es la forma más común de demencia.";
    } 
    else if (sentence.includes("Cuáles son los factores de riesgo para el Alzheimer")) {
        respt = "Los factores de riesgo para el Alzheimer incluyen la edad avanzada, antecedentes familiares de la enfermedad, factores genéticos, hipertensión arterial, diabetes, obesidad, y estilos de vida poco saludables.";
    } 
    else if (sentence.includes("Qué es la esclerosis múltiple")) {
        respt = "La esclerosis múltiple es una enfermedad autoinmune que afecta el sistema nervioso central, causando daño a la mielina (la capa que protege las fibras nerviosas). Esto puede llevar a problemas de movilidad, visión, y coordinación.";
    } 
    else if (sentence.includes("Cómo se diagnostica la esclerosis múltiple")) {
        respt = "El diagnóstico de la esclerosis múltiple puede incluir pruebas como resonancia magnética (RM), análisis de líquido cefalorraquídeo, y pruebas neurológicas para evaluar la función cerebral y nerviosa.";
    }
    else if (sentence.includes("Qué es la neumonía")) {
        respt = "La neumonía es una infección que inflama los sacos de aire de uno o ambos pulmones, que pueden llenarse de líquido o pus. Los síntomas pueden variar desde leves hasta graves y pueden incluir fiebre, escalofríos, tos, dificultad para respirar y dolor en el pecho.";
    } 
    else if (sentence.includes("Cuáles son las causas de la neumonía")) {
        respt = "Las causas de la neumonía pueden ser bacterias, virus u hongos. La neumonía bacteriana y la viral son las más comunes, y pueden ocurrir como complicación de una infección respiratoria o por aspiración de líquidos o sustancias.";
    } 
    else if (sentence.includes("Cómo se trata la neumonía")) {
        respt = "El tratamiento de la neumonía depende de la causa y la gravedad. Puede incluir antibióticos para infecciones bacterianas, antivirales para infecciones virales, reposo, hidratación, y en casos graves, hospitalización y soporte respiratorio.";
    }
    else if (sentence.includes("Qué hora es")) {
        const now = new Date();
        const hora = now.toLocaleTimeString('es-ES', { hour: 'numeric', minute: 'numeric', hour12: true });
        respt = `Son las ${hora}`;
    }
    else {
        respt = "Lo siento, no tengo una respuesta para esa pregunta en este momento.";
    }
    
    answr = respt
}