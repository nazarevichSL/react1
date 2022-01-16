import {useEffect, useState} from "react";
import User from "../User/User";

const Users = () => {
    const [users,setUsers]=useState([]);
    useEffect(()=>{
    fetch('https://jsonplaceholder.typicode.com/users')
        .then (value => value.json())
        .then(value => setUsers(value))
    },[])
    return (
<div>
    {users.map(value=><User key={value.id} id={value.id} name={value.name} usurname={value.usurname} email={value.email} street={value.address.street}/>)}

</div>
    );
};
export default Users;