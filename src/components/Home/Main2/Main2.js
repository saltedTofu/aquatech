import {Paper, Typography, Box} from '@mui/material'
import ServiceImage from '../../../utils/waterSoftener.jpg'
import Sink from '../../../utils/sink.png'
import Sprinkler from '../../../utils/sprinkler.png'
import Vent from '../../../utils/vent.png'
import Tap from '../../../utils/Tap.png'

import './Main2.css'

function Main2(){

    
    return(
        <div className="main2Container" id="services">
            <Box 
                className="left2Container"
                sx={{ bgcolor: 'secondary.main' }}
            >
                <Typography variant="h4">Our Services</Typography>
                <div className="serviceDescription">
                    <img src={Tap} className="serviceCartoon" alt='tap'></img>
                    <Typography>Maintenance: Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam rhoncus venenatis ex, tincidunt sodales magna suscipit ac.</Typography>
                </div>
                <div className="serviceDescription">
                    <img src={Sprinkler} className="serviceCartoon" alt="sprinkler"></img>
                    <Typography>Maintenance: Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam rhoncus venenatis ex, tincidunt sodales magna suscipit ac.</Typography>
                </div>
                <div className="serviceDescription">
                    <img src={Vent} className="serviceCartoon" alt="vent"></img>
                    <Typography>Maintenance: Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam rhoncus venenatis ex, tincidunt sodales magna suscipit ac.</Typography>
                </div>
                <div className="serviceDescription">
                    <img src={Sink} className="serviceCartoon" alt="sink"></img>
                    <Typography>Maintenance: Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam rhoncus venenatis ex, tincidunt sodales magna suscipit ac.</Typography>
                </div>
                
            </Box>
            <Box className="right2Container" sx={{ bgcolor: 'secondary.main' }}>
                <img src={ServiceImage} className="serviceImage" alt="installation"></img>
            </Box>
        </div>
    )
}
export default Main2