import { createTheme } from '@mui/material/styles';

//Palette
/*
#0B0C10 - black
#1F2833 - dark grey
#C5C6C7 - light grey
#66FCF1 - light blue
#45A29E - blue-grey
*/
const theme = createTheme({
    components:{
        MuiMenu:{
            styleOverrides:{
                list:{
                    backgroundColor:'#1F2833'
                }
            }
        }
    },
    typography:{
        button:{
            textTransform:"none"
        },
        h1:{
            fontSize:'12rem'
        }
    },
    palette: {
        mode:"dark",
        background:{
            paper:'#0B0C10' //black
        },
        text: {
            primary:'#C5C6C7' //dark grey
        },
        primary: { //color of buttons
            main: '#66FCF1', //light blue
            dark: '#66FCF1', //light blue
            contrastText: '#1F2833', //dark grey
        },
        secondary: {
            light: '#484848',
            main: '#212121',
            dark: '#000000',
            contrastText: '#fafafa',
        }
    },
});

export default theme;