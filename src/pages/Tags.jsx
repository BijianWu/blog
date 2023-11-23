import { Chip, Grid, Link } from "@mui/material";
import StyledChip from "../components/StyledChip";

export default function Tags(){

    return <>
        <Grid container rowGap={2} columnGap={3}>
            <Grid item lg={3} xs={5}>
                <StyledChip label="Game Development"  />
            </Grid>

            <Grid item lg={3} xs={5}>
                <StyledChip label="Frontend Development" />
            </Grid>

            <Grid item lg={3} xs={5}>
                <StyledChip label="Backend Development" />
            </Grid>

            <Grid item lg={3} xs={5}>
                <StyledChip label="Programming Concept" />
            </Grid>

            <Grid item lg={3} xs={5}>
                <StyledChip label="Programming Technique" />
            </Grid>

        </Grid>

    </>
}