import React from 'react';
import { Card, CardActions, CardContent, CardHeader, Typography, IconButton, Collapse, Tooltip, Menu, MenuItem, TableContainer, Table, TableHead, TableRow, TableCell, TableBody,  } from "@mui/material";
import { styled } from '@mui/material/styles';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import ExpandCircleDownOutlinedIcon from '@mui/icons-material/ExpandCircleDownOutlined';

const ExpandMore = styled((props) => {
    const { expand, ...other } = props;
    return (<Tooltip title='Expand Information'><IconButton {...other} /></Tooltip>
    );
  })(({ theme, expand }) => ({
    transform: !expand ? 'rotate(0deg)' : 'rotate(180deg)',
    marginLeft: 'auto',
    transition: theme.transitions.create('transform', {
      duration: theme.transitions.duration.shortest,
    }),
  }));

export default function CourseCard({data}){
        const title = data.title;
        const description = data.description;
        const maxCapacity = data.maximum_capacity;
        const stringId = data.string_id;
        const schedule = data.schedule;
        const credits = data.credit_hours
        const cost = data.tuition_cost
        const classNum = data.classroom_number
//for the Collapsed description
        const [expanded, setExpanded] = React.useState(false);
        const handleExpandClick = () => {
          setExpanded(!expanded);
        };
//for the Temp Menu Surface
        const [anchorEl, setAnchorEl] = React.useState(null);
        const open = Boolean(anchorEl);
        const handleClick = (event) => {
          setAnchorEl(event.currentTarget);
        };
        const handleClose = () => {
          setAnchorEl(null);
        };
        return (<>
            <section>
                <Card id={stringId}>
                    <CardHeader
                     title={title} 
                     subheader={stringId}
                     action={
                      <section>
                        <Tooltip title='Course Actions'>
                        <IconButton
                        aria-controls={open ? 'basic-menu' : undefined}
                        aria-haspopup="true"
                        aria-expanded={open ? 'true' : undefined}
                        onClick={handleClick} 
                        >
                        <MoreVertIcon></MoreVertIcon>
                        </IconButton>
                        </Tooltip>

                        <Menu
                          id="basic-menu"
                          anchorEl={anchorEl}
                          open={open}
                          onClose={handleClose}
                          MenuListProps={{
                            'aria-labelledby': 'basic-button',
                          }}
                        >
                          <MenuItem>Add Course</MenuItem>
                          <MenuItem>hello</MenuItem>
                        </Menu>
                      </section>
                     }
                    />
                    <CardContent>
                      <Typography variant='h6'>Course Description</Typography>
                      <Typography variant="body2">{description}</Typography>
                    </CardContent>
                <CardActions>
                        <ExpandMore
                        expand={expanded}
                        onClick={handleExpandClick}
                        aria-expanded={expanded}
                        aria-label="Show Discription">
                          <ExpandCircleDownOutlinedIcon></ExpandCircleDownOutlinedIcon>
                        </ExpandMore>
                </CardActions>
                <Collapse in={expanded} timeout='auto' unmountOnExit>
                    <CardContent>
                      <TableContainer className='p-0'>
                        <Table>
                          <TableHead>
                            <TableRow>
                              <TableCell>Schedule</TableCell>
                              <TableCell>Tuition</TableCell>
                              <TableCell>Capacity</TableCell>
                              <TableCell>Credit Hours</TableCell>
                              <TableCell>Classroom Number</TableCell>
                            </TableRow>
                          </TableHead>
                          <TableBody>
                            <TableRow>
                              <TableCell>{schedule}</TableCell>
                              <TableCell>${cost}</TableCell>
                              <TableCell>{maxCapacity}</TableCell>
                              <TableCell>{credits}</TableCell>
                              <TableCell>{classNum}</TableCell>
                            </TableRow>
                          </TableBody>
                        </Table>
                      </TableContainer>
                    </CardContent>
                </Collapse>
                </Card>
            </section>
        </>)
}