import AdminRigModelForm from "../AdminRigModelForm/AdminRigModelForm.jsx";
import {useLoaderData} from "react-router-dom";

function AdminRigModelCreate() {
    const {brands} = useLoaderData()
    return (
        <div className={`d-flex flex-fill flex-column`}>
            <h2 className={`mb-20 underlined underlinedActive`}>Create new model </h2>
            <AdminRigModelForm brands={brands}/>
        </div>
    )
}

export default AdminRigModelCreate;