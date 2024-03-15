import React, { useState } from 'react';
import AdminDashboard from "../../components/admin/AdminDashboard";
import Navbar from "../../components/Nav/Navbar";
import StudentSearchBar from "../../components/admin/StudentSearch";
import StudentTable from "../../components/admin/StudentTable";
import data from "../../../database/student.json"
import Cdata from "../../../database/courses.json"
import StudentRow from "../../components/admin/Studentfield";
import { Paper, TablePagination } from "@mui/material";
import { useSearch } from '../../context/SearchContext';

export default function AdminPage(){
    const [page, setPage] = React.useState(0);
  const [rowsPerPage, setRowsPerPage] = React.useState(10);

  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(+event.target.value);
    setPage(0);
  };
  const {searchTerm} = useSearch();
  const filteredData = data.filter(item =>
      item.first_name.toLowerCase().includes(searchTerm) || item.last_name.toLowerCase().includes(searchTerm)
  );
    return (
        <main className=" commonParent">
        <Navbar/>
        <AdminDashboard cCount={Cdata.length} sCount={data.length}/>
        <StudentSearchBar/>
        <Paper>
            <StudentTable>
                {console.log(filteredData)}
                {filteredData.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage).map(item=>(<StudentRow key={item.student_id} props={item}/>))}
            </StudentTable>
            <TablePagination
            rowsPerPageOptions={[10, 25, 100]}
            component="div"
            count={filteredData.length}
            rowsPerPage={rowsPerPage}
            page={page}
            onPageChange={handleChangePage}
            onRowsPerPageChange={handleChangeRowsPerPage}
            />
        </Paper>
        </main>
    )
}