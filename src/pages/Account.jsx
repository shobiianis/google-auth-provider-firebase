import { useNavigate } from "react-router-dom"
import { userAuth } from "../context/AuthContext"


const Account = () => {
  const Navigate=useNavigate()
  const {user,logOut}=userAuth()
  
  const handleSignOut=async()=>{
    try{
      await logOut()
       
    }catch(err){
      console.log(err)
    }
    Navigate('/')
     
  }
   


  return (
    <div>{user?.displayName}
    <button onClick={handleSignOut} >signout</button>
    </div>
  )
}

export default Account