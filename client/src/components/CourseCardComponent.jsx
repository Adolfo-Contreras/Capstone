import { Card, CardActions, CardContent, CardHeader, Typography, Button, IconButton, Link } from "@mui/material";
import MoreVertIcon from '@mui/icons-material/MoreVert';

export default function CourseCard(){
        // const courseTitle = props.title;
        // const courseDesc = props.description;
        // const courseType = props.subject;
        return (<>
            <main>
                <Card>
                    <CardHeader
                     title="CourseTitle" 
                     subheader="CourseSubject"
                     action={
                        <IconButton><MoreVertIcon></MoreVertIcon></IconButton>
                     }
                    />
                    <CardContent>
                        <Typography variant="body2">CourseMiniDesc</Typography>
                    </CardContent>
                <CardActions>
                        <Link href="#">
                            <Button variant="text">Course Link</Button>
                        </Link>
                </CardActions>
                </Card>
            </main>
        </>)
}