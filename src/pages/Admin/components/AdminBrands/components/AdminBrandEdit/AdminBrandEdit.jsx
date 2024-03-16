import { useLoaderData } from "react-router-dom";
import AdminBrandForm from "../AdminBrandForm/AdminBrandForm.jsx";

function AdminBrandEdit() {
    const brand  = useLoaderData();

    return (
        <div className={`d-flex flex-fill flex-column`}>
            <h2 className={`mb-20 underlined underlinedActive`}>Edit brand "{brand.name}" </h2>
            <AdminBrandForm brand={brand}/>
        </div>
    )
}

export default AdminBrandEdit;