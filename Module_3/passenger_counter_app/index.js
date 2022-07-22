// document.getElementById("count").innerText = 5

// change the count-el in the HTML to reflect the new count

let count = 0

let countEl = document.getElementById('count-el')
let saveEl = document.getElementById('save-el')

function increment() {
    count += 1
    countEl.textContent = count
}

function save(){
    let countStr = count+' - '
    saveEl.textContent += countStr
    count = 0
    countEl.textContent = 0
}



