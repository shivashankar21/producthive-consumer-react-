import axios from'axios';

const PRODUCTS_RESTAPI_URL='http://localhost:8088/producthive/api/products';

//service layer interactinng with the producthive restapi of spring boot using axios http library.

class ProductService {

    static getProducts(){
        return axios.get(PRODUCTS_RESTAPI_URL);
    }
    
}

export default ProductService;