import styles from "../../AdminBrands.module.scss";
import {NavLink, useLoaderData} from "react-router-dom";
import {useState} from "react";
import {deleteBrand} from "../../../../../../apis/brands.jsx";

function AdminBrandList() {
    const [brands, setBrands ] = useState( useLoaderData())
    function handleDelete(id) {
        deleteBrand(id)
        setBrands(brands.filter((b) => b._id !== id))
    }

    return (
        <table className={`${styles.table}`}>
            <thead>
            <tr>
                <th>Brand name</th>
                <th>Actions</th>
            </tr>
            </thead>
            <tbody>
            {Array.isArray(brands) ?
                    brands.map((b) => (
                            <tr key={b._id}>
                                <td>{b.name}</td>
                                <td>
                                    <small>
                                        <NavLink to={`edit/${b._id}`}>Edit</NavLink> / <span
                                        className={`${styles.actionLink}`} onClick={() => handleDelete(b._id)}>Delete</span>
                                    </small>
                                </td>
                            </tr>
                        )
                    )
                    : <tr>
                        <td colSpan={2}>Nothing to display</td>
                    </tr>
            }
                <tr>
                <td colSpan={2} >
                    <NavLink to={'new'}>
                        <button className={`btn btn-reverse-primary`}><i className="fas fa-plus-circle mr-5"></i> Add new</button>
                    </NavLink>
                </td>
            </tr>
            </tbody>
        </table>
    )
}

export default AdminBrandList;