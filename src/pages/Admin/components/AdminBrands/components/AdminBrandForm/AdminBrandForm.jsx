import _ from "lodash";
import { useNavigate} from "react-router-dom";
import {useForm} from "react-hook-form";

import styles from './AdminBrandForm.module.scss'
import {createBrand as createBrandApi, updateBrand as updateBrandApi} from "../../../../../../apis/brands.jsx";

function AdminBrandForm({brand}) {
    const navigate = useNavigate()
    const defaultValues = {
        name : brand?.name ? brand.name : '',
    }

    const { formState:{errors},setError, register,handleSubmit } = useForm({defaultValues})

    async function updateBrand(values){
        const response = await updateBrandApi({...values,id:brand._id})
        _.isEqual(response,values) ? navigate(-1) : setError('generic',{type:'generic', message:response.toString()})
    }

    async function createBrand(values){
        const response = await createBrandApi(values)
        typeof response === 'object' ? navigate(-1) : setError('generic',{type:'generic', message:response.toString()})
    }

    function submitForm(values){
        if (brand) {
            updateBrand(values);
        } else {
            createBrand(values)
        }
    }

    return (
        <div className={`${styles.formContainer}`}>
            <form onSubmit={handleSubmit(submitForm)}>
                <div className={`d-flex flex-column mb-20`}>
                    <label htmlFor="name">Name</label>
                    <input {...register('name')} type="text" id={'name'}/>
                </div>

                <div className={`d-flex flex-row flex-fill`}>
                    <button className={`btn btn-primary mr-5`}>Save</button>
                    <button className={`btn btn-reverse-primary`}>Cancel</button>
                    {errors?.generic && <p className={'error'}>{errors.generic.message}</p>}
                </div>
            </form>
        </div>
    )
}

export default AdminBrandForm;