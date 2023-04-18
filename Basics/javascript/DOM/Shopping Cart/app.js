// API documentation: https://dummyjson.com/docs/products

// 1. Find elements
const searchinput = document.querySelector(".searchinput");
// const searchbutton = document.querySelector(".searchbutton");
const ListOfProducts = document.querySelector(".products");
const CartSummary = document.querySelector(".cart-summary");
const TotalPrice = document.querySelector(".total_price");
let Total = 0;
const base_url = 'https://dummyjson.com/products'

// 2. Create a function to fetch products from the API and display them in the DOM for home page
const fetchProducts = async () => {
    try {
        let data = await fetch(base_url)
        let res = data.json()
        return res
    } catch (error) {
        console.log(error, "something is wrong in the API !!!!");
    }
};

// 3. Create a function to display products in the DOM
const displayProducts = (allProducts) => {
    // console.log(allProducts.products);
    allProducts.products.map(single_prod => {
        const { thumbnail, title, description, price, id } = single_prod
        const parse = document.createRange().createContextualFragment(` <div class="col">
            <div class="card h-100 bg-secondary text-light">
                <img src=${thumbnail} class="product-image"
                    alt="Product Image">
                <div class="card-body">
                    <h5 class="card-title">${title} - € ${price}</h5>
                    <p class="card-text">${description}</p>
                    <a href="#" class="btn btn-primary buynow" data-id="${id}">Buy Now</a>
                </div>
            </div>
        </div>`)
        ListOfProducts.appendChild(parse)
    })
};

// 4. Create DOMContentLoaded event listener to display products on home page
document.addEventListener("DOMContentLoaded", async () => {
    let data = await fetchProducts()
    displayProducts(data)
});

// 5. Create a function to fetch products from the API and display them in the DOM for search page
const fetchSearchProducts = async (searchTerm) => {
    try {
        let input = await fetch(`${base_url}/search?q=${searchTerm}`)
        let res = input.json()
        return res
    } catch (error) {
        console.log(error, "something is wrong in the research input !");
    }
};

// 6. Create keyup event listener to search products
searchinput.addEventListener("keyup", async (e) => {
    while (ListOfProducts.firstChild) {
        ListOfProducts.removeChild(ListOfProducts.firstChild)
    }
    let searchAllProducts = await fetchSearchProducts(e.target.value)
    displayProducts(searchAllProducts)

    console.log(searchAllProducts);

    // console.log(e.target.value);
    // console.log(searchinput.value);
    // fetchSearchProducts()
});

// 7. Create a function to fetch single product information
const fetchSingleProduct = async (id) => { 
    try {
        let res = await fetch(`${base_url}/${id}`)
        let data = res.json()
        return data
    } catch (error) {
        console.log(error, "Poduct NOT EXIST !");
    }
};

// 8. Create a function to add products to the cart (innerHTML allowed)
const addToCart = (product) => { 
    // let tr = document.createElement('tr')
    // let td_title = document.createElement('td');
    // let td_price = document.createElement('td');
    CartSummary.innerHTML+=`<tr>
    <td>${product.title}</td>
    <td>${product.price}</td>
  </tr>`
};

// 9. Create click event listener to add products to the cart
ListOfProducts.addEventListener("click", async (e) => {
    if(e.target.classList.contains('buynow')){
        let productId = e.target.getAttribute('data-id') // 5 .6.7
        console.log(productId)
        let productdata = await fetchSingleProduct(productId)
        Total+=productdata.price
        addToCart(productdata)
        TotalPrice.innerText = `EUR ${Total}`
    }
   // let res = await fetchSingleProduct()
});
