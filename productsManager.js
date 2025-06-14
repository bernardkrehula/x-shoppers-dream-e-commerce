import { productsContent } from "./script";

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

    displayProuduct(product){
        console.log(product)
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

}

export const manager = new Products();

manager.getProducts()
