const mainBox = document.querySelector('.main')
console.log("ho")
function sampleText() {
     const card = document.createElement('div')

     //WHen a certain thing is sent from the home page
     //Get request populate the from the database
     //Select, delete, edit
     card.innerHTML = `
     <div> Words 
     YAYYYYYYYY</div>
     `

     mainBox.appendChild(card)
}

sampleText();