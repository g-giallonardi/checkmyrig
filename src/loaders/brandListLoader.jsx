import {fetchBrands} from "../apis/brands.jsx";

async function brandListLoader(){

    const brands = await fetchBrands()
    return brands
}

export default brandListLoader;