import {Link, Typography, Box} from '@mui/material';
import './Footer.css'
function Footer(){

    return(
        <footer>
            <Box sx={{ bgcolor: 'secondary.main', paddingTop:'1%' }}>
                <div className="socials">
                    <Link sx={{marginRight:'10px'}}>Instagram</Link>
                    <Link>Facebook</Link>
                </div>
                <Typography className="copyright">© 2022 Aquatech Texas | Sugar Land, TX Water Softening Product and Installation</Typography>
            </Box>
        </footer>
    )
    
}
export default Footer;