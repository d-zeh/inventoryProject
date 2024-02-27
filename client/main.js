const mainBox = document.querySelector('.main')



const getAllProducts = () => {
     console.log("here")
     axios.get('http:/localhost:4004/api/products')
     .then(response => {
          database = response.data;
          getProductsScreen();
     })
     .catch(error => {
          console.log('Error GET fetching products', error);
     });
};

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

const getButton = document.getElementById('getAll')
getButton.addEventListener('click', getAllProducts)
console.log("ho")



