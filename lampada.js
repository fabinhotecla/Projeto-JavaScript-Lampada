const turnOn = document.querySelector("#turnOn")
const turnOff = document.querySelector("#turnOff")
const lamp = document.querySelector("#lamp")

function islampBroken () {
    return lamp.src.indexOf ('quebrada') > -1
}

function lampOn () {
    if (!islampBroken ()){
    lamp.src = ' ./img/ligada.jpg.jpg'
    }
}

function lampOff () {
    if ( !islampBroken()) {
    lamp.src = './img/desligada.jpg.jpg'
    }
}
function lampBroken (){
    lamp.src = './img/quebrada.jpg.jpg'
}

turnOn.addEventListener('click', lampOn)

turnOff.addEventListener('click', lampOff)

lamp.addEventListener('mouseover', lampOn)
lamp.addEventListener('mouseout', lampOff)
lamp.addEventListener('dblclick', lampBroken)
