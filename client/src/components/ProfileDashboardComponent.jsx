import { Table, TableBody, TableCell, TableContainer, TableHead, TableRow } from "@mui/material";

export default function ProfileDashboard() {
    return(
        <TableContainer  className="w-11/12 mx-auto my-8 shadow-md rounded-md border">
            <Table>
                <TableHead>
                    <TableRow>
                        <TableCell>Total Tuition</TableCell>
                        <TableCell>Total Credit Hours</TableCell>
                        <TableCell>Total Courses</TableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                    <TableRow>
                        <TableCell>$900</TableCell>
                        <TableCell>3.5HRS</TableCell>
                        <TableCell>1</TableCell>
                    </TableRow>
                </TableBody>
            </Table>
        </TableContainer>
    )
}