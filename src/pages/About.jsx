import { Stack, SvgIcon, Typography, useMediaQuery } from "@mui/material";
import StyledPageHeadingTypography from "../components/StyledPageHeadingTypography";
import SettingsInputSvideoOutlinedIcon from '@mui/icons-material/SettingsInputSvideoOutlined';
import StyledLinkTypography from "../components/StyledLinkTypography";
import { yellow } from "@mui/material/colors";
import StypedSvgIcon from "../components/StypedSvgIcon";
import {openInNewTab} from "../utils/navUtils";
import { useTheme } from "@emotion/react";
import { useFontSize } from "../utils/useFontSize";
export default function About(){
    const theme = useTheme();
    const mdMatches = useMediaQuery(theme.breakpoints.up('md'));
    const noWrapTextStyle = { textOverflow: "ellipsis", overflow: "hidden", whiteSpace: "nowrap"  };
    const fontSize = useFontSize();
    return <>
        <StyledPageHeadingTypography>About</StyledPageHeadingTypography>
        <Stack spacing={3}>
            <Stack direction={mdMatches ? "row" : "column"}  columnGap={1}>
                <StypedSvgIcon />
                <Typography fontSize={fontSize}>Hi, I am Bijian and I am a Full-stack developer currently working on Hungrybear gaming</Typography>
            </Stack>

            <Stack direction={mdMatches ? "row" : "column"}columnGap={1}>
                <StypedSvgIcon />
                <Typography fontSize={fontSize}>Prevsiouly, I was a game developer with IGT(International Game Technology)</Typography>
            </Stack>

            <Stack direction={mdMatches ? "row" : "column"}  columnGap={1}>
                <StypedSvgIcon />
                <Typography fontSize={fontSize}>I have had the experiences working in frontend, backen and game developments, and have developed varirity of different skills sets, both professionally and personally</Typography>
            </Stack>

            <Stack direction={mdMatches ? "row" : "column"}  columnGap={1}>
                <StypedSvgIcon />
                <Typography fontSize={fontSize}>I have also developed few hobby projects randing from games to apps, here is my
                <StyledLinkTypography fontSize={fontSize} onClick={ () => openInNewTab("https://bijianwu.github.io/portfolio/")} > porfolio link </StyledLinkTypography>
                </Typography> 
            </Stack>

            <Stack direction={mdMatches ? "row" : "column"}  columnGap={1}>
                <StypedSvgIcon />
                <Typography fontSize={fontSize}>I blog and share my programming expeirences in this blog site
                    
                </Typography>
            </Stack>


        </Stack>

    </>
}