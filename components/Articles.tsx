import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';

const bull = (
    <Box
        component="span"
        sx={{display: 'inline-block', mx: '2px', transform: 'scale(0.8)'}}
    >
        •
    </Box>
);


export default function Articles(props) {
    return (
        <Card sx={{minWidth: 275, marginBottom: "20px", width: "90%"}}>
            <CardContent>
                <Typography sx={{fontSize: 14}} color="text.secondary" gutterBottom>
                    {props.date}
                </Typography>
                <Typography variant="h5" component="div">
                    {props.title}
                </Typography>
                <Typography sx={{mb: 1.5}} color="text.secondary">
                    {props.summary}
                </Typography>
                <Typography variant="body2">
                    Created by: {props.author}
                    <br/>
                    {props.source}
                </Typography>
            </CardContent>
            <CardActions>
                <Button size="small">Learn More</Button>
            </CardActions>
        </Card>
    );
}
