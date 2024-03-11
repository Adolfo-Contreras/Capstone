import { FormControl, FormHelperText, InputLabel, OutlinedInput,Button, IconButton, InputAdornment } from "@mui/material";
import { MuiTelInput } from 'mui-tel-input'
import {Visibility, VisibilityOff} from "@mui/icons-material"
import { useState } from 'react';


export default function SignupComponent() {
    const [phone, setPhone] = useState()
    const [showPassword, setShowPassword] = useState(false);
  
    const handleClickShowPassword = () => setShowPassword((show) => !show);
  
    const handleMouseDownPassword = (event) => {
      event.preventDefault();
    };

    const handleChange = (event) => {
        setPhone(event)
    }

    const handleSubmit = async (e) => {
        e.preventDefault();
        const firstName = e.target.elements.firstName.value;
        const lastName = e.target.elements.lastName.value;
        const email = e.target.elements.email.value;
        const username = e.target.elements.username.value;
        const password = e.target.elements.password.value;
        const phone = e.target.elements.phone.value;
        const address = e.target.elements.address.value;
        // let form = e.target;
        // let formData = new FormData(form);
        // let formDataObj = Object.fromEntries(formData.entries())
        // console.log(formDataObj);
        console.log({ firstName, lastName, email, username, password, phone, address });
        try {
            fetch('http://localhost:3001/api', {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify({
                    firstName,
                    lastName,
                    email,
                    username,
                    password, 
                    phone,
                    address,
                }),
            })
              .then((res) => res.json())
              .then((data) => console.log(data))
              .catch(err => console.error('network error:', err))
        } catch (err) {
            console.error(err);
        }
        // console.log('form', e.target);
        // let formJSON = JSON.stringify(formDataObj)
        // console.log(formDataObj)
    
    };
    return (<>
    <main className="p-2 m-2 h-5/6 flex flex-col justify-center items-center">
        <form onSubmit={handleSubmit}>
            <section className="flex flex-col justify-center items-center gap-6 p-2 mt-4">
                <FormControl variant="outlined" required fullWidth>
                    <InputLabel htmlFor="email" >Email</InputLabel>
                    <OutlinedInput id="email" aria-describedby="email_helperText" label="Email" aria-label="Email Input" type="text" name="email" placeholder="yadayada@yolo.com"/>
                    {/* <FormHelperText id="email_helperText">hi</FormHelperText> */}
                </FormControl>

                <FormControl variant="outlined" required fullWidth>
                    <InputLabel htmlFor="Username" >Username</InputLabel>
                    <OutlinedInput id="Username" aria-describedby="Username_helperText" label="Username" aria-label="Username Input" type="text" name="username" placeholder="epicgamer69"/>
                    {/* <FormHelperText id="LastN_helperText">hi</FormHelperText> */}
                </FormControl>

                <FormControl variant="outlined" required fullWidth>
                    <InputLabel htmlFor="firstN" >First Name</InputLabel>
                    <OutlinedInput id="firstN" aria-describedby="firstN_helperText" label="First Name" aria-label="First Name Input" type="text" name="firstName" placeholder="Adolfo"/>
                    {/* <FormHelperText id="firstN_helperText">hi</FormHelperText> */}
                </FormControl>

                <FormControl variant="outlined" required fullWidth>
                    <InputLabel htmlFor="LastN" >Last Name</InputLabel>
                    <OutlinedInput id="LastN" aria-describedby="LastN_helperText" label="Last Name" aria-label="Last Name Input" type="text" name="lastName" placeholder="Rarted"/>
                    {/* <FormHelperText id="LastN_helperText">hi</FormHelperText> */}
                </FormControl>

                <FormControl variant="outlined" required fullWidth>
                    <MuiTelInput className="" label='Phone' aria-describedby="Select_help" required variant="outlined" name="phone" placeholder="123-456-7890" value={phone} onChange={handleChange}></MuiTelInput>
                    <FormHelperText id='Select_help'>Select a Country First by Clicking the Icon in the Text Field Above</FormHelperText>
                </FormControl>
                
                <FormControl variant="outlined" required fullWidth>
                    <InputLabel htmlFor="address" >Address</InputLabel>
                    <OutlinedInput id="address" aria-describedby="address_helperText" label="Address" aria-label="Address Input" type="text" name="address" placeholder="crispy chicken lane 1200 south"/>
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
                    />
                </FormControl>
                
            </section>
            <section className="flex justify-center items-center m-4">
                <FormControl >
                    <Button variant="outlined" type="submit">Submit</Button>
                </FormControl>
            </section>
        </form>
    </main>
    </>)
}