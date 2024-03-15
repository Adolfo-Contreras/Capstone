import { FormControl, FormHelperText, InputLabel, OutlinedInput,Button, IconButton, InputAdornment } from "@mui/material";
import { MuiTelInput } from 'mui-tel-input'
import {Visibility, VisibilityOff} from "@mui/icons-material"
import { useEffect, useState } from 'react';
import axios from 'axios';
import { useNavigate, Link } from "react-router-dom";

export default function SignupComponent() {
    const navigate = useNavigate();
    const [phone, setPhone] = useState()
    const [showPassword, setShowPassword] = useState(false);
    const [formData, setFormData] = useState({ 
        firstName: "",
        lastName: "",
        email: "",
        username: "",
        password: "",
        phone: "",
        address: "",
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

    const handlePhone = (event, info) => {
        setPhone(event)
        setFormData({
            ...formData,
            phone: info.nationalNumber,
        });
    }

    const handleSubmit = async (e) => {
        e.preventDefault();
        console.log(formData);
        axios 
          .post("http://localhost:3001/api/signup", formData)
          .then((result) => {
            console.log(result);
            navigate("/login");
          })
          .catch((err) => console.log(err));
    };
    return (<>
    <main className="p-2 m-2 h-5/6 flex flex-col justify-center items-center">
        <form onSubmit={handleSubmit}>
            <section className="flex flex-col justify-center items-center gap-6 p-2 mt-4">
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
                    {/* <FormHelperText id="email_helperText">hi</FormHelperText> */}
                </FormControl>

                <FormControl variant="outlined" required fullWidth>
                    <InputLabel htmlFor="Username" >Username</InputLabel>
                    <OutlinedInput 
                    id="Username" 
                    aria-describedby="Username_helperText" 
                    label="Username" 
                    aria-label="Username Input" 
                    type="text" 
                    name="username" 
                    placeholder="epicgamer69"
                    value={formData.username} 
                    onChange={handleChange}
                    />
                    {/* <FormHelperText id="LastN_helperText">hi</FormHelperText> */}
                </FormControl>

                <FormControl variant="outlined" required fullWidth>
                    <InputLabel htmlFor="firstN" >First Name</InputLabel>
                    <OutlinedInput 
                    id="firstN" 
                    aria-describedby="firstN_helperText" 
                    label="First Name" 
                    aria-label="First Name Input" 
                    type="text" 
                    name="firstName" 
                    placeholder="Adolfo"
                    value={formData.firstName} 
                    onChange={handleChange}
                    />
                    {/* <FormHelperText id="firstN_helperText">hi</FormHelperText> */}
                </FormControl>

                <FormControl variant="outlined" required fullWidth>
                    <InputLabel htmlFor="LastN" >Last Name</InputLabel>
                    <OutlinedInput 
                    id="LastN" 
                    aria-describedby="LastN_helperText" 
                    label="Last Name" 
                    aria-label="Last Name Input" 
                    type="text" 
                    name="lastName" 
                    placeholder="Alvarado"
                    value={formData.lastName} 
                    onChange={handleChange}
                    />
                    {/* <FormHelperText id="LastN_helperText">hi</FormHelperText> */}
                </FormControl>

                <FormControl variant="outlined" required fullWidth>
                    <MuiTelInput 
                    className="" 
                    label='Phone' 
                    aria-describedby="Select_help" 
                    required variant="outlined" 
                    name="phone" placeholder="123-456-7890" 
                    value={phone} 
                    onChange={handlePhone}></MuiTelInput>
                    <FormHelperText id='Select_help'>Select a Country First by Clicking the Icon in the Text Field Above</FormHelperText>
                </FormControl>
                
                <FormControl variant="outlined" required fullWidth>
                    <InputLabel htmlFor="address" >Address</InputLabel>
                    <OutlinedInput 
                    id="address" 
                    aria-describedby="address_helperText" 
                    label="Address" 
                    aria-label="Address Input" 
                    type="text" 
                    name="address" 
                    placeholder="crispy chicken lane 1200 south"
                    value={formData.address} 
                    onChange={handleChange}
                    />
                    {/* <FormHelperText id="email_helperText">Must Be From The United States</FormHelperText> */}
                </FormControl>

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
                
            </section>
            <section className="flex justify-center items-center m-4">
                <FormControl >
                    <Link to="/login">
                        <Button variant="outlined" type="submit">Submit</Button>
                    </Link>
                </FormControl>
            </section>
        </form>
    </main>
    </>)
}