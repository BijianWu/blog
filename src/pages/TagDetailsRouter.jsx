import { Chip, Grid, Link, List, ListItem, Typography } from "@mui/material";
import StyledChip from "../components/StyledChip";
import { useNavigate, useParams } from "react-router-dom";
import StyledTypography from "../components/StyledTypography";
import { removeDashWithSpaceAndCapFirstLetter } from "../utils/textConverterUtils";
import DesignPatternTagDetails from "../tag/DesignPatternTagDetails";
import ProgrammingPrincipleTagDetails from "../tag/ProgrammingPrincipleTagDetails";
export default function TagDetailsRouter(){
    const { tagName } = useParams();



    if(tagName === "programming-principle") {
        return <ProgrammingPrincipleTagDetails />
    } else if(tagName === "design-pattern") {
        return <DesignPatternTagDetails />
    }

    return "no yet released";

}