const container = document.getElementById('container')

async function getArticle() {
    let resultat = await axios.get("https://api.kedufront.juniortaker.com/item/")
    return resultat;
}

getArticle()
.then(function(response) {
    console.log(response)
    response.data.forEach ((article) => {
        const card = document.createElement('div')
        card.classList.add('card')
        card.innerHTML = `
        <img src="https://api.kedufront.juniortaker.com/item/picture/${article.image}" alt="image_peluche">
        <h3>${article.name}</h3>
        <p>${article.price} $</p>
        `
        container.appendChild(card)
      })
    // console.log(response.data[0]);
  console.log(response);
})
.catch(function(error) {
  console.log(error);
});

const bar = document.getElementById('bar');
const nav = document.getElementById('navbar');
const close = document.getElementById('close');

if (bar) {
    bar.addEventListener('click', () => {
        nav.classList.add('active');
    })
}
if (close) {
    close.addEventListener('click', () => {
        nav.classList.remove('active');
    })
}