import { Chip, Grid, Link } from "@mui/material";
import StyledChip from "../components/StyledChip";
import { useNavigate } from "react-router-dom";

export default function Tags(){
    const navigate = useNavigate();

    return <>
        <Grid container rowGap={2} columnGap={3}>
            <Grid item lg={3} xs={5}>
                <StyledChip label="Game Development" onClick= { () => navigate("game-development") } />
            </Grid>

            <Grid item lg={3} xs={5}>
                <StyledChip label="Frontend Development" onClick= { () => navigate("frontend-development") } />
            </Grid>

            <Grid item lg={3} xs={5}>
                <StyledChip label="Backend Development" onClick= { () => navigate("backend-development") } />
            </Grid>

            <Grid item lg={3} xs={5}>
                <StyledChip label="Programming Concept" onClick= { () => navigate("programming-concept") } />
            </Grid>

            <Grid item lg={3} xs={5}>
                <StyledChip label="Programming Technique" onClick= { () => navigate("programming-technique") } />
            </Grid>

        </Grid>

    </>
}