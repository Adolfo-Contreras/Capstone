import { Card, CardActions, CardContent, CardHeader, Typography, IconButton, Collapse, Tooltip, Menu, MenuItem,  } from "@mui/material";
import React from 'react';
import { styled } from '@mui/material/styles';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import ExpandCircleDownOutlinedIcon from '@mui/icons-material/ExpandCircleDownOutlined';

const ExpandMore = styled((props) => {
    const { expand, ...other } = props;
    return (<Tooltip title='Expand Description'>
    <IconButton {...other} />
    </Tooltip>
    );
  })(({ theme, expand }) => ({
    transform: !expand ? 'rotate(0deg)' : 'rotate(180deg)',
    marginLeft: 'auto',
    transition: theme.transitions.create('transform', {
      duration: theme.transitions.duration.shortest,
    }),
  }));

export default function CourseCard({title}){
        // const title = props.title;
        // const description = props.description;
        // const subject = props.subject;
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
            <main>
                <Card>
                    <CardHeader
                     title={title} 
                     subheader="Subject:"
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
                          <MenuItem>Hello</MenuItem>
                        </Menu>
                      </section>
                     }
                    />
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
                        <Typography variant="body2">CourseMiniDesc</Typography>
                    </CardContent>
                </Collapse>
                </Card>
            </main>
        </>)
}