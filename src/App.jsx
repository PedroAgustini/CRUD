import { useEffect, useState } from 'react'
import axios from "axios" 
import './App.css'
import UsersList from "./components/UsersList"
import UsersForm from './components/UsersForm';

function App() {
 
  const [ users, setUsers ] = useState([]);
  
  useEffect(() => {
    axios.get(`https://users-crud1.herokuapp.com/users/`)
    .then((res) => setUsers(res.data))
  },[])

  const getUsers = () => {
    axios.get(`https://users-crud1.herokuapp.com/users/`)
    .then((res) => setUsers(res.data))
  }

  return (
    <div className="App">
      <div className="app-flex">
      <UsersForm getUsers={getUsers}/>
      <UsersList users={users}/>
      </div>
    </div>
  )
}

export default App
