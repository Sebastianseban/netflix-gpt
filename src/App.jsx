import { onAuthStateChanged } from "firebase/auth";
import { useEffect } from "react"
import { auth } from "./utils/firebase";
import { useDispatch } from "react-redux";
import { addUser, removeUser } from "./utils/userSlice";
import { useNavigate } from "react-router-dom";



function App() {
  const dispatch = useDispatch()
  const navigate = useNavigate()

useEffect(()=> {
onAuthStateChanged(auth, (user) => {
  if (user) {
   
    const {uid,email,displayName} = user;
    dispatch(addUser({uid:uid,email:email,displayName:displayName}))
    navigate("/browse")
  } else {
   dispatch(removeUser())
   navigate("/")
  }
});
},[])
  return (
 <div>

 </div>
  )
}

export default App
