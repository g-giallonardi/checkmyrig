import { fetchRigs} from "../apis/rigs.jsx";

async function rigListLoader(full = false){

    let result = {}

    if(full) {
        result = {...result, featuredRigs: await fetchRigs({sort: '-like', limit: 5})}
        result = {...result, lastRigs: await fetchRigs({sort: '-created_at', limit: 10})}
    }
    else{
        result ={ ...result, rigs: await fetchRigs() }
    }

    return result
}

export default rigListLoader;