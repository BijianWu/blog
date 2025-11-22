import { Chip, Tab, Typography } from '@mui/material';
import { styled } from '@mui/material/styles';

const StyledLinkTypography = styled((props) => <Typography variant="outlined" size="small" sx={{  cursor: "pointer" }} {...props} />)(({ theme }) => ({
    fontWeight: theme.typography.fontWeightRegular,
    color: '#1976d2',
    borderBottom: "1px solid #1976d2",
    paddingBottom: "1px",
    '&:hover': {
      color: "#ECAF72",
      opacity: 1,
      borderBottom: "1px solid #ECAF72",
      paddingBottom: "1px"
    },
    '&.Mui-focusVisible': {
      backgroundColor: '#d1eaff',
    },
  }));

export default StyledLinkTypography;