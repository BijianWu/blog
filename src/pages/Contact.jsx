import { Stack, Typography, useMediaQuery } from "@mui/material";
import { Link } from "react-router-dom";
import StyledTypography from "../components/StyledTypography";
import StyledLinkTypography from "../components/StyledLinkTypography";
import StyledPageHeadingTypography from "../components/StyledPageHeadingTypography";
import { openInMailApp, openInNewTab } from "../utils/navUtils";
import { useTheme } from "@emotion/react";
import { useFontSize } from "../utils/useFontSize";

export default function Contact(){
    const theme = useTheme();
    const mdMatches = useMediaQuery(theme.breakpoints.up('md'));
    const noWrapTextStyle = { textOverflow: "ellipsis", overflow: "hidden", whiteSpace: "nowrap", maxWidth: "80vw" };
    const fontSize = useFontSize();
    return <>
        <StyledPageHeadingTypography>Conact</StyledPageHeadingTypography>

        <Stack spacing={3}>
            <Stack direction={mdMatches ? "row" : "column"} alignItems={"flex-start"}>
                <Typography  sx={{mr: 2}} fontSize={fontSize} >Email:</Typography>
                <StyledLinkTypography fontSize={fontSize}  onClick={ () => openInMailApp("bijian1@hotmail.com")} sx={noWrapTextStyle}>bijian1@hotmail.com</StyledLinkTypography>
            </Stack>

            <Stack direction={mdMatches ? "row" : "column"} alignItems={"flex-start"}>
                <Typography  sx={{mr: 2}} fontSize={fontSize}>LinkedIn:</Typography>
                <StyledLinkTypography fontSize={fontSize} onClick={ () => openInNewTab("https://www.linkedin.com/in/bijian-wu-4b01ba176")} sx={noWrapTextStyle}>https://www.linkedin.com/in/bijian-wu-4b01ba176</StyledLinkTypography>
            </Stack>

            <Stack direction={mdMatches ? "row" : "column"} alignItems={"flex-start"}>
                <Typography  sx={{mr: 2}} fontSize={fontSize} >Portfolio:</Typography>
                <StyledLinkTypography fontSize={fontSize} onClick={ () => openInNewTab("https://bijianwu.github.io/portfolio/")} sx={noWrapTextStyle}>https://bijianwu.github.io/portfolio</StyledLinkTypography>
            </Stack>
        </Stack>

{/* 
        <Typography variant="body1" lineHeight={2}>LinkedIn: <Link to="https://www.linkedin.com/in/bijian-wu-4b01ba176/">https://www.linkedin.com/in/bijian-wu-4b01ba176/</Link></Typography>
        <Typography variant="body1" lineHeight={2}>Portfolio: <Link to="https://bijianwu.github.io/portfolio/">https://bijianwu.github.io/portfolio/</Link></Typography> */}
    </>
}