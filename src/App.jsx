import {Outlet} from "react-router-dom";
import Header from "./components/Header/Header.jsx";
import {Suspense} from "react";

function App() {
  return (
      <div className={`d-flex flex-fill justify-content-center appContainer `}>
          <Header/>
          <div className={`mainContainer`}>
              <Suspense fallback={'Loading...'} >
                  <Outlet/>
              </Suspense>
          </div>
          {/*<Footer/>*/}
      </div>
  )
}

export default App
