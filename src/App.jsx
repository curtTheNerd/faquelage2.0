// import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Background from "./components/Background";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Datenschutz from "./components/contentComponents/Datenschutz";
import About from "./components/contentComponents/About";
import Media from "./components/contentComponents/Media";
import Tour from "./components/contentComponents/Tour";
import News from "./components/contentComponents/News";

const App = () => {
  return(
    <>
      <Background />
      <Navbar />
      <News />
      <Tour />
      <About />

      <Media />
      <Datenschutz />
      <Footer />
    </>
  )
}

export default App;