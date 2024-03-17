import { fetchParts} from "../apis/parts.jsx";

async function partListLoader(){

    const parts = await fetchParts()

    return parts
}

export default partListLoader;