import { Chip, Tab, Typography } from '@mui/material';
import { styled } from '@mui/material/styles';

const StyledTypography = styled((props) => <Typography variant="outlined" size="small" sx={{ fontSize: "1rem", cursor: "pointer" }} {...props} />)(({ theme }) => ({
    fontWeight: theme.typography.fontWeightRegular,
    color: '#1976d2',
    '&:hover': {
      color: "#ECAF72",
      opacity: 1,
      borderBottom: "1px solid #ECAF72",
      paddingBottom: "5px"
    },
    '&.Mui-focusVisible': {
      backgroundColor: '#d1eaff',
    },
  }));

export default StyledTypography;