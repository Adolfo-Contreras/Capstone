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
                        <UserInputs InputFor='Name' isDisabled={isDisabled} val='Jim'/>
                        <UserInputs InputFor='Username' isDisabled={isDisabled} val='Jim'/>
                        <UserInputs InputFor='Email' isDisabled={isDisabled} val='Jim'/>
                        <UserInputs InputFor='Email' isDisabled={isDisabled} val='Jim'/>
                        <UserInputs InputFor='password' isDisabled={isDisabled} password={isDisabled} val='Jim'/>
                        <UserInputs InputFor='Name' isDisabled={isDisabled} val='Jim'/>
                    </Stack>
                    <Button variant="outlined" onClick={handleEdit}>Edit Info</Button>
                </Paper>
        )
}