import { Button, Typography } from "@mui/material";
import { NextPage } from "next";

type HeaderProps = {}

const Header: NextPage<HeaderProps> = () => {
    return (
        <>
            <Typography>username: 山田太郎さん</Typography>
            <Button variant="outlined">Sign Out</Button>
        </>
    )
}

export default Header
