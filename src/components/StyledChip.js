import { Chip, Tab } from '@mui/material';
import { styled } from '@mui/material/styles';

const StyledChip = styled((props) => <Chip variant="outlined" size="small" clickable sx={{px: 3, py: 2, fontSize: 14}} {...props} />)(({ theme }) => ({
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
    },
    '&.Mui-focusVisible': {
      backgroundColor: '#d1eaff',
    },
  }));

export default StyledChip;