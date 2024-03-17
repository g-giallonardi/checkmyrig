import {useLoaderData} from "react-router-dom";
import AdminPartForm from "../AdminPartForm/AdminPartForm.jsx";

function AdminPartEdit() {
    const {part, brands}  = useLoaderData()
    const formattedBrands = brands.map((d) => {
        return {...d, value: d._id, label: d.name};
    });
    return (
        <div className={`d-flex flex-fill flex-column`}>
            <h2 className={`mb-20 underlined underlinedActive`}>Edit part "{part.name}" </h2>
            <AdminPartForm part={part} brands={formattedBrands}/>
        </div>
    )
}

export default AdminPartEdit;