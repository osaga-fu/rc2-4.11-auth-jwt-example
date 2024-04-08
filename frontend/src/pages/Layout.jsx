import {Link, Outlet} from "react-router-dom";
import {useAuthenticationContext} from "../authentication/AuthenticationContext.jsx";

const Layout = () => {

    const { isLoggedIn } = useAuthenticationContext();

    return <main>
        <header style={{ width: "100%", borderBottom: "2px solid white"}}>
            This is the header
            {isLoggedIn() && <Link to="/logout"> (Logout)</Link>}
        </header>
        <Outlet/>
        <footer style={{ width: "100%", borderTop: "2px solid white"}}> This is the footer</footer>
    </main>;
}


export default Layout;
