import { useContext } from 'react'
import UserForm from './components/UserForm'
import { UserContext } from './context/UserContext'
import './App.css'

const App = () => {
  const {state, dispatch} = useContext(UserContext);

    const handleAddUser = (user) => {
      dispatch({type: "ADD_USER", dataUser: user});
    };

    const handleRandomSelect= () => {
      ;dispatch({ type: "SELECT_RANDOM_USER"});
    }
    
    const handleClearSelection = () => {
      dispatch({ type: "CLEAR_SELECTION"});
    };
    
  return (
    <div>
      <h1>User Registration</h1>
      <UserForm AddUser={handleAddUser}/>
      <div>
        <h2>User List:</h2>
        <ul>
          {state.users.map((user, index) =>(
            <li key={index}>
              {user.name} - {user.phone}
            </li>
          ))}
        </ul>
        {state.users.length > 1 && (
         <>
            <button onClick={handleRandomSelect}>Select random User</button>
            {state.selectedUser && (
             <div>
               <h3>Selected User</h3>
               <p>{state.selectedUser.name} - {state.selectedUser.phone}</p>
               <button onClick={handleClearSelection}>Clear Selection</button>
             </div>
          )}
         </>
        )}
      </div>
    </div>
  )
}

export default App;
