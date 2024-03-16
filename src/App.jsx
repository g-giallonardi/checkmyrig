import {Outlet} from "react-router-dom";
import Header from "./components/Header/Header.jsx";

function App() {
  return (
      <div className={`d-flex flex-column appContainer`}>
          <Header/>
          <Outlet/>
          {/*<Footer/>*/}
      </div>
  )
}

export default App
