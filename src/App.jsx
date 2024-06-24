
import React from "react"
import UserContextProivder from "./context/UserContextProvider"
import Login from "./components/Login"
import Profile from "./components/Profile"

function App() {


  return (
    <UserContextProivder>
      <h1>Yo</h1>
      <Login/>
      <Profile/>
      
    </UserContextProivder>
  )
}

export default App
