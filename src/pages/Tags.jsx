import { Badge, Box, Chip, Grid, Link, Stack, Typography } from "@mui/material";
import StyledChip from "../components/StyledChip";
import { useNavigate } from "react-router-dom";
import MutedTypography from "../components/MutedTypography";
import StyledPageHeadingTypography from "../components/StyledPageHeadingTypography";

export default function Tags(){
    const navigate = useNavigate();

    return <>
        <StyledPageHeadingTypography>Tags</StyledPageHeadingTypography>
        <Grid container rowGap={2} columnGap={3}>
            <Grid item lg={3} xs={5}>
                <StyledChip label={
                    <Stack direction={"row"}>
                        Game Development <MutedTypography>1</MutedTypography>
                    </Stack>
                    
                } onClick= { () => navigate("game-development") } />
            </Grid>

            <Grid item lg={3} xs={5}>
                <StyledChip label={
                    <Stack direction={"row"}>
                        Frontend development <MutedTypography>1</MutedTypography>
                    </Stack>
                } onClick= { () => navigate("frontend-development") } />
            </Grid>

            <Grid item lg={3} xs={5}>
                <StyledChip label={
                    <Stack direction={"row"}>
                        Backend development <MutedTypography>4</MutedTypography>
                    </Stack>
                } onClick= { () => navigate("backend-development") } />
            </Grid>

            <Grid item lg={3} xs={5}>
                <StyledChip label={
                    <Stack direction={"row"}>
                        Programming concept <MutedTypography>3</MutedTypography>
                    </Stack>
                } onClick= { () => navigate("programming-concept") } />
            </Grid>

            <Grid item lg={3} xs={5}>
                <StyledChip label={
                    <Stack direction={"row"}>
                        Programming technique <MutedTypography>2</MutedTypography>
                    </Stack>
                } onClick= { () => navigate("programming-technique") } />
            </Grid>

        </Grid>

    </>
}