import { 
    BrowserRouter, 
    // Route, 
    Routes 
} from "react-router-dom"
import Navbar from "../components/Navbar"


const AppRouter = () => {
    return (
        <BrowserRouter>
            <Navbar />
            <Routes>
                <Route path="" element={} />
                <Route path="" element={} />
                <Route path="" element={} />
                <Route path="" element={} />
                <Route path="" element={} />
            </Routes>
        </BrowserRouter>
    )
}

export default AppRouter