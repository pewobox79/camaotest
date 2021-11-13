import Link from 'next/link';
import Button from '@mui/material/Button';

export default function Weather(){

    return(
        <Link href={"/weatherpage"}><Button style={{fontSize: "100px", padding: "50px"}}> Weather </Button></Link>
    )
}