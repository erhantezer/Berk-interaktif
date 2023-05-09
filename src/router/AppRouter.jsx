import { 
    BrowserRouter, 
    Route, 
    Routes 
} from "react-router-dom"
import Navbar from "../components/Navbar"
import Contact from "../pages/Contact"
import About from "../pages/About"
import Home from "../pages/Home"
import Vega from "../pages/Vega"
import Edönüsüm from "../pages/Edönüsüm"
import Hizmet from "../pages/Hizmet"
import Referans from "../pages/Referans"
import Destek from "../pages/Destek"


const AppRouter = () => {
    return (
        <BrowserRouter>
            <Navbar />
            <Routes>
                <Route path="" element={<Home/>} />
                <Route path="about" element={<About/>} />                    
                <Route path="vegayazilim" element={<Vega/>} />
                <Route path="edönüsüm" element={<Edönüsüm/>} />
                <Route path="hizmet" element={<Hizmet/>} />
                <Route path="referans" element={<Referans/>} />
                <Route path="destek" element={<Destek/>} />
                <Route path="contact" element={<Contact />} />
            </Routes>
        </BrowserRouter>
    )
}

export default AppRouter