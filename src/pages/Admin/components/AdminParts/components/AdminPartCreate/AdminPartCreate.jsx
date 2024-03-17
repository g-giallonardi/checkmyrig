import AdminPartForm from "../AdminPartForm/AdminPartForm.jsx";
import {useLoaderData} from "react-router-dom";

function AdminPartCreate() {
    const {brands} = useLoaderData()
    console.log('ici',brands)
    return (
        <div className={`d-flex flex-fill flex-column`}>
            <h2 className={`mb-20 underlined underlinedActive`}>Create new rig part </h2>
            <AdminPartForm brands={brands}/>
        </div>
    )
}

export default AdminPartCreate;