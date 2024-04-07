import styles from "../../AdminRigs.module.scss";
import {NavLink, useLoaderData} from "react-router-dom";
import {useState} from "react";
import {deleteRig} from "../../../../../../apis/apiRigs.jsx";
// import {deleteRigModel} from "../../../../../../apis/apiRigs.jsx";

function AdminRigList() {
    const  { rigs : rigsLoaded } = useLoaderData()
    const [rigs, setRigs ] = useState( rigsLoaded )
    console.log(rigs)
    function handleDelete(id) {
        deleteRig(id)
        setRigs(rigs.filter((r) => r._id !== id))
    }
    return (
        <table className={`${styles.table}`}>
            <thead>
            <tr>
                <th>Name</th>
                <th>Based on</th>
                <th>Scale</th>
                <th>Type</th>
                <th>Energy</th>
                <th>Actions</th>
            </tr>
            </thead>
            <tbody>
            {Array.isArray(rigs) ?
                rigs.map((m) => (
                        <tr key={m._id}>
                            <td>{m.name} <small>(Snuflruf's)</small></td>
                            <td>{m.model.name ? m.model.brand.name+' - '+m.model.name : <i className="fas fa-exclamation-triangle"></i>}</td>
                            <td>{m.model.scale}</td>
                            <td>{m.model.type}</td>
                            <td>{m.model.energy}</td>
                            <td>
                                <small>
                                    <NavLink to={`/admin/rigs/edit/${m._id}`}>Edit</NavLink> / <span
                                    className={`${styles.actionLink}`} onClick={() => handleDelete(m._id)}>Delete</span>
                                </small>
                            </td>
                        </tr>
                    )
                )
                : <tr><td colSpan={6}>Nothing to display</td></tr>}
                <tr>
                    <td colSpan={2}>
                        <NavLink to={'/admin/rigs/new'}>
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

export default AdminRigList;