import { userAuth } from "../context/AuthContext"
import { useNavigate } from "react-router-dom"


const Home = () => {
   const Navigate=useNavigate()
    const {googleSignIn,logOut }=userAuth()
    const handleGoogleSignIn=async()=>{
   
         try{
           await googleSignIn()
         }catch(err){
            console.log(err)
         }
         
         Navigate('/account')
    }

    
 
    return (
    <div>
      <button onClick={handleGoogleSignIn} >Google Sign in </button>
      
    </div>
  )
}

export default Home
