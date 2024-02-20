const mainBox = document.querySelector('.main')
console.log("ho")
function sampleText() {
     const card = document.createElement('div')

     //WHen a certain thing is sent from the home page
     //Get request populate the from the database
     //Select, delete, edit
     //Complete by 2/20
     card.innerHTML = `
     <div> Words 
     create box tag and append information here, add buttonstpp
     YAYYYYYYYY</div>
     `

     mainBox.appendChild(card)
}

sampleText();