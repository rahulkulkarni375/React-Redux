import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { userAuthActions } from '../store/loginSlice'
import { useNavigate } from 'react-router-dom'


export default function NavBar() {
  const navigate = useNavigate();
  const isAuth = useSelector(state => state.authentication.isAuthenticated);
  console.log("Logout isAuth ",isAuth);
  const dispatch = useDispatch();
  const handleLogout = () => {
    dispatch(userAuthActions.logout());
    navigate('/'); 
  }
  return (
    <>
      <nav className="navbar navbar-expand-md navbar-dark bg-dark" aria-label="Fourth navbar example">
        <div className="container-fluid">
          <div className="collapse navbar-collapse" id="navbarsExample04">
            <ul className="navbar-nav me-auto mb-2 mb-md-0">
              <li className="nav-item">
                <button className="btn btn-dark" >Home</button>
              </li>
              <li className="nav-item">
                <button className="btn btn-dark" >Shop</button>
              </li>
              <li className="nav-item">
                <button className="btn btn-dark " >Calculator</button>
              </li>
            </ul>
            <form role="search">
              <button className="form-control " type="text" onClick={handleLogout} >Logout</button>
            </form>
          </div>
        </div>
      </nav>
    </>
  )
}
