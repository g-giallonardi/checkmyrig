import {useLoaderData, useNavigate} from "react-router-dom";
import AdminBrandForm from "../AdminBrandForm/AdminBrandForm.jsx";

function AdminBrandCreate() {

    return (
        <div className={`d-flex flex-fill flex-column`}>
            <h2 className={`mb-20 underlined underlinedActive`}>Create new brand </h2>
            <AdminBrandForm/>
        </div>
    )
}

export default AdminBrandCreate;