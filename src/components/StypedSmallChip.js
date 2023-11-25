import { Chip, Tab } from '@mui/material';
import { styled } from '@mui/material/styles';

const StypedSmallChip = styled((props) => <Chip sx={{ height:"24px",  marginTop: -1,  marginBottom: 2,  color: "rgb(42, 53, 71)", fontWeight:"600", display: "inline-flex", alignItems: "center", justifyContent: "center", '& .MuiChip-label': {paddingLeft: 1, paddingRight: 1, fontSize: "12px", height: "18px", verticalAlign: "center"}}}  {...props} />)(({ theme }) => ({

  }));

export default StypedSmallChip;