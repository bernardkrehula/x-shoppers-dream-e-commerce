import { productsContent } from "./script";
import { main } from "./script";

class Products  {
    constructor(){
        this.products = [];
        this.activeProduct = null;
    }
    getProducts = async() => {
        try{
            const fetchProuct = await fetch('https://www.course-api.com/react-store-products');
            const proudtsData = await fetchProuct.json();
            this.products = proudtsData;
            this.iterateThroughProducts();
        }
        catch(error) {
            console.log('Greska kod dohvacanja proizvoda', error);
        }
    }
    getExtraProductsImg = async() => {
        try{
            const fetchProuct = await fetch('https://www.course-api.com/react-store-products');
            const proudtsData = await fetchProuct.json();
            this.products = proudtsData;
            this.iterateThroughProducts();
        }
        catch(error) {
            console.log('Greska kod dohvacanja proizvoda', error);
        }
    }

    displayProuduct(product){
        const html = `
            <li id="${product.id}">
                <img src="${product.image}" alt="">
                <div class="product-info">
                    <h3>${product.name}</h3>
                    <h4>$${(product.price / 100).toFixed(2)}</h3>
                </div>  
            </li>
        `;
        productsContent.insertAdjacentHTML('beforeend', html);
    }
    iterateThroughProducts(){
        this.products.forEach(product => {
            this.displayProuduct(product);
        })
    }
    findProduct(productID){
        this.activeProduct = this.products.find(product => product.id === productID);
    }
    displayProductDetails(productDetails){
        const product = this.activeProduct;
        console.log(product)
        const html = `
        <div class="backBtn">
                <button>Back to Products</button>
            </div>
            <div class="content">
                <div class="images">
                    <img src="${product.image}" alt="" class="productImg">
                    <ul class="main-ul">
                        <li>
                            <img src="${product.image}" alt="">
                        </li>
                        <li>
                            <img src="products-imgs/product-13.jpeg" alt="">
                        </li>
                        <li>
                            <img src="products-imgs/product-13.jpeg" alt="">
                        </li>
                        <li>
                            <img src="products-imgs/product-13.jpeg" alt="">
                        </li>
                        <li>
                            <img src="products-imgs/product-13.jpeg" alt="">
                        </li>
                    </ul>
                </div>
                <div class="writenContent">
                    <h1>${product.name}</h1>
                    <h2>$${(product.price / 100).toFixed(2)}</h2>
                    <p>${product.description}</p>
                    <h3>Available: In stock</h3>
                    <h4>SKU: recd1jIVIEChmiwhe</h4>
                    <h5>Brand: ${product.company}</h5>
                </div>
            </div>
        `;
        
        productDetails.insertAdjacentHTML('beforeend', html);
    }
    removeProducts(){
        main.removeChild(productsContent);
    }
    setHtmlProductDeatils(){
        main.insertAdjacentHTML('beforeend', '<div class="product-content">')
    }
}

export const manager = new Products();

