const mainBox = document.querySelector('.main')


//Get Button
const getAllProducts = () => {axios.get('http://localhost:4004/api/products')
     .then(response => {
          console.log(response.data)
          getProductsScreen(response.data);
     }).catch(error => {console.log('Error GET fetching products', error);});};

//Create Button
const createProducts = (body) => {
     axios.post('http://localhost:4004/api/products',body)
     .then(response => {

          console.log(response)
          //make data populate through css and html
     })
     .catch(error => {
          console.log('Error PUT fetching products', error);
     });
};




function addProduct(e) {
     e.preventDefault();

     let name = document.querySelector('#name')
     let protein = document.querySelector('#protein')
     let price = document.querySelector('#price')
     let quanity = document.querySelector('#quantity')

     let object = {
          name: name.value,
          protein: protein.value,
          price: price.value,
          quanity: quanity.value
     }
     console.log(object)

     createProducts(object)
}










function getProductsScreen(database) {
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

          const image = document.createElement('img');
          image.src = database[i].imageURL;
          image.style.maxWidth = '100px'; // Set the max width of the image
          image.style.maxHeight = '100px'; // Set the max height of the image

          card.appendChild(nameCell);
          card.appendChild(proteinAmountCell);
          card.appendChild(priceCell);
          card.appendChild(quantityCell);
          card.appendChild(image); // Append the image to the card

          mainBox.appendChild(card);
          mainBox.appendChild(card)
     }
}

const getButton = document.getElementById('getAll')
getButton.addEventListener('click', getAllProducts)
console.log("ho")


const submitButton = document.getElementById('post')
submitButton.addEventListener('click', addProduct)


