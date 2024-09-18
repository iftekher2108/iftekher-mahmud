import {BrowserRouter, Routes,Route}from "react-router-dom";
import ScrollToTop from './components/ScrollToTop.tsx'
import Home from "./pages/Home.tsx";
import Project from "./pages/Project.tsx";



function App() {
    return (
      <BrowserRouter>
      <ScrollToTop /> 
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="project" element={<Project/>}/>
        </Routes>
      </BrowserRouter>
    )
}

export default App