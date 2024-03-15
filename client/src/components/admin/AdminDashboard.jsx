import { Table, TableBody, TableCell, TableContainer, TableHead, TableRow } from "@mui/material";

export default function AdminDashboard({cCount,sCount}) {
    
    return (
    <TableContainer className="w-fit border shadow rounded-md">
        <Table>
            <TableHead>
                <TableRow>
                    <TableCell className="text-center">Course Count</TableCell>
                    <TableCell className="text-center">Student Count</TableCell>
                </TableRow>
            </TableHead>
            <TableBody>
                <TableRow>
                    <TableCell className="text-center">{cCount}</TableCell>
                    <TableCell className="text-center">{sCount}</TableCell>
                </TableRow>
            </TableBody>
        </Table>
    </TableContainer>
    )
}