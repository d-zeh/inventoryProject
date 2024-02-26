const mainBox = document.querySelector('.main')
let database = 
     [
          {name: "Protein",
          proteinAmount: 100,
          price: 50,
          quantity: 3,
     }
     ,
      {    name: "Protein",
          proteinAmount: 100,
          price: 50,
          quantity: 3,

      }
     ]


const getAllProducts = () => {
     axios.get('http:/localhost:4004/api/products')
     .then()
}
//Delete Function
//Put Function
//Counter????
function getProductsScreen() {
     for(let i = 0; i < database.length; i++){
          const card = document.createElement('div')
          card.style.display = 'flex';
          const nameCell = document.createElement('div');
          nameCell.textContent = database[i].name;
          nameCell.style.flex = '1';
          const proteinAmountCell = document.createElement('div');
          proteinAmountCell.textContent = database[i].proteinAmount;
          proteinAmountCell.style.flex = '1';
          const priceCell = document.createElement('div');
          priceCell.textContent = database[i].price;
          priceCell.style.flex = '1';
          const quantityCell = document.createElement('div');
          quantityCell.textContent = database[i].quantity;
          quantityCell.style.flex = '1'; 
          card.appendChild(nameCell);
          card.appendChild(proteinAmountCell);
          card.appendChild(priceCell);
          card.appendChild(quantityCell);
          mainBox.appendChild(card);
          mainBox.appendChild(card)
     }
}



//feed in database, maybe fake database for now through VScode



const getButton = document.getElementById('getAll')
console.log("ho")
// function sampleText() {
//      const card = document.createElement('div')
//      card.style.display = 'flex';
//      const nameCell = document.createElement('div');
//      nameCell.textContent = database.name;
//      nameCell.style.flex = '1';
//      const proteinAmountCell = document.createElement('div');
//      proteinAmountCell.textContent = database.proteinAmount;
//      proteinAmountCell.style.flex = '1';
//      const priceCell = document.createElement('div');
//      priceCell.textContent = database.price;
//      priceCell.style.flex = '1';
//      const quantityCell = document.createElement('div');
//      quantityCell.textContent = database.quantity;
//      quantityCell.style.flex = '1'; 
//      card.appendChild(nameCell);
//      card.appendChild(proteinAmountCell);
//      card.appendChild(priceCell);
//      card.appendChild(quantityCell);
     
//      mainBox.appendChild(card);
//      mainBox.appendChild(card)
// }

function buttonTester() {

}

getButton.addEventListener('click', getProductsScreen)

// sampleText();