import {useEffect, useState} from "react";
import {fetchUsers} from "../../../../apis/users.jsx";
import styles from './AdminUsers.module.scss'

function AdminUsers(){
    const [ users, setUsers ] = useState([])

    useEffect(
         () => {
             const asyncFn = async () => setUsers( await fetchUsers() )
             asyncFn()
         }
    ,[])
    console.log(users)
    return(
        <div className={`d-flex flex-fill flex-column`}>
            <h2 className={`mb-20`}>Users administration</h2>
            <div>
                <table className={`${styles.table}`}>
                    <thead>
                    <tr>
                        <th>Username</th>
                        <th>Email</th>
                        <th>Actions</th>
                    </tr>
                    </thead>
                    <tbody>
                    {
                        users.map( (u) =>(
                                <tr key={u._id}>
                                    <td>{u.username}</td>
                                    <td>{u.email}</td>
                                    <td>
                                        <small>
                                            Edit / Delete
                                        </small>
                                    </td>
                                </tr>
                            )
                        )
                    }
                    </tbody>
                </table>
            </div>
        </div>
    )
}

export default AdminUsers;