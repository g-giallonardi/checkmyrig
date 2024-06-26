import {useState} from "react";
import {useNavigate} from "react-router-dom";
import {useForm} from "react-hook-form";
import {createRigModel as createRigModelApi, updateRigModel as updateRigModelApi} from "../../../../../../apis/apiRigs.jsx";
import SearchAndSelect from "../../../../../../components/SearchAndSelect/SearchAndSelect.jsx";
import {energyOptions, scaleOptions, typeOptions} from "../../../../../../assets/datas/rigsModelConst.js";
import styles from './AdminRigModelForm.module.scss'
import * as Yup from "yup";
import {yupResolver} from "@hookform/resolvers/yup";
import {searchBrand} from "../../../../../../apis/apiBrands.jsx";

/**
 * Renders a form for creating or updating a rig model.
 *
 * @param {Object} params - The parameter object.
 * @param {Object} params.model - The model object containing initial values.
 *
 * @return {JSX.Element} The rendered form.
 */
function AdminRigModelForm({ model }) {

    const selectedBrand = model?.brand ? {_id:model.brand._id,name:model.brand.name, selected:true} : ''
    const [brandOpt, setBrandOpt] = useState( selectedBrand)
    const navigate = useNavigate()

    const rigModelSchema = Yup.object({
        name: Yup.string()
            .required("Required field"),
        brand: Yup.string()
            .required("Required field"),
        scale: Yup.string()
            .required("Required field"),
        type: Yup.string()
            .required("Required field"),
        energy: Yup.string()
            .required("Required field"),
    });

    const defaultValues = {
        name : model?.name ? model.name : '',
        brand : model?.brand ? model.brand._id : '',
        scale : model?.scale ? model.scale : '',
        type : model?.type ? model.type : '',
        energy : model?.energy ? model.energy : ''
    }
    const {
        formState:{errors},
        setError,
        register,
        handleSubmit
    } = useForm({
        resolver: yupResolver(rigModelSchema),
        defaultValues
    })

    /**
     * Updates the rig model with the given values.
     * @param {Object} values - The values to update the rig model with.
     * @return {Promise<void>} - A promise that resolves when the rig model is updated successfully.
     */
    async function updateRigModel(values){
        const response = await updateRigModelApi({...values,id:model._id})
        typeof response === 'object' ? navigate(-1) : setError('generic',{type:'generic', message:response.toString()})    }

    /**
     * Creates a rig model using the given values.
     *
     * @param {Object} values - The values used to create the rig model.
     * @return {Promise<void>} - A promise that resolves when the rig model has been created successfully.
     */
    async function createRigModel(values){
        const response = await createRigModelApi({...values})
        typeof response === 'object' ? navigate(-1) : setError('generic',{type:'generic', message:response.toString()})
    }

   /**
    * Submits a form by updating or creating a rig model based on model existence.
    *
    * @param {Object} values - The values of the form to be submitted.
    * @return {void}
    */
   function submitForm(values){
       console.info('ici?')
       const choosenBrand = brandOpt.filter( o => o.selected)
       const updatedModel = {...values, brand:choosenBrand[0]}

       if (model) {
           updateRigModel(updatedModel);
       } else {
           createRigModel(updatedModel);
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
                    <span className={`mb-20`}>
                        <SearchAndSelect options={brandOpt} setOptions={setBrandOpt} searchItemFn={searchBrand} />
                    </span>
                    <div className={'d-flex flex-row'}>
                        Search:

                    </div>
                </div>
                <div className={`d-flex flex-column mb-20`}>
                    <label htmlFor="scale">Scale</label>
                    <select name="scale" id="scale" {...register('scale')}>
                        {
                            scaleOptions.map((scale) => (
                                <option key={scale.value} value={scale.value}>{scale.label}</option>
                            ))
                        }
                    </select>
                </div>
                <div className={`d-flex flex-column mb-20`}>
                    <label htmlFor="type">Type</label>
                    <select name="type" id="type" {...register('type')}>
                        {
                            typeOptions.map((type) => (
                                <option key={type.value} value={type.value}>{type.label}</option>
                            ))
                        }
                    </select>
                </div>
                <div className={`d-flex flex-column mb-20`}>
                    <label htmlFor="energy">Energy</label>
                    <select name="energy" id="energy" {...register('energy')}>
                        {
                            energyOptions.map((energy) => (
                                <option key={energy.value} value={energy.value}>{energy.label}</option>
                            ))
                        }
                    </select>
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

export default AdminRigModelForm;