import { Table, TableBody, TableCell, TableContainer, TableHead, TableRow } from "@mui/material";

export default function StudentTable({children}){
        return(
            <TableContainer>
            <Table stickyHeader>
                <TableHead>
                    <TableRow>
                        <TableCell>Student ID</TableCell>
                        <TableCell>Username</TableCell>
                        <TableCell>Name</TableCell>
                        <TableCell>Email</TableCell>
                        <TableCell>Address</TableCell>
                        <TableCell>Phone</TableCell>
                        <TableCell>Password</TableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                        {children}
                </TableBody>
            </Table>
            </TableContainer>
        )

}