const mainBox = document.querySelector('.main')
console.log("ho")
function sampleText() {
     const card = document.createElement('div')
     card.innerHTML = `
     <div> Words 
     YAYYYYYYYY</div>
     `

     mainBox.appendChild(card)
}

sampleText();