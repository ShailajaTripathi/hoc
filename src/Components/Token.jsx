import React,{useState} from 'react'
import './style.css'

function Token() {
    const [token, setToken] = useState(0);

  return (
    <div>
        <h3>{token}</h3>
        <button onClick={()=>setToken(token+1)}>Buy Token</button>
    </div>
  )
}

export default Token