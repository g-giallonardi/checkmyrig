import {useState} from "react";
import {useNavigate} from "react-router-dom";
import {useForm} from "react-hook-form";
import {
    createRig as createRigApi,
    updateRig as updateRigModelApi,
    searchRigModel
} from "../../../../../../apis/rigs.jsx";
import SearchAndSelect from "../../../../../../components/SearchAndSelect/SearchAndSelect.jsx";
import styles from './AdminRigForm.module.scss'
import {searchBrand} from "../../../../../../apis/brands.jsx";
import {randomCarName} from "../../../../../../assets/datas/randomCarName.js";

//TODO: update comments
/**
 * Renders a form for creating or updating a rig model.
 *
 * @param {Object} params - The parameter object.
 * @param {Object} params.model - The model object containing initial values.
 *
 * @return {JSX.Element} The rendered form.
 */
function AdminRigForm({ rig }) {

    const [image, setImage] = useState(null)

    const selectedBrand = rig?.model?.brand ? {_id:rig?.model.brand._id,name:rig?.model.brand.name, selected:true} : ''
    const [brandOpt, setBrandOpt] = useState( selectedBrand)

    const selectedModel = rig?.model? {_id:rig?.model._id,name:rig?.model.name, selected:true} : ''
    const [modelOpt, setModelOpt] = useState( selectedModel)


    let extFilter = Array.isArray(brandOpt) ? brandOpt.filter( o => o.selected ) : ''
    extFilter = Array.isArray(extFilter) && extFilter.length>0 ? extFilter : ''

    const navigate = useNavigate()

    const defaultValues = {
        name : rig?.name ? rig.name : randomCarName[Math.floor(Math.random() * randomCarName.length)],
        model : rig?.model ? rig?.model.name : '',
        brand : rig?.model?.brand ? rig?.model.brand.name : '',
        scale : rig?.model.scale ? rig?.model.scale : '',
        type : rig?.model.type ? rig?.model.type : '',
        energy : rig?.model.energy ? rig?.model.energy : '',
        image : rig?.image ? rig.image:null,
    }
    const { formState:{errors},setError, register,handleSubmit } = useForm({defaultValues})

    /**
     * Updates the rig model with the given values.
     * @param {Object} values - The values to update the rig model with.
     * @return {Promise<void>} - A promise that resolves when the rig model is updated successfully.
     */
    async function updateRig(values){
        console.log('UPD',{...values,id:rig._id})
        const response = await updateRigModelApi({...values,id:rig._id})
        typeof response === 'object' ? navigate(-1) : setError('generic',{type:'generic', message:response.toString()})    }

    /**
     * Creates a rig model using the given values.
     *
     * @param {Object} values - The values used to create the rig model.
     * @return {Promise<void>} - A promise that resolves when the rig model has been created successfully.
     */
    async function createRig(values){
        const response = await createRigApi({...values})
        typeof response === 'object' ? navigate(-1) : setError('generic',{type:'generic', message:response.toString()})
    }

   /**
    * Submits a form by updating or creating a rig model based on model existence.
    *
    * @param {Object} values - The values of the form to be submitted.
    * @return {void}
    */
   function submitForm(values){
       const choosenModel = modelOpt.filter( o => o.selected)[0]
       const choosenBrand = brandOpt.filter( o => o.selected)[0]

       const updatedRig = {...values, model:choosenModel,brand: choosenBrand }

        if (rig) {
            updateRig(updatedRig);
        } else {
            createRig(updatedRig);
        }

   }

    function handleFileChange(e){
        if (e.target.files) {
            setImage(e.target.files[0]);
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
            <form aria-label={'rigForm'} onSubmit={handleSubmit(submitForm)}>
                <div className={`d-flex flex-column mb-20`}>
                    <label htmlFor="name">Name</label>
                    <input {...register('name')} type="text" id={'name'}/>
                </div>
                <div className={`d-flex flex-column `}>
                    <label htmlFor="brand">Brand</label>
                    <span className={`mb-20`}>
                        <SearchAndSelect options={brandOpt} setOptions={setBrandOpt} searchItemFn={searchBrand}/>
                    </span>
                </div>
                <div className={`d-flex flex-column `}>
                    <label htmlFor="model">Model</label>
                    <span className={`mb-20`}>
                        <SearchAndSelect options={modelOpt} setOptions={setModelOpt} searchItemFn={searchRigModel}
                                         externalFilter={extFilter.length ? extFilter : ''}/>
                    </span>
                </div>
                <div className={`d-flex flex-column `}>
                    <label htmlFor="model">Photo</label>
                    <span className={`mb-20`}>
                        <input aria-label="photo-upload" {...register('image')} id="file" type="file" onChange={handleFileChange}/>
                    </span>
                    {rig?.image &&
                        <img src={`/uploads/${defaultValues.image}`} alt="image"/>
                    }
                </div>

                <div className={`d-flex flex-row flex-fill`}>
                    <button className={`btn btn-primary mr-5`} >Save</button>
                    <button onClick={() => navigate(-1)} className={`btn btn-reverse-primary`}>Cancel</button>
                    {errors?.generic && <p className={'error'}>{errors.generic.message}</p>}
                </div>
            </form>
        </div>
    )
}

export default AdminRigForm;