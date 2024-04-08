import {Navigate} from 'react-router-dom';
import {useAuthenticationContext} from "../authentication/AuthenticationContext.jsx";

const Logout = () => {

    const {logout} = useAuthenticationContext();

    logout();

    return <Navigate to="/"/>;
}

export default Logout;