import { InputLabel, TextField, FormControl, OutlinedInput, IconButton, InputAdornment,Button,} from "@mui/material";
import {Visibility, VisibilityOff} from "@mui/icons-material"
import { useState } from 'react';

export default function Login(){
    const [showPassword, setShowPassword] = useState(false);
  
    const handleClickShowPassword = () => setShowPassword((show) => !show);
  
    const handleMouseDownPassword = (event) => {
      event.preventDefault();
    };
    return (<>
    <div className=" w-full flex flex-col justify-center items-center p-4">
    <h1 className=" place-self-center">Welcome</h1>
    <section className="flex flex-col gap-2.5">
        <h3 className="">Signup/Login</h3>
        <TextField id="outlined-basic" label="Enter Email" variant="outlined" color='primary'/>
        <h3>Password</h3>
        {/* <TextField id="outlined-password-input" label="Enter Password" type="password" autoComplete="current-password"/> */}
        <FormControl variant="outlined">
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
          />
        </FormControl>
    </section>
    <section className=' flex h-8 m-3 justify-center items-center'>
    <Button variant="outlined" color='primary'>Signup/Login</Button>
    </section>
    </div>
    </>)}