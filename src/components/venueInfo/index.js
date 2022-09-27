import React from "react";
import { Zoom } from "react-awesome-reveal";

import icon_calendar from '../../resources/images/icons/calendar.png'
import icon_location from '../../resources/images/icons/location.png'
const VenueNfo = () =>{
    return(
        <div className="bck_black">
            <div className="center_wrapper">
                <div className="vn_wrapper">

                    <Zoom className="vn_item" triggerOnce>
                        <div>
                            <div className="vn_outer">
                                <div className="vn_inner">
                                    <div className="vn_icon_square bck_red"></div>
                                    <div 
                                        className="vn_icon"
                                        style={{
                                            backgroudColor:`url(${icon_calendar})`
                                        }}
                                    ></div>
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
                                    <div 
                                        className="vn_icon"
                                        style={{
                                            backgroudColor:`url(${icon_location})`
                                        }}
                                    ></div>
                                    <div className="vn_title">
                                        Localização
                                    </div>
                                    <div className="vn_desc">
                                        FACOM - UFMS
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