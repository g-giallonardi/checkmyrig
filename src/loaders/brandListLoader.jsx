import {fetchBrands} from "../apis/apiBrands.jsx";

async function brandListLoader(){

    const brands = await fetchBrands()
    return brands
}

export default brandListLoader;