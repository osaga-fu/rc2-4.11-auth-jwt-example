import {useEffect, useState} from "react";
import {useAuthenticationContext} from "../authentication/AuthenticationContext.jsx";

const DinosaurList = () => {

    const [dinosaurs, setDinosaurs] = useState([]);
    const {getAuthenticationHeader} = useAuthenticationContext();

    useEffect(() => {
        fetch("http://localhost:8080/api/dinosaurs",
            {headers: {"Authorization": getAuthenticationHeader()}})
            .then(response => response.json())
            .then(data => setDinosaurs(data))
    }, []);

    return <ul>
        {dinosaurs.map(({name}) => <li>{name}</li>
        )}
    </ul>;
};
export default DinosaurList;