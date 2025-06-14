import { throttle } from 'throttle-debounce';
import { manager } from './productsManager';


export const productsContent = document.querySelector('.products-content');

productsContent.addEventListener('click', () => {
    throttleFunc();
        
})

const throttleFunc = throttle(
    1000,
    (num) => {
        console.log('radi sada', num)
    },
    { noLeading: false, noTrailing: false }
)