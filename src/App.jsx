import Header from "./components/Header.jsx";
import Content from "./components/Content.jsx";
import Footer from "./components/Footer.jsx";
import styles from "./App.module.scss"
function App() {
  return (
      <div className={`d-flex flex-column ${styles.appContainer}`}>
          <Header/>
          <Content />
          <Footer/>
      </div>
  )
}

export default App
