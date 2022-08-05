import titleBG from '../../../utils/titleBG.png';
import Logo from '../../../utils/logo.png';
import Line from '../../../utils/line.png';
import NiceMan from '../../../utils/niceMan.png'
import Yang from '../../../utils/yang.jpg';
import TruckMan from '../../../utils/TruckMan.jpg'
import Stream from '../../../utils/stream.png'
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination, Navigation } from "swiper";
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import './Title.css'
import {Button, Typography} from '@mui/material'

const styles={
    container:{
        display:'flex',
        flexDirection:'row',
        width:'100%',
        paddingTop:'10%',
    },
    leftTitle:{
        display:'flex',
        flexDirection:'column',
        width:'50%',
        alignItems:'center',
        textAlign:'center',
        justifyContent:'center'
    },
    rightTitle:{
        display:'flex',
        flexDirection:'column',
        width:'50%',
        alignItems:'center',
        justifyContent:'center',
        textAlign:'center'
    },
    logo:{
        width:'420px'
    },
    stream:{
        width:'200px',
        marginTop:'30px',
        marginBottom:'30px'
    }
}
function Title(){
    return(
        <div style={styles.container}>
            <div style={styles.leftTitle}>
                <img src={Logo} alt='aqua tech texas logo' style={styles.logo}></img>
                <Typography variant="h4">Quality Water Filtration Systems, Professional Installation and Maintenance</Typography>
                <img src={Stream} style={styles.stream}alt="graphic line"/>
            </div>
            <div style={styles.rightTitle}>
                <Swiper
                    spaceBetween={30}
                    centeredSlides={true}
                    autoplay={{
                        delay: 2500,
                        disableOnInteraction: false,
                    }}
                    pagination={{
                        clickable: true,
                    }}
                    navigation={true}
                    modules={[Autoplay, Pagination, Navigation]}
                    className="mySwiper"
                >
                    <SwiperSlide><img alt="man installing water softener" src={NiceMan}/></SwiperSlide>
                    <SwiperSlide><img alt="main standing next to truck" src={TruckMan}/></SwiperSlide>
                    <SwiperSlide><img alt="owner and founder" src={Yang}/></SwiperSlide>
                </Swiper>
            </div>
        </div>
    )
}

export default Title