import { Chip, Tab, Typography } from '@mui/material';
import { grey } from '@mui/material/colors';
import { styled } from '@mui/material/styles';

const StyledDisabledTypography = styled((props) => <Typography variant="outlined" size="small" sx={{ fontSize: "1rem", color: grey[600] }} {...props} />)(({ theme }) => ({



  }));

export default StyledDisabledTypography;