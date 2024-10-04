import { useState,useEffect } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { getPosts ,getRandomUser} from './api';
import PostCard from './components/PostCard';
import UserCard from './components/UserCard';

function App() {

const [data,setData] = useState(null)
const [userData,setUserData] = useState(null);

  useEffect(()=>{
    getPosts()
     .then(posts => setData(posts))
     .catch(error => console.error(error))
     }, [])

  useEffect(()=>{
    getRandomUser()
     .then(user => setUserData(user.results[0]))
     .catch(error => console.error(error))
     }, []
 )
 const refresh =()=>{
  getRandomUser()
     .then(user => setUserData(user.results[0]))
     .catch(error => console.error(error))
 }
  return (
    
    <div className='App'>
      {userData && <UserCard data={userData}/>}
      <button onClick={refresh}>Refresh User</button>
      {
        // data ? data.map((e)=><li>{e.title}</li>) : <p>No Data</p>
        data ? data.map((e)=><PostCard title={e.title} body={e.body} />) : <p>No Data</p>
      }
    
      </div>
  );
}

export default App
