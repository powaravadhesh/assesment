"use client"
import { useEffect, useState } from 'react';
import UserCard from './components/usercard'
export default function HomePage() {
  const [userData, setUserData] = useState()
  const [loading, setLoading] = useState(false)
  useEffect(()=>{
    setLoading(true)
    fetch('https://jsonplaceholder.typicode.com/users').then((res)=>res.json()).then((data)=>{ setLoading(false); setUserData(data)})
  },[])

  function deleteItem(id){
      const userIndex = userData.findIndex((user)=> user.id == id)
      if(userIndex > -1){
        const temp = [...userData]
        temp.splice(userIndex,1)
        setUserData(temp)
      }
  }

  if(loading){
    return <center><h1 >Loading...</h1></center>
  }
  if(userData?.length == 0){
    return <div style={{ width:'100%', textAlign:'center' }} > <h1> No User Data </h1> </div>
  }

  return <div style={{padding:"20px", display:'flex', gap:'20px', flexWrap:'wrap', margin:'auto'  }}>
    {
      userData && userData.length && userData.map((user)=>{
        return  <UserCard data={user} key={user.id} deleteItem={deleteItem}/>
      })
    }
   
  </div>;
}
