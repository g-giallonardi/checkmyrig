import {useLoaderData} from "react-router-dom";
import AdminRigModelForm from "../AdminRigModelForm/AdminRigModelForm.jsx";

function AdminRigModelEdit() {
    const {model, brands}  = useLoaderData()
    console.log(brands)
    const formattedBrands = brands.map((d) => {
        return {...d, value: d._id, label: d.name};
    });
    return (
        <div className={`d-flex flex-fill flex-column`}>
            <h2 className={`mb-20 underlined underlinedActive`}>Edit model "{model.name}" </h2>
            <AdminRigModelForm model={model} brands={formattedBrands}/>
        </div>
    )
}

export default AdminRigModelEdit;