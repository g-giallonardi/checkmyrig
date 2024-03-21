import styles from "../../AdminRigModels.module.scss";
import {NavLink, useLoaderData} from "react-router-dom";
import {useState} from "react";
import {deleteRigModel} from "../../../../../../apis/rigs.jsx";


function AdminRigModelList() {
    const [models, setModels ] = useState( useLoaderData())
    console.log(models)
    function handleDelete(id) {
        deleteRigModel(id)
        setModels(models.filter((m) => m._id !== id))
    }
    return (
        <table className={`${styles.table}`}>
            <thead>
            <tr>
                <th>Model</th>
                <th>Brand</th>
                <th>Scale</th>
                <th>Type</th>
                <th>Energy</th>
                <th>Actions</th>
            </tr>
            </thead>
            <tbody>
            {Array.isArray(models) ?
                models.map((m) => (
                        <tr key={m._id}>
                            <td>{m.name}</td>
                            <td>{m.brand?.name ? m.brand.name : <i className="fas fa-exclamation-triangle"></i>}</td>
                            <td>{m.scale}</td>
                            <td>{m.type}</td>
                            <td>{m.energy}</td>
                            <td>
                                <small>
                                    <NavLink to={`edit/${m._id}`}>Edit</NavLink> / <span
                                    className={`${styles.actionLink}`} onClick={() => handleDelete(m._id)}>Delete</span>
                                </small>
                            </td>
                        </tr>
                    )
                )
            : <tr>
                        <td colSpan={5}>Nothing to display</td>
                    </tr>
            }
            <tr>
                <td colSpan={2}>
                    <NavLink to={'new'}>
                        <button className={`btn btn-reverse-primary`}><i className="fas fa-plus-circle mr-5"></i> Add
                            new
                        </button>
                    </NavLink>
                </td>
            </tr>
            </tbody>
        </table>
    )
}

export default AdminRigModelList;