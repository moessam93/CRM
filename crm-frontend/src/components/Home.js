import React from 'react'
import Login from './Login'
const Home = ({isLogged}) => {
  return (
    <div>
      {isLogged?<h1>Welcome</h1>:<Login/>}
    </div>
  )
}

export default Home