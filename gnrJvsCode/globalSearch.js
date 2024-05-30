iframe = document.querySelector(".mapCt")
inputMap = document.querySelector("#browser")

const url = {
    "San Miguel" : "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15605.948528720959!2d-77.10183978626675!3d-12.078767477840286!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x9105c964223bb347%3A0x2013e50c7a7d23d4!2sSan%20Miguel!5e0!3m2!1ses!2spe!4v1717034296464!5m2!1ses!2spe",
    "San Isidro" : "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15604.789765066913!2d-77.04559378614296!3d-12.098631829105726!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x9105c842e97d1b27%3A0x32a2c5cc041d2ebb!2sSan%20Isidro!5e0!3m2!1ses!2spe!4v1717041050730!5m2!1ses!2spe",
    "Ate" : "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d62433.08428534711!2d-76.93138138948092!3d-12.038855583674229!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x9105c3d12afa9c23%3A0x8a9da7f852624412!2sAte!5e0!3m2!1ses!2spe!4v1717041115249!5m2!1ses!2spe",
    "Comas" : "ttps://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d62457.70470804099!2d-77.07271173994371!3d-11.932446625706794!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x9105d06992e815e3%3A0x18573d7c2751ddb!2sComas!5e0!3m2!1ses!2spe!4v1717041145055!5m2!1ses!2spe",
    "Magdalena" : "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15604.992336186218!2d-77.07721528614388!3d-12.095161528884526!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x9105c9a0b6bdb31d%3A0xee688db657b9e102!2sMagdalena%20del%20Mar!5e0!3m2!1ses!2spe!4v1717041186216!5m2!1ses!2spe",
    "Miraflores" : "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15603.45255200267!2d-77.03914753613672!3d-12.121515430566479!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x9105c8137c30393f%3A0x5268cb2b1c4b162b!2sMiraflores!5e0!3m2!1ses!2spe!4v1717041214160!5m2!1ses!2spe"
}

inputMap.addEventListener("change", () => {
    const selectVal = inputMap.value
    if (url[selectVal]) 
        iframe.src = url[selectVal]
    else
        iframe.src = url["San Miguel"]
})
