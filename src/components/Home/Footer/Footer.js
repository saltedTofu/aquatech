import {Link, Typography} from '@mui/material';

function Footer(){

    const styles={
        footer:{
            width:'100%',
            paddingTop:'1%'
        },
        socials:{
            display:'flex',
            flexDirection:'row',
            justifyContent: 'center'
        },
        copyright:{
            textAlign: 'center',
            padding:'15px'
        }
    }
    return(
        <footer style={styles.footer}>
            <div style={styles.socials}>
                <Link sx={{marginRight:'10px'}}>Instagram</Link>
                <Link>Facebook</Link>
            </div>
            <Typography sx={styles.copyright}>© 2022 Aquatech Texas | Sugar Land, TX Water Softening Product and Installation</Typography>
        </footer>
    )
    
}
export default Footer;