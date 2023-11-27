import { Stack, SvgIcon, Typography } from "@mui/material";
import StyledPageHeadingTypography from "../components/StyledPageHeadingTypography";
import SettingsInputSvideoOutlinedIcon from '@mui/icons-material/SettingsInputSvideoOutlined';
import StyledLinkTypography from "../components/StyledLinkTypography";
import { yellow } from "@mui/material/colors";
import StypedSvgIcon from "../components/StypedSvgIcon";
import {openInNewTab} from "../utils/navUtils";
export default function About(){

    return <>
        <StyledPageHeadingTypography>About</StyledPageHeadingTypography>
        <Stack spacing={3}>
            <Stack direction={"row"} columnGap={1}>
                <StypedSvgIcon />
                <Typography>Hi, I am Bijian and I am a Full-stack developer currently working on Hungrybear gaming</Typography>
            </Stack>

            <Stack direction={"row"} columnGap={1}>
                <StypedSvgIcon />
                <Typography>Prevsiouly, I was a game developer with IGT(International Game Technology)</Typography>
            </Stack>

            <Stack direction={"row"} columnGap={1}>
                <StypedSvgIcon />
                <Typography>I have had the experiences working in frontend, backen and game developments, and have developed varirity of different skills sets, both professionally and personally</Typography>
            </Stack>

            <Stack direction={"row"} columnGap={1}>
                <StypedSvgIcon />
                <Typography>I have also developed few hobby projects randing from games to apps, my porfolio link</Typography>  <StyledLinkTypography>https://bijianwu.github.io/portfolio/</StyledLinkTypography>
            </Stack>

            <Stack direction={"row"} columnGap={1}>
                <StypedSvgIcon />
                <Typography>I blog and share my programming expeirences at</Typography> <StyledLinkTypography onClick={ () => openInNewTab("https://bijianwu.github.io/portfolio/")}>bijianwu.co.uk</StyledLinkTypography>
            </Stack>


        </Stack>

    </>
}