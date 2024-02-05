import { Badge, Box, Chip, Grid, Link, Stack, Typography, useMediaQuery } from "@mui/material";
import StyledChip from "../components/StyledChip";
import { useNavigate } from "react-router-dom";
import MutedTypography from "../components/MutedTypography";
import StyledPageHeadingTypography from "../components/StyledPageHeadingTypography";
import { useTheme } from "@emotion/react";
import { useFontSize } from "../utils/useFontSize";

export default function Tags(){
    const fontSize = useFontSize();
    const navigate = useNavigate();
    const theme = useTheme();
    const mdMatches = useMediaQuery(theme.breakpoints.up('md'));
    return <>
        <StyledPageHeadingTypography>Tags</StyledPageHeadingTypography>
        <Grid container rowGap={2} columnGap={3}   direction={ mdMatches ? "row" : "column"}
  alignItems="center"
  justifyContent="center">
                <Grid item lg={3} md={5} xs={12}>
                <StyledChip label={
                    <Stack direction={"row"} fontSize={fontSize}> 
                        Programming principle <MutedTypography>1</MutedTypography>
                    </Stack>
                    
                } onClick= { () => navigate("programming-principle") } />
            </Grid>

            <Grid item lg={3} md={5} xs={12}>
                <StyledChip label={
                    <Stack direction={"row"} fontSize={fontSize} >
                        Design pattern <MutedTypography>1</MutedTypography>
                    </Stack>
                } onClick= { () => navigate("design-pattern") } />
            </Grid>

            {/* <Grid item lg={3} md={5} xs={12}>
                <StyledChip label={
                    <Stack direction={"row"}>
                        Game Development <MutedTypography>1</MutedTypography>
                    </Stack>
                    
                } onClick= { () => navigate("game-development") } />
            </Grid>

            <Grid item lg={3} md={5} xs={12}>
                <StyledChip label={
                    <Stack direction={"row"}>
                        Frontend development <MutedTypography>1</MutedTypography>
                    </Stack>
                } onClick= { () => navigate("frontend-development") } />
            </Grid>

            <Grid item lg={3} md={5} xs={12}>
                <StyledChip label={
                    <Stack direction={"row"}>
                        Backend development <MutedTypography>4</MutedTypography>
                    </Stack>
                } onClick= { () => navigate("backend-development") } />
            </Grid>

            <Grid item lg={3} md={5} xs={12}>
                <StyledChip label={
                    <Stack direction={"row"}>
                        Programming concept <MutedTypography>3</MutedTypography>
                    </Stack>
                } onClick= { () => navigate("programming-concept") } />
            </Grid>

            <Grid item lg={3} md={5} xs={12}>
                <StyledChip label={
                    <Stack direction={"row"}>
                        Programming technique <MutedTypography>2</MutedTypography>
                    </Stack>
                } onClick= { () => navigate("programming-technique") } />
            </Grid> */}

        </Grid>

    </>
}