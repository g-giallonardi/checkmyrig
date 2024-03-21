import styles from './Search.module.scss'

function Search({setSearchValue}){
    return(
        <div className={`d-flex flex-fill ${styles.wrap}`}>
            <div className={`${styles.search}`}>
                <input type="text" className={`${styles.searchTerm}`} placeholder="What are you looking for?"/>
                <button type="submit" className={`${styles.searchButton}`}>
                    <i className="fa fa-search"></i>
                </button>
            </div>
        </div>
    )
}

export default Search;