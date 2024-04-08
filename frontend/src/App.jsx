import {useState} from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import {BrowserRouter, Route, Routes} from "react-router-dom";
import {AuthenticationProvider} from "./authentication/AuthenticationContext.jsx";
import PrivateRoute from "./other/PrivateRoute.jsx";
import Layout from "./pages/Layout.jsx";
import Login from "./pages/Login.jsx";
import WelcomePage from "./pages/WelcomePage.jsx";
import DinosaurList from "./pages/DinosaurList.jsx";
import Logout from "./pages/Logout.jsx";

function App() {
    const [count, setCount] = useState(0)

    return (
        <AuthenticationProvider>
            <BrowserRouter>
                <Routes>
                    <Route path="/" element={<Layout/>}>
                        <Route path="login" element={<Login/>}/>
                        <Route path="logout" element={<Logout/>}/>
                        <Route element={<PrivateRoute loginPath="/login"/>}>
                            <Route index element={<WelcomePage/>}/>
                            <Route path={"/dinosaurs"} element={<DinosaurList/>}/>
                        </Route>
                    </Route>
                </Routes>
            </BrowserRouter>
        </AuthenticationProvider>
    )
}

export default App;
