import { Chip, Grid, Link, List, ListItem, Typography } from "@mui/material";
import StyledChip from "../components/StyledChip";
import { useNavigate, useParams } from "react-router-dom";
import StyledTypography from "../components/StyledTypography";
import { removeDashWithSpaceAndCapFirstLetter } from "../utils/textConverterUtils";

export default function TagDetails(){
    const { tagName } = useParams();

    const convertedTagName = removeDashWithSpaceAndCapFirstLetter(tagName);
    const navigate = useNavigate();

    return <>
        <Typography>{convertedTagName}</Typography>
        <List sx={{ listStyleType: 'disc' }}>
            <ListItem sx={{ display: 'list-item' }} >
                <StyledTypography onClick={() => navigate("/posts/good-article-2")}>good article 2</StyledTypography>............ Nov 21, 2022
                </ListItem>
            <ListItem sx={{ display: 'list-item' }}><StyledTypography onClick={() => navigate("/posts/good-article-1")}>good article 1</StyledTypography> ............ Nov 20, 2022</ListItem>
        </List>
    </>
}