import { Typography } from "@mui/material";
import { Link } from "react-router-dom";

export default function Contact(){

    return <>
        <Typography variant="h5" lineHeight={2}>Conact</Typography>

        <Typography variant="h6" lineHeight={2}>Email: bijian1@hotmail.com</Typography>

        <Typography variant="h6" lineHeight={2}>LinkedIn: <Link to="https://www.linkedin.com/in/bijian-wu-4b01ba176/">https://www.linkedin.com/in/bijian-wu-4b01ba176/</Link></Typography>
        <Typography variant="h6" lineHeight={2}>Portfolio: <Link to="https://bijianwu.github.io/portfolio/">https://bijianwu.github.io/portfolio/</Link></Typography>
    </>
}