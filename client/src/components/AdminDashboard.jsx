import { Card, CardContent, List, ListItem, Typography } from "@mui/material";

export default function AdminDashboard() {
    
    return (
        <main>
            <Card title='Admin Dashboard'>
                <CardContent className="flex justify-between items-center mx-4">
                    <section className="flex flex-col justify-center items-center">
                        <Typography>Student Count</Typography>
                    </section>
                    <section className="flex flex-col justify-center items-center">
                        <Typography>Course Count</Typography>
                    </section>
                    <section className="flex flex-col justify-center items-center">
                        <Typography>Most Signed Up For</Typography>
                    </section>
                </CardContent>
            </Card>
        </main>
    )
}