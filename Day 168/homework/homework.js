const getProducts = () => {
    return fetch('https://fakestoreapi.com/products')
    .then(response => {
        if(!response.ok){
            throw new Error('server error');
        }
        return response.json();
    });
};

let array = [];

const btn = document.getElementById('btn');
const div = document.getElementById('container');
const p1 = document.getElementById('p1')
const btn2 = document.getElementById("btn2")
const cart = document.getElementById('container2');

btn.addEventListener('click', () => {
    getProducts()
        .then(products => {
            try {
                products.forEach(product => {
                    const productCard = document.createElement('div');
                    productCard.id = "div1"
                    productCard.innerHTML = `
                        <h1>${product.title}</h1>
                        <h2 id="head2">price is: ${product.price}</h2>
                        <img src=${product.image} width='100px'>
                        <button id="add-btn">add product</button>
                    `
                    div.appendChild(productCard);

                    const thisBtn = productCard.querySelector('#add-btn');

                    thisBtn.addEventListener('click', () => {
                        const cartItem = document.createElement('div');

                        cartItem.innerHTML = `
                            <h2 id="head3">${product.title}</h2>
                            <h3>price is: ${product.price}</h3>
                            <img src=${product.image} width='100px'>
                            <button id="btn3">delete product</button>
                        `;

                        cart.appendChild(cartItem);

                        const deleteBtn = document.getElementById("btn3")

                        deleteBtn.addEventListener("click", (e) => {
                            console.log(e.target.parentElement)
                            cartItem.remove()
                        })
                    });
                    
                    
                    array.push(product.innerHTML)
                })
            } catch (err) {
                console.error(err);
            }
        })
        .catch(err => {
            console.error(err);
        });
        btn.style.display = "none"
        p1.style.display = "block"
        p1.style.color = "white"
        p1.style.paddingLeft = "700px"
});  