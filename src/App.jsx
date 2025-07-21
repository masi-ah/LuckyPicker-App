import { useContext } from 'react'
import UserForm from './components/UserForm'
import { UserContext } from './context/UserContext'
import './App.css';


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
    <div className="min-h-screen bg-purple-50 p-6 flex flex-col items-center">
      <h1 className='text-3xl font-bold mb-6 text-purple-800'>User Registration</h1>
      <UserForm AddUser={handleAddUser}/>
      <div className='w-full max-w-md mt-8'>
        <h2 className='text-xl font-semibold mb-4 text-purple-800'>User List:</h2>
        <ul className='space-y-2'>
          {state.users.map((user, index) =>(
            <li  className='bg-white shadow-sm rounded-md px-4 py-2 border border-purple-200'  key={index}>
              <span className='font-medium text-gray-800'>{user.name} - {user.phone}</span>
            </li>
          ))}
        </ul>
        {state.users.length > 1 && (
         <>
            <button  className='mt-6 bg-purple-400 text-wite px-4 py-2 rounded-md hover:bg-purple-500 transition-colors duration-300' onClick={handleRandomSelect}>Select random User</button>
            {state.selectedUser && (
             <div className='mt-6 p-4 bg-green-100 border border-green-300 rounded-md text-green-900'>
               <h3 className='text-green-800 mb-2'>Selected User</h3>
               <p>{state.selectedUser.name} - {state.selectedUser.phone}</p>
               <button className='mt-2 text-sm bg-red-500 text-white px-3 py-1 rounded hover:bg-red-600' onClick={handleClearSelection}>Clear Selection</button>
             </div>
          )}
         </>
        )}
      </div>
    </div>
  )
}

export default App;
