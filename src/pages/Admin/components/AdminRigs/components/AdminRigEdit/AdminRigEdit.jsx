import {useLoaderData} from "react-router-dom";
import AdminRigForm from "../AdminRigForm/AdminRigForm.jsx";

function AdminRigEdit() {
    const {rig, brands}  = useLoaderData()
    const formattedBrands = brands.map((d) => {
        return {...d, value: d._id, label: d.name};
    });
    return (
        <div className={`d-flex flex-fill flex-column`}>
            <h2 className={`mb-20 underlined underlinedActive`}>Edit model "{rig.name}" </h2>
            <AdminRigForm rig={rig} brands={formattedBrands}/>
        </div>
    )
}

export default AdminRigEdit;