import { Chip, Grid, Link, List, ListItem, Typography } from "@mui/material";
import StyledChip from "../components/StyledChip";
import { useNavigate, useParams } from "react-router-dom";
import StyledTypography from "../components/StyledTypography";
import { removeDashWithSpaceAndCapFirstLetter } from "../utils/textConverterUtils";
import StyledPageHeadingTypography from "../components/StyledPageHeadingTypography";

export default function DesignPatternTagDetails(){
    const { tagName } = useParams();

    const convertedTagName = removeDashWithSpaceAndCapFirstLetter(tagName);
    const navigate = useNavigate();

    return <>
        <StyledPageHeadingTypography>{convertedTagName}</StyledPageHeadingTypography>
        <List sx={{ listStyleType: 'disc' }}>
            <ListItem sx={{ display: 'list-item' }} >
                <StyledTypography onClick={() => navigate("/tags/design-pattern/posts/bridge-design-pattern")}>Bridge design pattern</StyledTypography>............ Dec 6, 2022
                </ListItem>
        </List>
    </>
}