import React from "react";
import { Zoom } from "react-awesome-reveal";

 
import CalendarMonthIcon from '@mui/icons-material/CalendarMonth';
import LocationOnIcon from '@mui/icons-material/LocationOn'; 
import BackgroundImg from '../../resources/images/background.jpg'

const VenueNfo = () =>{
    return( 
        <div className="bck_black"  style={{ backgroundImage:`url(${BackgroundImg})`  }}>
            <div className="center_wrapper">
                <div className="vn_wrapper">

                    <Zoom className="vn_item" triggerOnce>
                        <div>
                            <div className="vn_outer">
                                <div className="vn_inner">                                    
                                   <div className="vn_icon_square bck_red2">                                    
                                        <div className="calendarIcon"> 
                                            <CalendarMonthIcon fontSize="large" />
                                        </div>
                                   </div>                       
                                    <div className="vn_title">
                                        Event & Date 
                                    </div>
                                    <div className="vn_desc">
                                        24 Dez, 2022
                                    </div>
                                </div> 
                            </div>  
                        </div>
                    </Zoom>
                    <Zoom className="vn_item" triggerOnce>
                        <div>
                            <div className="vn_outer">
                                <div className="vn_inner">
                                    <div className="vn_icon_square bck_yellow"></div>
                                    <div className="vn_icon_square" > 
                                        <div className="calendarIcon"> 
                                            <LocationOnIcon fontSize="large" />
                                        </div>
                                    
                                    </div>
                                    
                                    <div className="vn_title">
                                        Localização
                                    </div>
                                    <div className="vn_desc">
                                        <a className="redirectLink" href="https://www.google.com/maps?q=facom+ufms"> FACOM - UFMS </a> 
                                    </div>
                                </div> 
                            </div>  
                        </div>
                    </Zoom>
                 
                </div>

            </div>
        </div>
    )
}

export default VenueNfo;