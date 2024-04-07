import {fetchBrands} from "../apis/apiBrands.jsx";
import {fetchOneRigModel} from "../apis/apiRigs.jsx";

async function rigModelFormLoader(rigModelId=null){
    let model = null
    if(rigModelId) {
        model = await fetchOneRigModel(rigModelId)
    }
    const brands = await fetchBrands()

    return { model, brands }
}

export default rigModelFormLoader;