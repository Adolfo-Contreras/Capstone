import { FormControl, FormHelperText, InputLabel, OutlinedInput,Button } from "@mui/material";
import { MuiTelInput } from 'mui-tel-input'
import { useState } from 'react';


export default function SignupComponent() {
    const [phone, setPhone] = useState()
    const handleChange = (newPhone) => {
        setPhone(newPhone)
    }
    return (<>
    <main className="p-2 m-2 h-5/6 flex flex-col justify-center items-center">
        <section className="flex flex-col justify-center items-center gap-6 p-2 mt-4">
            <FormControl variant="outlined" required fullWidth>
                <InputLabel htmlFor="email" >Email</InputLabel>
                <OutlinedInput id="email" aria-describedby="email_helperText" label="Email" aria-label="Email Input"/>
                {/* <FormHelperText id="email_helperText">hi</FormHelperText> */}
            </FormControl>
            <FormControl variant="outlined" required fullWidth>
                <InputLabel htmlFor="firstN" >First Name</InputLabel>
                <OutlinedInput id="firstN" aria-describedby="firstN_helperText" label="First Name" aria-label="First Name Input"/>
                {/* <FormHelperText id="firstN_helperText">hi</FormHelperText> */}
            </FormControl>
            <FormControl variant="outlined" required fullWidth>
                <InputLabel htmlFor="LastN" >Last Name</InputLabel>
                <OutlinedInput id="LastN" aria-describedby="LastN_helperText" label="Last Name" aria-label="Last Name Input"/>
                {/* <FormHelperText id="LastN_helperText">hi</FormHelperText> */}
            </FormControl>
            {/* phone input */}

            <FormControl>
            <MuiTelInput className="" label='Phone' aria-describedby="Select_help" required variant="outlined" value={phone} onChange={handleChange}></MuiTelInput>
            <FormHelperText id='Select_help'>Select a Country First by Clicking the Icon in the Text Field Above</FormHelperText>
            </FormControl>
            
            
            <FormControl variant="outlined" required fullWidth>
                <InputLabel htmlFor="address" >Address</InputLabel>
                <OutlinedInput id="address" aria-describedby="address_helperText" label="Address" aria-label="Address Input"/>
                {/* <FormHelperText id="email_helperText">Must Be From The United States</FormHelperText> */}
            </FormControl>
        </section>
        <section className="flex justify-center items-center m-4">
            <Button variant="outlined">Submit</Button>
        </section>
    </main>
    </>)
}