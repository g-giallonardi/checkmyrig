import {NavLink} from "react-router-dom";
function AdminMenu(){
    return(
        <div >
            <h3>Admin Panel</h3>
            <ul>
                <li>
                    <NavLink  to={'/admin/users'}>
                        Users
                    </NavLink>
                </li>
                <li>
                    <NavLink to={'/admin/rigs'}>
                        Rigs
                    </NavLink>
                </li>
                <li>
                    <NavLink to={'/admin/brands'}>
                        Brands
                    </NavLink>
                </li>
                <li>
                    <NavLink to={'/admin/models'}>
                        Base models
                    </NavLink>
                </li>
                <li>
                    <NavLink to={'/admin/parts'}>
                        Parts
                    </NavLink>
                </li>
            </ul>
        </div>
    )
}

export default AdminMenu;