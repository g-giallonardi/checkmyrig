import {fetchBrands} from "../apis/brands.jsx";
import {fetchOnePart} from "../apis/parts.jsx";

async function partFormLoader(partId=null){
    let part = null
    if(partId) {
        part = await fetchOnePart(partId)
    }
    const brands = await fetchBrands()

    return { part, brands }

}

export default partFormLoader;