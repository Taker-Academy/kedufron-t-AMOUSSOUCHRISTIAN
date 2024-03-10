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
        card.id = article.id
        console.log(card.id)
        card.classList.add('card')
        card.innerHTML = `
        <img src="https://api.kedufront.juniortaker.com/item/picture/${article.image}" alt="image_peluche">
        <h3>${article.name}</h3>
        <p>${article.price} $</p>
        <a href="#"><i class='fa-solid fa-bag-shopping'></i></a>
        `
        container.appendChild(card)
    })
    individual_article()
    console.log(response);
})
.catch(function(error) {
    console.log(error);
});


function individual_article() {
    var articles = document.getElementsByClassName('card');
    for (let i = 0; i < articles.length; i++) {
        articles[i].addEventListener('click', () => {
            window.location.href = 'produit.html?id=' + articles[i].id;
        });
    }
}
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