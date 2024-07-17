import { useSelector } from "react-redux";
import { Outlet, Navigate } from "react-router-dom";



const ProtectedRoutes = () =>{
  const isAuth = useSelector(state => state.authentication.isAuthenticated);
  console.log("Protect Routes isAuth ",isAuth);
  if(isAuth)
  return <Outlet/>
    else 
  return <Navigate to="/">Login</Navigate>
}

export default ProtectedRoutes;


