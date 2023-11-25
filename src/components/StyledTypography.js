import { Chip, Tab, Typography } from '@mui/material';
import { styled } from '@mui/material/styles';

const StyledTypography = styled((props) => <Typography variant="outlined" size="small" sx={{ fontSize: 20 }} {...props} />)(({ theme }) => ({
    fontWeight: theme.typography.fontWeightRegular,
    marginRight: theme.spacing(1),
    color: '#1976d2',
    fontFamily: [
      '-apple-system',
      'BlinkMacSystemFont',
      '"Segoe UI"',
      'Roboto',
      '"Helvetica Neue"',
      'Arial',
      'sans-serif',
      '"Apple Color Emoji"',
      '"Segoe UI Emoji"',
      '"Segoe UI Symbol"',
    ].join(','),
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