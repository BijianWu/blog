import { Stack, Typography } from "@mui/material";
import { Link } from "react-router-dom";
import StyledTypography from "../components/StyledTypography";
import StyledLinkTypography from "../components/StyledLinkTypography";
import StyledPageHeadingTypography from "../components/StyledPageHeadingTypography";

export default function Contact(){

    return <>
        <StyledPageHeadingTypography>Conact</StyledPageHeadingTypography>

        <Stack spacing={3}>
            <Stack direction={"row"}>
                <Typography  sx={{mr: 2}} >Email:</Typography>
                <StyledLinkTypography >bijian1@hotmail.com</StyledLinkTypography>
            </Stack>

            <Stack direction={"row"}>
                <Typography  sx={{mr: 2}} >LinkedIn:</Typography>
                <StyledLinkTypography >https://www.linkedin.com/in/bijian-wu-4b01ba176</StyledLinkTypography>
            </Stack>

            <Stack direction={"row"}>
                <Typography  sx={{mr: 2}} >Portfolio:</Typography>
                <StyledLinkTypography >https://bijianwu.github.io/portfolio</StyledLinkTypography>
            </Stack>
        </Stack>

{/* 
        <Typography variant="body1" lineHeight={2}>LinkedIn: <Link to="https://www.linkedin.com/in/bijian-wu-4b01ba176/">https://www.linkedin.com/in/bijian-wu-4b01ba176/</Link></Typography>
        <Typography variant="body1" lineHeight={2}>Portfolio: <Link to="https://bijianwu.github.io/portfolio/">https://bijianwu.github.io/portfolio/</Link></Typography> */}
    </>
}