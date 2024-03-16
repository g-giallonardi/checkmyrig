import {fetchBrands} from "../apis/brands.jsx";
import {fetchOneRigModel} from "../apis/rigs.jsx";

async function rigModelFormLoader(rigModelId=null){
    let model = null
    if(rigModelId) {
        model = await fetchOneRigModel(rigModelId)
    }
    const brands = await fetchBrands()

    return { model, brands }
}

export default rigModelFormLoader;