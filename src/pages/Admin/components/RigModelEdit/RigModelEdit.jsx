import {useLoaderData, useNavigate} from "react-router-dom";
import AdminRigModelForm from "../AdminRigModels/components/AdminRigModelForm/AdminRigModelForm.jsx";

function RigModelEdit() {
    const model = useLoaderData()
    return (
        <div className={`d-flex flex-fill flex-column`}>
            <h2 className={`mb-20`}>Edit {model.name} </h2>
            <AdminRigModelForm model={model} />
        </div>
    )
}

export default RigModelEdit;