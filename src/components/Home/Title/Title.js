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

function Title(){
    return(
        <div className="container">
            <div className="leftTitle">
                <img src={Logo} alt='aqua tech texas logo' className="logo"></img>
                <Typography variant="h4">Quality Water Filtration Systems, Professional Installation and Maintenance</Typography>
                <img src={Stream} className="stream" alt="graphic line"/>
            </div>
            <div className="rightTitle">
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
                    <SwiperSlide><img alt="man installing water softener" src={NiceMan} /></SwiperSlide>
                    <SwiperSlide><img alt="main standing next to truck" src={TruckMan}/></SwiperSlide>
                    <SwiperSlide><img alt="owner and founder" src={Yang}/></SwiperSlide>
                </Swiper>
            </div>
        </div>
    )
}

export default Title