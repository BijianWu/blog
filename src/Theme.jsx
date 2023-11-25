import { createTheme } from '@mui/material/styles';

export const theme = createTheme({
  typography: {
    fontFamily: ['Plus Jakarta Sans', 'sans-serif'].join(','),
    body1: {

      lineHeight: "28px"
    },
    body2: {

      lineHeight: "28px"
    }
    // button: {
    //   fontFamily: ['Plus Jakarta Sans', 'sans-serif'].join(','),

    // },
  }
});