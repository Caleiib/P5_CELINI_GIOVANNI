const results = document.getElementById('items');
const url = 'http://localhost:3000/api/products';
let sofas;

const fetchSofas = async() => {
   // Fetch = important 
   sofas = await fetch(url)
      // Apprendre les promises
      .then(response => response.json())
      .catch(erreur => console.log('Il y a eu un problème avec le serveur Back-end'))
};

const displaySofas = async() => {
   // Apprendre Asynchrone
   await fetchSofas();
   // innerHtml =/ AppendChild (Manipulation du DOM)
   results.innerHTML = (
      // Changer le code avec For ou while
      sofas.map(sofa => (
         `<a href="./product.html?id=${sofa._id}">
            <article>
              <img src="${sofa.imageUrl}" alt="${sofa.altTxt}">
              <h3 class="productName">"${sofa.name}"</h3>
              <p class="productDescription">${sofa.description}</p>
            </article>
         </a>`
      )).join('')
   )
};

displaySofas();