let saveEl = document.getElementById("save-el")
let countEl = document.getElementById("count-el")
let count = 0

function increment() {
    count += 1
    countEl.textContent = count
}

function decrement(){
    countEl.textContent -=1
    count-=1
}

function save() {
    let countStr = count + " , "
    saveEl.textContent += countStr
    countEl.textContent = 0 // set value to 0 on h2
    count=0 // set count value 0
}

