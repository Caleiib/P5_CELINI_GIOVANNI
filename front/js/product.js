const image =  document.querySelector('.item__img');
const title =  document.querySelector('#title');
const colors = document.querySelector('#colors');
let params = new URL(document.location).searchParams;
let id = params.get("id");
console.log(id);
const url = 'http://localhost:3000/api/products/';
let productId = url + id;
console.log(productId);

const fetchSofa = async () => {
    sofa = await fetch(productId)
    .then(response => response.json())
    .then((result) =>{
        article = result
        console.log(article.price);
        image.innerHTML += `<img src="${article.imageUrl}" alt="Photographie d'un canapé">`
        title.innerHTML += `${article.name}`
        price.innerHTML = `${article.price}`
        description.innerHTML = `${article.description}`
        for (let colors of article){
        console.log(`${colors}`)
    }
        
    })
}
/// Se renseiger sur les appendchilds & les createselements
fetchSofa();