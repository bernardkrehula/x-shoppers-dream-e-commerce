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
    getExtraProductsImg = async(productID) => {
        this.activeProduct = productID;
        try{
            const fetchProuct = await fetch(`https://www.course-api.com/react-store-single-product?id=${this.activeProduct}`);
            const proudtsData = await fetchProuct.json();
            this.activeProduct = proudtsData;
            console.log(this.activeProduct)
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
    displayProductDetails = async(productDetails) => {
        await this.getExtraProductsImg();
        const product = this.activeProduct;
        const imagesList = product.images
            .map(img => `<li><img src="${img.url}" alt=""></li>`)
            .join('');
        const html = `
        <div class="backBtn">
                <button>Back to Products</button>
            </div>
            <div class="content">
                <div class="images">
                    <img src="${product.images[0].url}" alt="" class="productImg">
                    <ul class="main-ul">
                        ${imagesList}
                    </ul>
                </div>
                <div class="writenContent">
                    <h1>${product.name}</h1>
                    <h2>$${(product.price / 100).toFixed(2)}</h2>
                    <p>${product.description}</p>
                    <h3>Available: ${product.stock} in stock</h3>
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

