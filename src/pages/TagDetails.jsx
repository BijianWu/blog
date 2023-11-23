import { Chip, Grid, Link, Typography } from "@mui/material";
import StyledChip from "../components/StyledChip";
import { useParams } from "react-router-dom";

export default function TagDetails(){
    const { tagName } = useParams();
    const replaceDashTagName = tagName.replace("-", " ");
    const convertedTagName = replaceDashTagName.charAt(0).toUpperCase() + replaceDashTagName.slice(1)
    return <>
        <Typography>{convertedTagName}</Typography>

    </>
}