import { throttle } from 'throttle-debounce';
import { manager } from './productsManager';


export const productsContent = document.querySelector('.products-content');
export const main = document.querySelector('.main');

if(productsContent){
    productsContent.addEventListener('click', (e) => {
    const product = e.target.closest('li');

    if(product){
        const productID = e.target.closest('li').id;
        manager.removeProducts();
        manager.setHtmlProductDeatils();
     
        const productDetails = main.querySelector('.product-content');
        manager.getExtraProductsImg(productID);
        manager.displayProductDetails(productDetails);
       
    }
})
}
main.addEventListener('click', (e) => {
    const productImg = main.querySelector('.productImg');
    const clickedImg = e.target.closest('img').src;

    if(productImg){
        productImg.src = clickedImg;
    }
    
})
if(productsContent) manager.getProducts();

    

