import { throttle } from 'throttle-debounce';
import { manager } from './productsManager';


export const productsContent = document.querySelector('.products-content');
export const main = document.querySelector('.main');

if(productsContent){
    productsContent.addEventListener('click', (e) => {
    const product = e.target.closest('li');
    

    if(product){
        const productID = product.id;
        throttleFunc(productID);
        manager.removeProducts();
        manager.setHtmlProductDeatils();
     
        const productDetails = main.querySelector('.product-content');
        manager.displayProductDetails(productDetails);
    }
})
}

const throttleFunc = throttle(
    1000,
    (productID) => {
        manager.findProduct(productID);
    },
    { noLeading: false, noTrailing: false }
)

if(productsContent) manager.getProducts();