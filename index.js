let ERROR = document.getElementById("error") 
let FLU = document.getElementById("flu") 
let MAN = document.getElementById("man") 
let BUTTON = document.getElementById("calcular") 
let INPUT = document.getElementById("peso") 

BUTTON.addEventListener("click", () => {
    let peso = INPUT.value;

    if(peso > 0){
        ERROR.style.display = "none";
        let res = holliday(peso);
     console.log(res) 
    console.log("error");
    } else {
    ERROR.style.display = "block";
}
});

function holliday(peso) {
    let volumen; 

    if (peso <= 10) {
        volumen = peso * 100;
    } else if (peso > 10 && peso <= 20) {
        volumen = 1000 + (peso - 10) * 50;
    } else { 
        volumen = 1500 + (peso - 20) * 20;
    }
    return volumen;
}