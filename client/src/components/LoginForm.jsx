import { InputLabel, TextField, FormControl, OutlinedInput, IconButton, InputAdornment,Button, Tooltip,} from "@mui/material";
import {Visibility, VisibilityOff} from "@mui/icons-material"
import { useEffect, useState } from 'react';
import axios from 'axios';
import { useNavigate, Link } from "react-router-dom";

export default function Login(){
  const [showPassword, setShowPassword] = useState(false);
  const [formData, setFormData] = useState({ 
    email: "",
    password: "",
  });
  
  const handleClickShowPassword = () => setShowPassword((show) => !show);
  
  const handleMouseDownPassword = (event) => {
    event.preventDefault();
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
        ...formData,
        [name]: value,
    });
}

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log(formData);
    axios 
      .post("http://localhost:3001/api/login", formData)
      .then((result) => {
        console.log(result);
        navigate("/profile");
      })
      .catch((err) => console.log(err));
  };
    return (<>
    <div className=" w-full flex flex-col justify-center items-center p-4">
    <h1 className=" place-self-center">Welcome, please login :)</h1>
    <form onSubmit={handleSubmit}>
      <section className="flex flex-col gap-2.5">
          {/* <TextField id="outlined-basic" label="Enter Email" variant="outlined" color='primary'/> */}
          
          <h3 className="">Email</h3>
          <FormControl variant="outlined" required fullWidth>
              <InputLabel htmlFor="email" >Email</InputLabel>
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
              {/* <FormHelperText id="email_helperText">email</FormHelperText> */}
          </FormControl>
          <h3>Password</h3>
          <FormControl variant="outlined" required fullWidth>
            <InputLabel htmlFor="outlined-adornment-password">Set Password</InputLabel>
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
                label="Set Password"
                name="password"
                value={formData.password} 
                onChange={handleChange}
            />
          </FormControl>

          {/* <FormControl variant="outlined">
            <InputLabel htmlFor="Password">Enter Password</InputLabel>
            <OutlinedInput
              id="Password"
              type={showPassword ? 'text' : 'password'}
              endAdornment={
                <InputAdornment position="end">
                <Tooltip title="Toggle Password Visibility">
                  <IconButton
                    aria-label="toggle password visibility"
                    onClick={handleClickShowPassword}
                    onMouseDown={handleMouseDownPassword}
                    edge="end"
                  >
                    {showPassword ? <VisibilityOff /> : <Visibility />}
                  </IconButton>
                </Tooltip>
                </InputAdornment>
              }
              label="Enter Password"
            />
          </FormControl> */}
      </section>
      <section className=' flex h-8 m-3 justify-center items-center'>
      <Link to="/profile">
        <Button variant="outlined" color='primary'>Login</Button>
      </Link>
      </section>
    </form>
    </div>
    </>)}