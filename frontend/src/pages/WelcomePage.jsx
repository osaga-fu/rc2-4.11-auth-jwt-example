import {useEffect, useState} from "react";
import {Link} from "react-router-dom";

const WelcomePage = () => {
    const [greeting, setGreeting] = useState("Loading...");
    const [next, setNext] = useState(false);

    useEffect(() => {
        fetch("http://localhost:8080/welcome")
            .then(result => result.text())
            .then(text => setGreeting(text))
            .then(_ => setNext(true))
            .catch(e => console.log(e));
    }, []);

    return <p>
        {greeting}
        {next && <span> Go to <Link to="/dinosaurs">this link</Link> to see the dinosaur list</span>}
    </p>;
}
export default WelcomePage;