import {useState} from "react";
import {NavLink, useLoaderData} from "react-router-dom";
import {deletePart} from "../../../../../../apis/parts.jsx";
import styles from "../../AdminParts.module.scss";

function AdminPartList() {
    const [parts, setParts ] = useState( useLoaderData())
    function handleDelete(id) {
        deletePart(id)
        setParts(parts.filter((p) => p._id !== id))
    }
    return (
        <table className={`${styles.table}`}>
            <thead>
            <tr>
                <th>Model</th>
                <th>Brand</th>
                <th>Type</th>
                <th>Actions</th>
            </tr>
            </thead>
            <tbody>
            {Array.isArray(parts) ?
                parts.map((p) => (
                        <tr key={p._id}>
                            <td>{p.name}</td>
                            <td>{p.brand?.name ? p.brand.name : <i className="fas fa-exclamation-triangle"></i>}</td>
                            <td>{p.type}</td>
                            <td>
                                <small>
                                    <NavLink to={`edit/${p._id}`}>Edit</NavLink> / <span
                                    className={`${styles.actionLink}`} onClick={() => handleDelete(p._id)}>Delete</span>
                                </small>
                            </td>
                        </tr>
                    )
                )
            : <tr><td colSpan={4}>Nothing to display</td></tr>
            }
            <tr>
                <td colSpan={4}>
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

export default AdminPartList;