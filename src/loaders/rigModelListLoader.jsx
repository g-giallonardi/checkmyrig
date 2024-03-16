import { fetchRigModels} from "../apis/rigs.jsx";

async function rigModelListLoader(){

    const models = await fetchRigModels()

    return models
}

export default rigModelListLoader;