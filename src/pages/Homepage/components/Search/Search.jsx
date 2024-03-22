import styles from './Search.module.scss'

function Search({updateFilter,searchFilter}){
    return (
        <div className={` d-flex flex-row-reverse `}>
            {Object.keys(searchFilter).map(
                (type) => {
                    return searchFilter[type]
                        && <span
                            className={`${styles.searchTag}`}
                            onClick={() => updateFilter(type, searchFilter[type])}>
                    <i className="fas fa-search mr-5"></i>{type}: {searchFilter[type]}
                </span>
                })
            }
        </div>
    )
}

export default Search;