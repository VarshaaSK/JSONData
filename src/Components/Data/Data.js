
import React, { useEffect, useState } from 'react';
import axios from "axios";

function Data() {

    const [users, setUsers] = useState([]);

    const fetchUsers = async () => {
        await axios.get("http://localhost:4000/shapes")
        .then((response)=>{
            console.log(response.data);
            setUsers(response.data);
        });
        
    }

    useEffect(() => {
        fetchUsers();
    },[]);


  return (
    <div>
        <h1>Colors</h1>
        {
            users.map((item,index) => (
                <div data-testid = "data" key={index}>
                    {item.Color}
                </div>
            ))
        }
    </div>
  )
}

export default Data