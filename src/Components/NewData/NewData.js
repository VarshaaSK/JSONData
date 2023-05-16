import React from 'react'
import axios from "axios";
import {useQuery} from 'react-query'

function NewData() {
    const {data,isLoading,isError} = useQuery('unique-name', () => {
        return axios.get("http://localhost:4000/shapes");
    })

    if(isLoading){
        return <h2>Still Loding</h2>
    }

    if(isError){
        console.log(isError)
        alert("Web Site Game");
    }
  return (
    <div>
        <h1>Colors</h1>
        {
            data.data.map((item,index) => {
                return <div key={index}>
                    {item.Color}
                </div>
            })
        }
    </div>
  )
}

export default NewData