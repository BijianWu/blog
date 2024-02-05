import { useMediaQuery, useTheme } from "@mui/material";

export function useFontSize(){
    const theme = useTheme();
    const smMatches = useMediaQuery(theme.breakpoints.up('sm'));

    return smMatches?  "1rem": "0.9rem";
}