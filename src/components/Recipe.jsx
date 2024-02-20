import styles from "./Recipe.module.scss"
import recipeImg from "../assets/images/recipes/salmon.jpg"
import {useState} from "react";
function Recipe(props) {
    const [favorite, setFavorite] = useState(false)

    function handleClickFavorite(){
        setFavorite(!favorite)
    }

    return (
        <div className={styles.recipe}>
            <div className={styles.imageContainer}>
                <img src={`/src/assets/images/recipes/${props.img}`} alt="recipe image"/>
            </div>
            <div className={`${styles.recipeContent} d-flex flex-row justify-content-center align-items-center`}>
                <h3 className={`${styles.recipeTitle} mr-15`}>{props.name}</h3>
                <i onClick={handleClickFavorite} className={`${styles.recipeFavoriteIcon} ${favorite && styles.recipeFavorite} fas fa-bookmark`}></i>
            </div>
        </div>
    )
}

export default Recipe;