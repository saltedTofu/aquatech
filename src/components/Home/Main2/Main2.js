import {Paper, Typography} from '@mui/material'
import ServiceImage from '../../../utils/waterSoftener.jpg'
import Sink from '../../../utils/sink.png'
import Sprinkler from '../../../utils/sprinkler.png'
import Vent from '../../../utils/vent.png'
import Tap from '../../../utils/Tap.png'

function Main2(){

    const styles={
        main1Container:{
            display:'flex',
            flexDirection:'row'
        },
        leftContainer:{
            paddingBottom:'50px',
            paddingTop:'50px',
            paddingLeft:'15px',
            paddingRight:'15px',
            width:'70%',
            textAlign:'center',
            backgroundColor:'#1F2833',
            display:'flex',
            flexDirection:'column',
            justifyContent:'center',
            alignItems:'center'
        },
        rightContainer:{
            width:'30%',
            textAlign:'center',
            backgroundColor:'#0B0C10',
        },
        serviceCartoon:{
            width:'40px',
            marginRight:'10px'
        },
        serviceDescription:{
            display:'flex',
            flexDirection:'row',
            marginTop:'5px',
            marginBottom:'5px'
        },
        serviceImage:{
            width:'400px',
        }
    }
    return(
        <div style={styles.main1Container} id="services">
            <Paper square sx={styles.leftContainer}>
                <Typography variant="h4">Our Services</Typography>
                <div style={styles.serviceDescription}>
                    <img src={Tap} style={styles.serviceCartoon}></img>
                    <Typography>Maintenance: Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam rhoncus venenatis ex, tincidunt sodales magna suscipit ac.</Typography>
                </div>
                <div style={styles.serviceDescription}>
                    <img src={Sprinkler} style={styles.serviceCartoon}></img>
                    <Typography>Maintenance: Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam rhoncus venenatis ex, tincidunt sodales magna suscipit ac.</Typography>
                </div>
                <div style={styles.serviceDescription}>
                    <img src={Vent} style={styles.serviceCartoon}></img>
                    <Typography>Maintenance: Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam rhoncus venenatis ex, tincidunt sodales magna suscipit ac.</Typography>
                </div>
                <div style={styles.serviceDescription}>
                    <img src={Sink} style={styles.serviceCartoon}></img>
                    <Typography>Maintenance: Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam rhoncus venenatis ex, tincidunt sodales magna suscipit ac.</Typography>
                </div>
                
            </Paper>
            <Paper square sx={styles.rightContainer}>
                <img src={ServiceImage} style={styles.serviceImage}></img>
            </Paper>
        </div>
    )
}
export default Main2