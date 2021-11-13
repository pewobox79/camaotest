import React, {useEffect, useState} from 'react'
import Box from '@mui/material/Box'

export default function FetchWeather(){

    const [temparature, setTemparature] = useState();

    useEffect(() => {
        fetch("https://weatherapi-com.p.rapidapi.com/current.json?q=munich", {
            "method": "GET",
            "headers": {
                "x-rapidapi-host": "weatherapi-com.p.rapidapi.com",
                "x-rapidapi-key": "f2f2dfce82mshcb64156556ea80ap1968b8jsn5e6669fe879d"
            }
        })
            .then(response => response.json())
            .then((data)=> setTemparature(data.current.temp_c))
            .catch(err => {
                console.error(err);
            });
    }, [])

    console.log(temparature)

    return (
        <Box sx={{display: "flex", justifyContent: "center", height: "100vh", alignItems: "center", flexDirection: "column", backgroundColor: "lightgrey"}}>
            <p><h1 style={{fontWeight: "lighter"}}>Aktuelle Temperatur</h1></p>
            <span style={{fontSize: "100px", fontWeight: "lighter"}}>Celsius</span>
            <p><span style={{fontSize: "300px", fontWeight: "lighter"}}>{temparature}</span></p>
        </Box>
    )
}

