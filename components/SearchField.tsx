import React, {useState} from 'react'

import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';

export default function SearchField(props) {

    const [searchValue, setSearchValue] = useState()


    // function handleChange(e) {
    //     setSearchValue(e.target.value)
    //
    // }

    function onKeypress (e){
        if(e.keyCode == 13) {
            console.log('value', e.target.value);
            props.setSearchTerm(e.target.value)
        }
    }


    return (
        <Box
            sx={{
                width: 500,
                maxWidth: '100%',
                margin: "0 auto"
            }}
        >
            <TextField fullWidth label="Search for News" id="fullWidth" onKeyDown={onKeypress}/>
        </Box>
    )
}