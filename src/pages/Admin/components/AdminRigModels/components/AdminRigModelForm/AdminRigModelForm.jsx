import {energyOptions, scaleOptions, typeOptions} from "../../../../../../assets/datas/rigsModelConst.js";
import {useNavigate} from "react-router-dom";
import {useForm} from "react-hook-form";
import _ from "lodash";
import {createRigModel as createRigModelApi, updateRigModel as updateRigModelApi} from "../../../../../../apis/rigs.jsx";
import styles from './AdminRigModelForm.module.scss'
import {useEffect, useState} from "react";
import {searchBrand} from "../../../../../../apis/brands.jsx";
import {value} from "lodash/seq.js";

function AdminRigModelForm({ model }) {
    const selectedBrand = model?.brand ? {_id:model.brand._id,name:model.brand.name, selected:true} : ''

    const [inputValue, setInputvalue] = useState('')
    const [brandOpt, setBrandOpt] = useState( selectedBrand)
    const navigate = useNavigate()
    const defaultValues = {
        name : model?.name ? model.name : '',
        brand : model?.brand ? model.brand._id : '',
        scale : model?.scale ? model.scale : '',
        type : model?.type ? model.type : '',
        energy : model?.energy ? model.energy : ''
    }
    const { formState:{errors},setError, register,handleSubmit } = useForm({defaultValues})
    console.log(brandOpt)

    useEffect(
        () => {
            const newOpt = {_id:0, name: inputValue}
            const fetchData = async () => {
                const data = await searchBrand({ name: inputValue})

                setBrandOpt([selectedBrand, ...data,newOpt])
            }
            if(inputValue.length >= 3) {
                fetchData()
            }
            else if(inputValue.length > 0){
                setBrandOpt([selectedBrand,newOpt])
            }
            else{
                //TODO : keep empty if !model
                setBrandOpt([selectedBrand])
            }
        }
    ,[inputValue])


    async function updateRigModel(values){
        const response = await updateRigModelApi({...values,id:model._id})
        typeof response === 'object' ? navigate(-1) : setError('generic',{type:'generic', message:response.toString()})    }

    async function createRigModel(values){
        const response = await createRigModelApi({...values})
        typeof response === 'object' ? navigate(-1) : setError('generic',{type:'generic', message:response.toString()})
    }

   function submitForm(values){
        const choosenBrand = brandOpt.filter( o => o.selected)
        const updatedModel = {...values, brand:choosenBrand[0]}

        if (model) {
             updateRigModel(updatedModel);
        } else {
             createRigModel(updatedModel);
        }

   }
   async function handleSearchBrands(value){
        setInputvalue(value)
    }

    function handleSelectBrand(e,idx, value){
        e.preventDefault()
        setBrandOpt(brandOpt.map((o) => {
            if (o._id === idx) {
                return { ...o, selected: true };
            } else {
                return { ...o, selected: false };
            }
        }));
        console.log(idx, value)
    }

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
                        {
                            Array.isArray(brandOpt) && brandOpt.length ? brandOpt.map(
                                    (o) => <button onClick={(e) => handleSelectBrand(e,o._id, o.name)} key={o._id} className={`btn btn-primary mr-5 ${o.selected ? styles.selectedBrand : ''}`}>{o.selected ?
                                        <i className="fas fa-check-circle"></i> : o._id == 0 ?
                                            <i className="fas fa-plus-circle"></i> : ''} {o.name} </button>
                            ) : ''
                        }
                    </span>
                    <div className={'d-flex flex-row'}>
                        Search: <input type="text" value={inputValue} className={`mb-20`}
                                       onChange={e => handleSearchBrands(e.target.value)}/>
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