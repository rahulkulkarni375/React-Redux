import React, { useState } from "react";
import { Button, FormControl, IconButton, Input, InputAdornment, InputLabel} from "@mui/material";
import Visibility from "@mui/icons-material/Visibility";
import VisibilityOff from "@mui/icons-material/VisibilityOff";
import { useDispatch, useSelector } from "react-redux";
import { userAuthActions } from '../store/loginSlice'
import { useNavigate } from "react-router-dom";

export default function Login() {
  const navigate = useNavigate();  
  const [showPassword, setShowPassword] = useState(false);
  const handleClickShowPassword = () => setShowPassword((show) => !show);
  const isAuth = useSelector(state => state.authentication.isAuthenticated);
  console.log("Login isAuth ",isAuth);
  
  const dispatch = useDispatch();
    const handleLogin = () => {
    dispatch(userAuthActions.login());
    navigate('/home');
  }

  return (
    <>
      <div className="container" style={{ width: "100%" }}>
        <div className="row">
          <div
            className="col mx-2"
            style={{ backgroundColor: "", height: "29rem", border: "" }}
          ></div>
          <div
            className="col mx-2"
            style={{ backgroundColor: "", height: "29rem", padding: "10rem" }}
          >
            <div className="d-flex flex-column justify-content-center align-items-end w-100">
              <h2 className="">Welcome Back</h2>
              <FormControl sx={{ mt: 2, width: "25ch" }} variant="standard">
                <InputLabel>Username</InputLabel>
                <Input />
              </FormControl>
              <FormControl sx={{ mt: 2, width: "25ch" }} variant="standard">
                <InputLabel htmlFor="standard-adornment-password">
                  Password
                </InputLabel>
                <Input
                  id="standard-adornment-password"
                  type={showPassword ? "text" : "password"}
                  endAdornment={
                    <InputAdornment position="end">
                      <IconButton
                        aria-label="toggle password visibility"
                        onClick={handleClickShowPassword}
                      >
                        {showPassword ? <VisibilityOff /> : <Visibility />}
                      </IconButton>
                    </InputAdornment>
                  }
                />
              </FormControl>
              <Button variant="contained" color="success" style={{marginTop : "2rem"}} onClick={handleLogin}>
                Login
              </Button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
