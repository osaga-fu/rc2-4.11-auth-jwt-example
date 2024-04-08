import { Navigate, Outlet } from "react-router-dom";
import PropTypes from 'prop-types';
import {useAuthenticationContext} from "../authentication/AuthenticationContext.jsx";

const PrivateRoute = ({ loginPath }) => {

    const { isLoggedIn } = useAuthenticationContext();

    return isLoggedIn() ? <Outlet /> : <Navigate to={loginPath} />
}

PrivateRoute.propTypes = {
    loginPath: PropTypes.string.isRequired
}

export default PrivateRoute;