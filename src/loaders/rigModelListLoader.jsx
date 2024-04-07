import { fetchRigModels} from "../apis/apiRigs.jsx";

async function rigModelListLoader(){

    const models = await fetchRigModels()

    return models
}

export default rigModelListLoader;