import AdminRigForm from "../AdminRigForm/AdminRigForm.jsx";
import {useLoaderData} from "react-router-dom";

function AdminRigCreate() {
    const {brands} = useLoaderData()
    return (
        <div className={`d-flex flex-fill flex-column`}>
            <h2 className={`mb-20 underlined underlinedActive`}>Create new rig </h2>
            <AdminRigForm brands={brands}/>
        </div>
    )
}

export default AdminRigCreate;