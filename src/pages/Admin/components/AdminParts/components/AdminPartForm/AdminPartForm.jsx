import {useState} from "react";
import {useNavigate} from "react-router-dom";
import {useForm} from "react-hook-form";
import {createPart as createPartApi, updatePart as updatePartApi} from "../../../../../../apis/parts.jsx";
import SearchAndSelect from "../../../../../../components/SearchAndSelect/SearchAndSelect.jsx";
import styles from './AdminPartForm.module.scss'
import SearchAndCheck from "../../../../../../components/SearchAndCheck/SearchAndCheck.jsx";

//TODO: update documention
/**
 * Renders a form for creating or updating a rig model.
 *
 * @param {Object} params - The parameter object.
 * @param {Object} params.model - The model object containing initial values.
 *
 * @return {JSX.Element} The rendered form.
 */
function AdminPartForm({ part= null }) {

    const selectedBrand = part?.brand ? {_id:part.brand._id,name:part.brand.name, selected:true} : ''
    const selectedPartType = part?.type ? {_id:part._id,name:part.type, selected:true} : ''

    const [brandOpt, setBrandOpt] = useState( selectedBrand)
    const [partTypeOpt, setPartTypeOpt] = useState( selectedPartType)
    const navigate = useNavigate()
    const defaultValues = {
        name : part?.name ? part.name : '',
        brand : part?.brand ? part.brand._id : ''
    }
    const { formState:{errors},setError, register,handleSubmit } = useForm({defaultValues})

    /**
     * Updates the rig model with the given values.
     * @param {Object} values - The values to update the rig model with.
     * @return {Promise<void>} - A promise that resolves when the rig model is updated successfully.
     */
    async function updatePart(values){
        const response = await updatePartApi({...values,id:part._id})
        typeof response === 'object' ? navigate(-1) : setError('generic',{type:'generic', message:response.toString()})    }

    /**
     * Creates a rig model using the given values.
     *
     * @param {Object} values - The values used to create the rig model.
     * @return {Promise<void>} - A promise that resolves when the rig model has been created successfully.
     */
    async function createPart(values){
        const response = await createPartApi({...values})
        typeof response === 'object' ? navigate(-1) : setError('generic',{type:'generic', message:response.toString()})
    }

   /**
    * Submits a form by updating or creating a rig model based on model existence.
    *
    * @param {Object} values - The values of the form to be submitted.
    * @return {void}
    */
   function submitForm(values){
        const choosenBrand = brandOpt.filter( o => o.selected)
        const choosenPartType = partTypeOpt.filter( o => o.selected)
        const updatedPart = {...values, brand:choosenBrand[0], type:choosenPartType[0].name}

        if (part) {
             updatePart(updatedPart);
        } else {
             createPart(updatedPart);
        }

   }
   /**
    * Updates the input value for searching brands.
    *
    * @param {string} value - The value to update the input for searching brands.
    *
    * @return {Promise<void>} - A promise that resolves once the input value is updated.
    */

    return (
        <div className={`${styles.formContainer}`}>
            <form onSubmit={handleSubmit(submitForm)}>
                <div className={`d-flex flex-column mb-20`}>
                    <label htmlFor="name">Name</label>
                    <input {...register('name')} type="text" id={'name'}/>
                </div>
                <div className={`d-flex flex-column `}>
                    <label htmlFor="brand">Brand</label>
                    <div className={`d-flex flex-column mb-20`}>
                        <SearchAndSelect options={brandOpt} setOptions={setBrandOpt}/>
                    </div>
                </div>
                <div className={`d-flex flex-column `}>
                    <label htmlFor="partType">Part type</label>
                    <div className={`d-flex flex-column mb-20`}>
                        <SearchAndCheck options={partTypeOpt} setOptions={setPartTypeOpt}/>
                    </div>
                </div>
                <div className={`d-flex flex-row flex-fill`}>
                    <button className={`btn btn-primary mr-5`}>Save</button>
                    <button onClick={() => navigate(-1)} className={`btn btn-reverse-primary`}>Cancel</button>
                    {errors?.generic && <p className={'error'}>{errors.generic.message}</p>}
                </div>
            </form>
        </div>
    )
}

export default AdminPartForm;