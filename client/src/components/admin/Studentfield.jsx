import { TableCell, TableRow } from "@mui/material";

export default function StudentRow({props}){
    const id = props.student_id 
    const username = props.Username
    const name = `${props.first_name} ${props.last_name}`
    const email = props.email
    const pass = props.password
    const phone = props.phone_number
    const address = props.address
        return(
            <TableRow>
                <TableCell>{id}</TableCell>
                <TableCell>{username}</TableCell>
                <TableCell>{name}</TableCell>
                <TableCell>{email}</TableCell>
                <TableCell>{address}</TableCell>
                <TableCell>{phone}</TableCell>
                <TableCell>{pass}</TableCell>
            </TableRow>
        )

}