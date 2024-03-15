import { FormControl, FormHelperText, Input, InputLabel } from "@mui/material";

export default function UserInputs({InputFor, isDisabled, val, password}){
    
        return(
            <FormControl className="w-2/5 my-5">
                <InputLabel htmlFor={InputFor}>{InputFor}</InputLabel>
                <Input disabled={isDisabled} type={password ? "password" : "text"} aria-disabled id={InputFor} placeholder={val}></Input>
                {isDisabled ? <FormHelperText>Disabled</FormHelperText> : null}
            </FormControl>
            
        )

}