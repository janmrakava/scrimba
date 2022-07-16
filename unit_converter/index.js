const convertBtn = document.getElementById('convert-btn') 
const inputEl = document.getElementById('input-el')
const lengthEl = document.getElementById('length-p')
const massEl = document.getElementById('mass-p')
const volumeEl = document.getElementById('volume-p')


convertBtn.addEventListener('click', function (){
    let num = inputEl.value  
    convertLength(num)
    convertMass(num)
    convertVolume(num)
})

function convertLength(number){
    let meters = number * 3.281 
    let feets = number / 3.281
    lengthEl.textContent = `${number} meters = ${meters.toFixed(3)} feet | ${number} feets = ${feets.toFixed(3)} meters`
}

function convertVolume(number){
    let liters = number * 0.264
    let gallons = number / 0.264
    volumeEl.textContent = `${number} liters = ${liters.toFixed(3)} gallons | ${number} gallons = ${gallons.toFixed(3)} liters`
}
function convertMass(number){
    let kilograms = number * 2.204
    let pounds = number / 2.204  
    massEl.textContent = `${number} kilos = ${kilograms.toFixed(3)} pounds | ${number} pounds = ${pounds.toFixed(3)} kilos`
}


