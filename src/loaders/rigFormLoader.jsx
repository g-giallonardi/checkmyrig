import {fetchBrands} from "../apis/apiBrands.jsx";
import {fetchOneRig} from "../apis/apiRigs.jsx";

async function rigFormLoader(rigId=null){
    let rig = null
    if(rigId) {
        rig = await fetchOneRig(rigId)
    }
    const brands = await fetchBrands()
    return { rig, brands }

}

export default rigFormLoader;