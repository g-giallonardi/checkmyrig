import { fetchRigs} from "../apis/apiRigs.jsx";

async function rigListLoader(full = false){

    let result = {}

    if(full) {
        result = {...result, featuredRigs: await fetchRigs({sort: '-like', limit: 8})}
        result = {...result, lastRigs: await fetchRigs({sort: '-created_at', limit: 16})}
    }
    else{
        result ={ ...result, rigs: await fetchRigs() }
    }

    return result
}

export default rigListLoader;