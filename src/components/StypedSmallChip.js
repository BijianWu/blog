import { Chip, Tab } from '@mui/material';
import { styled } from '@mui/material/styles';
import StyledChip from "./StyledChip";

const StypedSmallChip = styled((props) => <StyledChip sx={{ fontSize: "12px", p: 1 }}  {...props} />)(({ theme }) => ({

  }));

export default StypedSmallChip;