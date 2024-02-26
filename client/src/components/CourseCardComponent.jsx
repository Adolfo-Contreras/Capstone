import { Card, CardActions, CardContent, CardHeader, Typography, Button, IconButton } from "@mui/material";
import MoreVertIcon from '@mui/icons-material/MoreVert';
import Link from '@mui/material'

export default function CardComponent(){
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