import Link from 'next/link';
import Button from '@mui/material/Button';

export default function News(){

    return(
        <Link href={"/news"}><Button style={{fontSize: "100px", padding: "50px"}}> News </Button></Link>
    )
}