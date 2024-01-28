import { Chip, Tab } from '@mui/material';
import { styled } from '@mui/material/styles';
import StyledChip from "./StyledChip";

const StypedDisplayOnlySmallChip = styled((props) => <Chip sx={{ fontSize: "12px", p: 1 }}  {...props} />)(({ theme }) => ({

  }));

export default StypedDisplayOnlySmallChip;