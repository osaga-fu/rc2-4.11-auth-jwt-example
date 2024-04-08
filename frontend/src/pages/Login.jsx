import {useState} from "react";
import {useAuthenticationContext} from "../authentication/AuthenticationContext.jsx";
import {Navigate, useNavigate} from "react-router-dom";

const Login = () => {

    const [values, setValues] = useState({
        name: '',
        password: ''
    });

    const {login} = useAuthenticationContext();
    const navigate = useNavigate();

    const handleSubmit = (e) => {
        e.preventDefault();
        login(values.name, values.password)
            .then(() => navigate("/"));

    };

    return <form onSubmit={handleSubmit}
                 style={{display: "flex", flexDirection: "column", alignItems: "center", padding: "3em"}}>
        <label htmlFor="name">
            Name
            <input name="name"
                   id="name"
                   placeholder="name"
                   value={values.name}
                   onChange={(e) => setValues({...values, name: e.target.value})}/>
        </label>
        <label htmlFor="password">
            Password
            <input name="password"
                   id="password"
                   placeholder="password"
                   value={values.password}
                   onChange={(e) => setValues({...values, password: e.target.value})}/>
        </label>
        <input type="submit" value="Login"/>

    </form>;
};

export default Login;