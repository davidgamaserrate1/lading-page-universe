import React,{useState,useEffect} from "react";
import { Fade,Slide } from "react-awesome-reveal";
import MyButton from "../utils/Button";
import TicketIcon from '../../resources/images/icons/ticket.png'

const Probability = () => {
    
    const end = 30;
    const [start, setStart] = useState(0);

    const porcentage = ()  =>{
        if(start < end)
            setStart(prevCount => prevCount + 1)
        
    }

    useEffect(()=>{
        if(start > 0 && start < end){
            setTimeout(()=>{
            setStart(prevCount => prevCount + 1)
            },end)
        }
    },[start] )

    return (
        <div className="center_wrapper">
            <div className="discount_wrapper">

                <Fade 
                    onVisibilityChange={(inView) =>{
                        if(inView){
                            porcentage()
                        }
                    }}>               
                      <div className="discount_porcentage">                      
                        <span>{start}%</span>
                        <span>Visibilidade em Campo Grande</span>
                    </div>

                </Fade>

                <Slide righ={true}>
                    <div className="discount_description">
                        <p>20 de Abril de 2023 </p>
                        <h1>Solar Eclipse</h1>
                        <MyButton
                            text= "SAIBA MAIS"
                            link="https://www.timeanddate.com/eclipse/solar/2023-april-20"
                            size = "small"
                            style ={{
                                background : 'red',
                                color:'#ffffff'
                            }}
                            icon={{TicketIcon}}
                
                        />
                    </div>
                </Slide>

            </div>    
        </div>
    )
}

export default Probability;