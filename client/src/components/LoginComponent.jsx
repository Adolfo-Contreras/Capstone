import { InputLabel, TextField, FormControl, OutlinedInput, IconButton, InputAdornment,Button,} from "@mui/material";
import {Visibility, VisibilityOff} from "@mui/icons-material"
import { useState } from 'react';
import { useNavigate, Link } from "react-router-dom"
import axios from "axios";

export default function Login(){
  const navigate = useNavigate();
  const [showPassword, setShowPassword] = useState(false);
  const handleClickShowPassword = () => setShowPassword((show) => !show);
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const handleMouseDownPassword = (event) => {
    event.preventDefault();
  };
  
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('submitted login');

    axios
      .post("http://localhost:3001/api/login", formData)
      .then((result) => {
        console.log(result);
        if (result.data == "yippie") {
          navigate("/home");
        }
      })
      .catch((err) => console.log(err));
  }
  
  return (<>
  <div className=" w-full flex flex-col justify-center items-center p-4">
    <h1 className=" place-self-center">Welcome</h1>
    <form onSubmit={handleSubmit}>
      <section className="flex flex-col gap-2.5">
        <h3 className="">Login</h3><br></br>
        {/* <TextField 
        id="outlined-basic" 
        label="Enter Email" 
        variant="outlined" 
        color='primary'
        name="email"
        value={formData.email}
        onChange={handleChange}
        /> */}
        <FormControl variant="outlined" required>
          <InputLabel htmlFor="email" >Enter Email</InputLabel>
          <OutlinedInput 
          id="email" 
          aria-describedby="email_helperText" 
          label="Email" 
          aria-label="Email Input" 
          type="text" 
          name="email" 
          placeholder="yadayada@yolo.com"
          value={formData.email}
          onChange={handleChange}
          />
          {/* <FormHelperText id="email_helperText">hi</FormHelperText> */}
        </FormControl>
        <h3>Password</h3>
        {/* <TextField id="outlined-password-input" label="Enter Password" type="password" autoComplete="current-password"/> */}
        <FormControl variant="outlined" required >
          <InputLabel htmlFor="outlined-adornment-password">Enter Password</InputLabel>
          <OutlinedInput
            id="outlined-adornment-password"
            type={showPassword ? 'text' : 'password'}
            endAdornment={
              <InputAdornment position="end">
                <IconButton
                  aria-label="toggle password visibility"
                  onClick={handleClickShowPassword}
                  onMouseDown={handleMouseDownPassword}
                  edge="end"
                >
                  {showPassword ? <VisibilityOff /> : <Visibility />}
                </IconButton>
              </InputAdornment>
            }
            label="Enter Password"
            name="password"
            value={formData.password}
            onChange={handleChange}
          />
        </FormControl>
      </section>
      <section className=' flex h-8 m-3 justify-center items-center'>
        <FormControl>
          <Button variant="outlined" color='primary'>Signup/Login</Button>
        </FormControl>
      </section>
    </form>
  </div>
  </>)}