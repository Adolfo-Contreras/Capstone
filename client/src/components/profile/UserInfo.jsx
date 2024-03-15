import { Avatar, Button, Paper, Typography } from "@mui/material";
import { Stack } from "@mui/system";
import UserInputs from "./UserInputs";
import { useState } from 'react';


export default function UserInfoComponent(){
    const [isDisabled, setIsDisabled] = useState(true);
    const handleEdit = ()=>{
        setIsDisabled(!isDisabled)
    }
        return(
                <Paper className="w-5/6 p-4 mx-auto my-8 border rounded-md">
                    <section className="flex gap-3.5 justify-start items-center">
                        <Avatar className="bg-purple-600 w-16 h-16"/>
                        <Typography variant="h4">User Info</Typography>
                    </section>
                    <Stack>
                        <UserInputs InputFor='Username' isDisabled={isDisabled} val='epicgamer127'/>
                        <UserInputs InputFor='Email' isDisabled={isDisabled} val='coolguyjim@gmail,com'/>
                        <UserInputs InputFor='Password' isDisabled={isDisabled} password={isDisabled} val='cooljim125'/>
                        <UserInputs InputFor='Name' isDisabled={isDisabled} val='Jim'/>
                        <UserInputs InputFor='Phone' isDisabled={isDisabled} val='+1 123 456 7890'/>
                        <UserInputs InputFor='Address' isDisabled={isDisabled} val='cripsy chicken lane 1200 north'/>
                    </Stack>
                    <Button variant="outlined" onClick={handleEdit}>Edit Info</Button>
                </Paper>
        )
}