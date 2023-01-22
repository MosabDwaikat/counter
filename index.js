let countEl = document.getElementById("count-el")
let saveEl = document.getElementById("save-el")
let count = 0

function increment(){
    count ++
    countEl.textContent = count
    
}
function save(){
    let newText = saveEl.textContent
    newText +=  " - "+countEl.textContent
    if(newText.charAt(20)=="-")
        newText=newText.substring(0,19)+newText.substring(21)
        
    
    saveEl.textContent=newText

    count = 0
    countEl.textContent = 0
}