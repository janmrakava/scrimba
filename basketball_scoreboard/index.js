let homeEl = document.getElementById('homeP')
let awayEl = document.getElementById('awayP')

function add1(){
    let buttonClass = event.target.className;
    if (buttonClass === 'home') {
        let pointH = document.getElementById('homeP').innerHTML
        pointH = parseInt(pointH)+1
        homeEl.textContent = pointH
    } else {
        let pointA = document.getElementById('awayP').innerHTML      
        pointA = parseInt(pointA)+1
        awayEl.textContent = pointA
    }
}

function add2(){
    let buttonClass = event.target.className;
    if (buttonClass === 'home') {
        let pointH = document.getElementById('homeP').innerHTML
        pointH = parseInt(pointH)+2
        homeEl.textContent = pointH
    } else {
        let pointA = document.getElementById('awayP').innerHTML      
        pointA = parseInt(pointA)+2
        awayEl.textContent = pointA
    }
}

function add3(){
    let buttonClass = event.target.className;
    if (buttonClass === 'home') {
        let pointH = document.getElementById('homeP').innerHTML
        pointH = parseInt(pointH)+3
        homeEl.textContent = pointH
    } else {
        let pointA = document.getElementById('awayP').innerHTML      
        pointA = parseInt(pointA)+3
        awayEl.textContent = pointA
    }
}
function newGame(){
    homeEl.textContent = 0
    awayEl.textContent = 0
}
