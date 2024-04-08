import {useEffect, useState} from "react";

const DinosaurList = () => {

    const [dinosaurs, setDinosaurs] = useState([]);

    useEffect(() => {
        fetch("http://localhost:8080/api/dinosaurs")
            .then(response => response.json())
            .then(data => setDinosaurs(data))
    }, []);

    return <ul>
        {dinosaurs.map(({name}) => <li>{name}</li>
        )}
    </ul>;
};
export default DinosaurList;