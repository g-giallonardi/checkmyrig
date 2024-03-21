import {Outlet} from "react-router-dom";
import Header from "./components/Header/Header.jsx";
import {Suspense} from "react";

function App() {
  return (
      <div className={`d-flex flex-column appContainer`}>
          <Header/>
          <Suspense fallback={'Loading...'} >
              <Outlet/>
          </Suspense>
          {/*<Footer/>*/}
      </div>
  )
}

export default App
