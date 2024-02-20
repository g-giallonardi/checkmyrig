import styles from "./Content.module.scss"
import Recipe from "./Recipe.jsx";
import {data} from "../data/recipes.js";
import {useState} from "react";

function Content() {
    const recipes = data
    const [search, setSearch] = useState('')

    function handleInputSearch(e){
        const search = e.target.value
        setSearch(search.trim().toLowerCase())
    }

    return (
        <div className="flex-fill  container p-20">
            <h1 className="my-30">Explore new recipes</h1>
            <div className={`card ${styles.contentCard}  p-20 d-flex flex-column`}>
                <div className={`d-flex align-items-center justify-content-center flex-row my-30 ${styles.searchBar}`}>
                    <i className="fas fa-search mr-15"></i>
                    <input onInput={handleInputSearch} className="flex-fill" type="text" placeholder="Search a recipe"/>
                </div>
                <div className={styles.grid}>
                    {
                        recipes
                            .filter( (r)=> r.title.toLowerCase().startsWith(search))
                            .map(
                            (r,index) => <Recipe key={index} name={r.title} img={r.img}></Recipe>
                        )
                    }
                </div>
            </div>
        </div>
    )
}

export default Content;