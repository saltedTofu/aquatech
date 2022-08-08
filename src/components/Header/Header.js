import {Paper, Typography, Link, Menu, MenuItem, AppBar, Toolbar, IconButton, Button} from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import {Link as RouterLink, useNavigate} from 'react-router-dom';
import {useState, useEffect} from 'react'
import Phone from '../../utils/phone.png'
import Logo from '../../utils/headerLogo.png'
import { HashLink } from 'react-router-hash-link';
import './Header.css'

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

    return(
        <header>
            <div>
                <Paper square className='webContainer'>
                    <nav className='navStyle'>
                        <RouterLink to='/'><img alt="aquatech logo" src={Logo} className='logoStyle'></img></RouterLink>
                        <HashLink to="/#about"><Link className='navLink'>About</Link></HashLink>
                        <HashLink to="/#services"><Link className='navLink'>Services</Link></HashLink>
                        <Link
                            id="basic-button"
                            aria-controls={open ? 'basic-menu' : undefined}
                            aria-haspopup="true"
                            aria-expanded={open ? 'true' : undefined}
                            onClick={handleClick}
                            className='productDropDown'
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
                            <MenuItem className='menuItem' onClick={()=>{return navigate('/water-softener')}}>Water Softener<ArrowForwardIosIcon color="primary" fontSize='small' sx={{marginLeft:'10px'}}/></MenuItem>
                            <MenuItem className='menuItem' onClick={()=>{return navigate('/bidet')}}>Bidet <ArrowForwardIosIcon color="primary" fontSize='small' sx={{marginLeft:'10px'}}/></MenuItem>
                            <MenuItem className='menuItem' onClick={()=>{return navigate('/ro')}}>RO <ArrowForwardIosIcon color="primary" fontSize='small' sx={{marginLeft:'10px'}}/></MenuItem>
                            <MenuItem className='menuItem' onClick={()=>{return navigate('/ice-maker')}}>Ice Maker <ArrowForwardIosIcon color="primary" fontSize='small' sx={{marginLeft:'10px'}}/></MenuItem>
                        </Menu>
                        <HashLink to="/#contact"><Link className="navLink">Contact</Link></HashLink>
                        <div className="empty">
                        </div>
                        <div className="phoneDiv">
                            <img src={Phone} className="phoneImage" alt='phone icon'></img>
                            <Typography variant="h6" id="phoneNumber">281-888-1283</Typography>
                        </div>
                        
                    </nav>
                </Paper>
            </div>

            <div className="mobileContainer"> 
                <AppBar >
                    <Toolbar>
                        <IconButton
                            size="large"
                            edge="start"
                            color="inherit"
                            aria-label="menu"
                            sx={{ mr: 2 }}
                        >
                            <MenuIcon />
                        </IconButton>
                        <div className="phoneDiv">
                            <img src={Phone} className="phoneImage" alt='phone icon'></img>
                            <Typography variant="h6">281-888-1283</Typography>
                        </div>
                    </Toolbar>
                </AppBar>
            </div>

        </header>
    )
}
export default Header