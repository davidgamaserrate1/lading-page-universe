import React,{useState,useEffect} from "react";
import { Fade,Slide } from "react-awesome-reveal";
const Probability = () => {
    return (
        <div className="center_wrapper">
            <div className="discount_wrapper">

                <Fade>
                      <div className="discount_porcentage">                      
                        <span>0%</span>
                        <span>Visibility in Campo Grande</span>
                    </div>

                </Fade>

                <Slide righ={true}>
                    <div className="discount_description">
                        <h3>20 de Abril de 2023 Total Solar Eclipse</h3>
                        <p>

                        </p>
                    </div>
                </Slide>

            </div>    
        </div>
    )
}

export default Probability;