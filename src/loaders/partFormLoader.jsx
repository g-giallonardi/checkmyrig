import {fetchBrands} from "../apis/apiBrands.jsx";
import {fetchOnePart} from "../apis/apiParts.jsx";

async function partFormLoader(partId=null){
    let part = null
    if(partId) {
        part = await fetchOnePart(partId)
    }
    const brands = await fetchBrands()

    return { part, brands }

}

export default partFormLoader;