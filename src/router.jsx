import {lazy} from "react";
import {createBrowserRouter} from "react-router-dom";
import App from "./App.jsx";
import rigModelFormLoader from "./loaders/rigModelFormLoader.jsx";
import brandListLoader from "./loaders/brandListLoader.jsx";
import brandFormLoader from "./loaders/brandFormLoader.jsx";
import rigModelListLoader from "./loaders/rigModelListLoader.jsx";
import partListLoader from "./loaders/partListLoader.jsx";
import partFormLoader from "./loaders/partFormLoader.jsx";


const Homepage = lazy(() => import("./pages/Homepage/Homepage.jsx"))
const Admin = lazy(() => import("./pages/Admin/Admin.jsx"))
const AdminUsers = lazy(() => import("./pages/Admin/components/AdminUsers/AdminUsers.jsx"))

const AdminBrands = lazy(() => import("./pages/Admin/components/AdminBrands/AdminBrands.jsx"))
const AdminBrandList = lazy(() => import("./pages/Admin/components/AdminBrands/components/AdminBrandList/AdminBrandList.jsx"))
const AdminBrandEdit = lazy(() => import("./pages/Admin/components/AdminBrands/components/AdminBrandEdit/AdminBrandEdit.jsx"))
const AdminBrandCreate = lazy(() => import("./pages/Admin/components/AdminBrands/components/AdminBrandCreate/AdminBrandCreate.jsx"))

const AdminRigModels = lazy(() => import("./pages/Admin/components/AdminRigModels/AdminRigModels.jsx"))
const AdminRigModelList = lazy(() => import("./pages/Admin/components/AdminRigModels/components/AdminRigModelList/AdminRigModelList.jsx"))
const AdminRigModelCreate = lazy(() => import("./pages/Admin/components/AdminRigModels/components/AdminRigModelCreate/AdminRigModelCreate.jsx"))
const AdminRigModelEdit = lazy(() => import("./pages/Admin/components/AdminRigModels/components/AdminRigModelEdit/AdminRigModelEdit.jsx"))

const AdminParts = lazy(() => import("./pages/Admin/components/AdminParts/AdminParts.jsx"))
const AdminPartList = lazy(() => import("./pages/Admin/components/AdminParts/components/AdminPartList/AdminPartList.jsx"))
const AdminPartCreate = lazy(() => import("./pages/Admin/components/AdminParts/components/AdminPartCreate/AdminPartCreate.jsx"))
const AdminPartEdit = lazy(() => import("./pages/Admin/components/AdminParts/components/AdminPartEdit/AdminPartEdit.jsx"))



export const router = createBrowserRouter([
	{
		path: '/',
		element: <App />,
		children: [
			{
				index: true,
				element: <Homepage />
			},
			{
				path: 'admin',
				element: <Admin />,
				children:[
					{
						path: 'users',
						element: <AdminUsers/>
					}, {
						path: 'brands',
						element: <AdminBrands/>,
						children:[
							{
								index: true,
								loader: brandListLoader,
								element: <AdminBrandList />
							}, {
								path: 'edit/:brandId',
								loader : ({ params }) => {
									return brandFormLoader(params.brandId);
								},
								element: <AdminBrandEdit />
							}, {
								path: 'new/',
								element: <AdminBrandCreate />
							},
						]
					}, {
						path: 'models',
						element: <AdminRigModels/>,
						children:[
							{
								index: true,
								loader: rigModelListLoader,
								element: <AdminRigModelList />
							}, {
								path: 'edit/:rigModelId',
								loader: ({params}) => {
									return rigModelFormLoader(params.rigModelId);
								},
								element: <AdminRigModelEdit/>
							}, {
								path: 'new/',
								loader: () => rigModelFormLoader(),
								element: <AdminRigModelCreate />
							},
						]
					}, {
						path: 'parts',
						element: <AdminParts/>,
						children:[
							{
								index: true,
								loader: partListLoader,
								element: <AdminPartList />
							}
							, {
								path: 'edit/:partId',
								loader: ({params}) => {
									return partFormLoader(params.partId);
								},
								element: <AdminPartEdit/>
							}
							, {
								path: 'new/',
								loader: () => partFormLoader(),
								element: <AdminPartCreate />
							},
						]
					}
				]
			}
		]
	}
])