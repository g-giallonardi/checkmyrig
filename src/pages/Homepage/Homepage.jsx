import FeatureRigs from "./components/FeaturedRigs/FeatureRigs.jsx";
import Loading from "../../components/Loading/Loading.jsx";
import LastRigs from "./components/LastRigs/LastRigs.jsx";

function Homepage(){
    return (
        <div className={`d-flex flex-column flex-fill p-20`}>
            <FeatureRigs />
            <LastRigs />
        </div>
    )
}

export default Homepage;