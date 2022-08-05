import {Paper, Typography, Popover, Button, Link, Menu, MenuItem} from '@mui/material';
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import {Link as RouterLink, useNavigate} from 'react-router-dom';
import {useState} from 'react'
import Phone from '../../utils/phone.png'
import Logo from '../../utils/headerLogo.png'

function Header(){
    const [anchorEl, setAnchorEl] = useState(null);
    const open = Boolean(anchorEl);
    const handleClick = (event) => {
        setAnchorEl(event.currentTarget);
    };
    const handleClose = () => {
        setAnchorEl(null);
    };
    let navigate = useNavigate();

    const styles={
        headerContainer:{
            position:'fixed',
            width:'100%',
            zIndex:'2'
        },
        navStyle:{
            width:'95%',
            display:'flex',
            flexDirection:'row',
            justifyContent:'space-between',
            alignItems:'center',
            marginLeft:'5px'
        },
        logoStyle:{
            width:'110px'
        },
        phoneDiv:{
            display:'flex',
            flexDirection:'row',
            alignItems:'center',
            justifyContent:'center'
        },
        phoneImage:{
            width:'40px',
            marginRight:'12px'
        },
        empty:{
            opacity:'0',
            width:'200px'
        },
        productDropDown:{
            display:'flex',
            flexDirection:'row',
            alignItems:'center',
            justifyContent:'center'
        },
        menuItem:{
            display:'flex',
            flexDirection:'row',
            alignItems:'center',
            justifyContent:'space-between'
        }
        
    }
    return(
        <header>
            <Paper square sx={styles.headerContainer}>
                <nav style={styles.navStyle}>
                    <RouterLink to='/'><img alt="aquatech logo" src={Logo} style={styles.logoStyle}></img></RouterLink>
                    <Link variant="h5">About</Link>
                    <Link variant="h5">Services</Link>
                    <Link
                        id="basic-button"
                        aria-controls={open ? 'basic-menu' : undefined}
                        aria-haspopup="true"
                        aria-expanded={open ? 'true' : undefined}
                        onClick={handleClick}
                        variant="h5"
                        sx={styles.productDropDown}
                    >
                        Products
                        <ArrowDropDownIcon />
                    </Link>
                    <Menu
                        id="basic-menu"
                        anchorEl={anchorEl}
                        open={open}
                        onClose={handleClose}
                        MenuListProps={{
                        'aria-labelledby': 'basic-button',
                        }}
                    >
                        <MenuItem sx={styles.menuItem} onClick={()=>{return navigate('/water-softener')}}>Water Softener<ArrowForwardIosIcon color="primary" fontSize='small' sx={{marginLeft:'10px'}}/></MenuItem>
                        <MenuItem sx={styles.menuItem} onClick={()=>{return navigate('/bidet')}}>Bidet <ArrowForwardIosIcon color="primary" fontSize='small' sx={{marginLeft:'10px'}}/></MenuItem>
                        <MenuItem sx={styles.menuItem} onClick={()=>{return navigate('/ro')}}>RO <ArrowForwardIosIcon color="primary" fontSize='small' sx={{marginLeft:'10px'}}/></MenuItem>
                        <MenuItem sx={styles.menuItem} onClick={()=>{return navigate('/ice-maker')}}>Ice Maker <ArrowForwardIosIcon color="primary" fontSize='small' sx={{marginLeft:'10px'}}/></MenuItem>
                    </Menu>
                    <Link variant="h5">Contact</Link>
                    <div style={styles.empty}>
                    </div>
                    <div style={styles.phoneDiv}>
                        <img src={Phone} style={styles.phoneImage} alt='phone icon'></img>
                        <Typography variant="h6">281-888-1283</Typography>
                    </div>
                    
                </nav>
            </Paper>
        </header>
    )
}
export default Header