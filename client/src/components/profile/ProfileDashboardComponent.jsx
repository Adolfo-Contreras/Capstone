import { Table, TableBody, TableCell, TableContainer, TableHead, TableRow } from "@mui/material";

export default function ProfileDashboard() {
    return(
        <TableContainer  className="w-11/12 mx-auto my-8 shadow-md rounded-md border">
            <Table>
                <TableHead>
                    <TableRow>
                        <TableCell className="text-center">Total Tuition</TableCell>
                        <TableCell className="text-center">Total Credit Hours</TableCell>
                        <TableCell className="text-center">Total Courses</TableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                    <TableRow>
                        <TableCell className="text-center">$900</TableCell>
                        <TableCell className="text-center">3.5HRS</TableCell>
                        <TableCell className="text-center">1</TableCell>
                    </TableRow>
                </TableBody>
            </Table>
        </TableContainer>
    )
}