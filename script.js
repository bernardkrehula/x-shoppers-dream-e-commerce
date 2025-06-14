import { throttle } from 'throttle-debounce';
import { manager } from './productsManager';


export const productsContent = document.querySelector('.products-content');

productsContent.addEventListener('click', (e) => {
    const product = e.target.closest('li');
    const productID = product.id;

    if(product){
        throttleFunc(productID);
    }
})

const throttleFunc = throttle(
    1000,
    (productID) => {
        manager.findProduct(productID);
    },
    { noLeading: false, noTrailing: false }
)