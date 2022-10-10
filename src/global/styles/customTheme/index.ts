import { amber } from '@mui/material/colors';
import { pink } from '@mui/material/colors';
import { createTheme } from '@mui/material/styles';

//https://mui.com/material-ui/customization/default-theme/
//https://mui.com/pt/material-ui/customization/palette/

const customTheme = createTheme({
  palette: {
    primary: {
      main: pink[500]
    },
    secondary: {
      main: amber[600]
    }
  }
});

export default customTheme;
