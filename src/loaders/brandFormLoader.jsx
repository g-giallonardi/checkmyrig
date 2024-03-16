import {fetchOneBrand} from "../apis/brands.jsx";

async function brandFormLoader(brandId){

    const brand = await fetchOneBrand(brandId)
    return brand
}

export default brandFormLoader;