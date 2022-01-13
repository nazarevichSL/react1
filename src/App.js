import {useEffect, useState} from "react";
import User from "./components/User";

export default function App() {

    let [usersList, setUsersList] = useState([]);

    useEffect (() => {
        fetch('https://jsonplaceholder.typicode.com/users')
            .then(response => response.json())
            .then(users => {
                setUsersList(users);
            })
    }, []);
    return (
        <div>
            {usersList.map(value => <User id={value.id} name={value.name} username={value.username}/>)}
        </div>
    );
}
