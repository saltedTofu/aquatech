import { createTheme } from '@mui/material/styles';

//Palette
/*
#0B0C10 - black
#1F2833 - dark grey
#C5C6C7 - light grey
#66FCF1 - light blue
#45A29E - blue-grey
*/
const darkBlueTheme = {
   bg1:'#0B0C10',
   bg2:'#1F2833',
   text1:'#C5C6C7',
   text2:'#45A29E',
   accent:'#66FCF1',
}
const TYLERSTHEME = {
    bg1:'#0B0C10',
    bg2:'#1F2833',
    text1:'#FFFFFF',
    accent:'#66FCF1'
}
const sophisticatedTheme = {
    bg1:'#5D5C61',
    bg2:'#7395AE',
    text1:'#557A95',
    text2:'#B1A296',
    accent:'#379683',
}
const elegantTheme = {
    bg1:'#2C3531',
    bg2:'#116466',
    text1:'#D1E8E2',
    text2:'#D9B08C',
    accent:'#FFCB9A',
}
const monochromatic = {
    bg1:'#206EDF',
    bg2:'#4D8BE5',
    text1:'#FFFFFF',
    // text2:'#',
    // accent:'#19E4E6',
}
const newTheme = {
    bg1:'#',
    bg2:'#',
    text1:'#',
    text2:'#',
    accent:'#',
}
const chosenTheme = TYLERSTHEME;

const theme = createTheme({
    components:{
        MuiMenu:{
            styleOverrides:{
                list:{
                    backgroundColor:chosenTheme.bg2
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
            paper:chosenTheme.bg2
        },
        text: {
            primary:chosenTheme.text1 //dark grey
        },
        primary: {
            main: chosenTheme.bg1,
            // dark: chosenTheme.light, //light blue
            // contrastText: chosenTheme.dark, //dark grey
        },
        secondary: {
            light: '#484848',
            main: chosenTheme.bg2,
            dark: '#000000',
            contrastText: '#fafafa',
        }
    },
});

export default theme;