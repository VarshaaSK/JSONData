import React from 'react'
import { Link } from 'react-router-dom'

function Home() {
  return (
    <div>
        <h1>Hello</h1>
        <Link to = "/about" data-testid = "linkId">Go To About</Link>
        <br/>
        <Link to = "/data" data-testid = "linkId">Go To Data</Link>
        <br/>
        <Link to = "/newdata" data-testid = "linkId">Go To New Data</Link>
    </div>
  )
}

export default Home