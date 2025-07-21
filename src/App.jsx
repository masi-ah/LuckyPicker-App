import { useState } from 'react'
import UserForm from './components/UserForm'
import './App.css'

const App = () => {
  const [users, setUsers] = useState([]);
  const handleSubmit = (user) => {
    setUsers((prevUsers) => [...prevUsers,user]);
  };
  return (
    <div>
      <h1>User Registration</h1>
      <UserForm AddUser={handleSubmit}/>
    </div>
  )
}

export default App
