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
            // this.iterateThroughProducts();
        }
        catch(error) {
            console.log('Greska kod dohvacanja proizvoda', error);
            this.products = [];
        }
    }

    displayProuduct(){
        const html = `
        `;

    }
    iterateThroughProducts = async() => {
        await this.getProducts();
        this.products.forEach(this.products)
    }

}

export const manager = new Products();

manager.getProducts()