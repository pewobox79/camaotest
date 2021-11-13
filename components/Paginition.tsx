import Button from '@mui/material/Button';
import Box from '@mui/material/Box';

export default function Paginition(props) {

    function decrement(e) {
        props.setPageNumber(props.pageNumber - 1)
    }

    function increment(e) {
            props.setPageNumber(props.pageNumber + 1)
    }


    return (
        <Box sx={{
            width: 500,
            maxWidth: '100%',
            margin: "0 auto"
        }}>
            <Button onMouseDown={decrement}>Before</Button>
            <Button onMouseDown={increment}>Next</Button>
        </Box>

    )
}