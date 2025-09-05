import { createBrowserRouter, createRoutesFromElements, Route, RouterProvider } from "react-router-dom";

import HomePage from "./components/contentComponents/HomePage";
import About from "./components/contentComponents/About";
import Media from "./components/contentComponents/Media";
import Tour from "./components/contentComponents/Tour";
import Datenschutz from "./components/contentComponents/Datenschutz";
import RootLayout from "./layout/RootLayout";

const App = () => {
  
  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route path="/" element={<RootLayout />} >
        <Route index element={<HomePage />} />
        <Route path='tour' element={<Tour />} />
        <Route path='about' element={<About />} />
        <Route path='media' element={<Media />} />
        <Route path='datenschutz' element={<Datenschutz />} />
      </Route>    
    )
  )

  return(
    <RouterProvider router={router} />
  )
}

export default App;