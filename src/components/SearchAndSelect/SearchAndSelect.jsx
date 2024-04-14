import {useEffect, useState} from "react";
import styles from "./SearchAndSelect.module.scss";

/**
 * Search and Select method.
 * Search option in async on API call, display result as button and able to create option if not found in result
 * @param {object} options - An object containing the options to be searched and selected. First item will be attribute
 * to default valueby adding a 'selected' key
 * @param {function} setOptions - A callback function to set the selected options
 */
function SearchAndSelect({ options, setOptions, searchItemFn, externalFilter='' }){
    const [inputValue, setInputvalue] = useState('')
    const [defaultOption, setDefaultOption] = useState('')
    const [defaultOptionFlag, setDefaultOptionFlag] = useState(false)


    if(!defaultOptionFlag){
        if(options?.selected) setDefaultOption(options)
        setDefaultOptionFlag(true)
    }
    useEffect(
        () => {

            const newOpt = {_id:0, name: inputValue}
            const fetchData = async () => {
                const formattedFilter = { name: inputValue, filter: externalFilter[0]?.name ? externalFilter[0].name : ''}
                const data = await searchItemFn(formattedFilter)

                if(defaultOption) setOptions([defaultOption, ...data,newOpt])
                else setOptions([...data,newOpt])
            }
            if(inputValue.length >= 3) {
                fetchData()
            }
            else if(inputValue.length > 0){
                if(defaultOption) setOptions([defaultOption,newOpt])
                else setOptions([newOpt])
            }
            else{
                if(defaultOption) setOptions([defaultOption])
                else setOptions([])
            }
        }
    ,[inputValue])

    /**
     * To keep the input value through the component reconstruction.
     *
     * @param {any} value - The value to be set as input value.
     * @returns {Promise<void>} - Resolves when the input value has been set.
     */
    async function handleInputValue(value){
        setInputvalue(value)
    }

    /**
     * Toggle the 'selected' key on each options to display/store the selected options
     *
     * @param {Event} e - The event object.
     * @param {number} idx - The index of the selected option.
     * @returns {void}
     */
    function handleSearchOption(e,idx){
        e.preventDefault()
        setOptions(options.map((o) => {
            if (o._id === idx) {
                return { ...o, selected: true };
            } else {
                return { ...o, selected: false };
            }
        }));
    }
    return(
        <>
            <input type="text" value={inputValue} placeholder={`Search or add an item`} className={`mb-20`} onChange={e => handleInputValue(e.target.value)}/>
            <div className={`d-flex flex-row`}>
            {
                Array.isArray(options) && options.length ? options.map(
                        (o) => <button onClick={(e) => handleSearchOption(e,o._id, o.name)} key={o._id} className={`btn btn-primary mr-5 ${o.selected ? styles.selectedOption : ''}`}>{o.selected ?
                            <i className="fas fa-check-circle"></i> : o._id === 0 ?
                                <i className="fas fa-plus-circle"></i> : ''} {o.name} </button>
                ) : ''
            }
            </div>
        </>
    )
}

export default SearchAndSelect;