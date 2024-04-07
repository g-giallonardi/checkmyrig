import { fetchParts} from "../apis/apiParts.jsx";

async function partListLoader(){

    const parts = await fetchParts()

    return parts
}

export default partListLoader;