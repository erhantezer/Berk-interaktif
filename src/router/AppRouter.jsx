import { 
    BrowserRouter, 
    Route, 
    Routes 
} from "react-router-dom"
import Navbar from "../components/Navbar"
import Contact from "../pages/Contact"
import About from "../pages/About"


const AppRouter = () => {
    return (
        <BrowserRouter>
            <Navbar />
            <Routes>
                <Route path="about" element={<About/>} />
                <Route path="contact" element={<Contact/>} />
                {/* <Route path="" element={} />
                <Route path="" element={} />
                <Route path="" element={} /> */}
            </Routes>
        </BrowserRouter>
    )
}

export default AppRouter