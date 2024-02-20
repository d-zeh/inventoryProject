const mainBox = document.querySelector('.main')
let database = {
     name: "Protein",
     proteinAmount: 100,
     price: 50,
     quantity: 3
}

const getAllProducts = () => {
     axios.get(baseURL)
     .then(productCallback)
}






const getButton = document.getElementById('getAll')
console.log("ho")
function sampleText() {
     const card = document.createElement('div')
     card.style.display = 'flex';
     const nameCell = document.createElement('div');
     nameCell.textContent = database.name;
     nameCell.style.flex = '1';
     const proteinAmountCell = document.createElement('div');
     proteinAmountCell.textContent = database.proteinAmount;
     proteinAmountCell.style.flex = '1';
     const priceCell = document.createElement('div');
     priceCell.textContent = database.price;
     priceCell.style.flex = '1';
     const quantityCell = document.createElement('div');
     quantityCell.textContent = database.quantity;
     quantityCell.style.flex = '1'; 
     card.appendChild(nameCell);
     card.appendChild(proteinAmountCell);
     card.appendChild(priceCell);
     card.appendChild(quantityCell);
     
     mainBox.appendChild(card);
     // card.innerHTML = `
     // <div> ${database.name} </div>
     // <div>${database.proteinAmount} </div>
     // `

     mainBox.appendChild(card)
}

function buttonTester() {

}

getButton.addEventListener('click', sampleText)

// sampleText();