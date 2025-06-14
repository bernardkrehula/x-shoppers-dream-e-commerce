import { throttle } from 'throttle-debounce';
import { manager } from './productsManager';


export const productsContent = document.querySelector('.products-content');
export const productDetails = document.querySelector('.product-content');

if(productsContent){
    productsContent.addEventListener('click', (e) => {
    const product = e.target.closest('li');

    if(product){
        const productID = product.id;
        throttleFunc(productID);
        if(productID){
            console.log(productID)
            window.location.href = 'product.html'; 
        }
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

const waitDisplay = throttle(
    1000,
    (productDetails) => {
        manager.displayProductDetails(productDetails);
    },
    { noLeading: false, noTrailing: false }
)
if(productDetails){
    waitDisplay(productDetails);
    console.log(productDetails)
}

if(productsContent) manager.getProducts();