import React from "react";
import MyButton from "../utils/Button";
import { Zoom } from "react-awesome-reveal";
import TicketIcon from '../../resources/images/icons/ticket.png'
import BackgroundImg from '../../resources/images/background.jpg'

const Pricing = () =>{
    const priceState = {
        prices:[10, 15, 20] ,
        position:['Teatro : Fora', 'Teatro : Arquibancada', 'Teatro : Cima' ],
        desc:[
            'Veja o eclipse na região externa do teatro.',
            'Veja o eclipse na arquibancada do teatro.',
            'Veja o eclipse no terraço do teatro.',
        ],
        linkto:['https://contate.me/thenexteclipse','https://contate.me/thenexteclipse','https://contate.me/thenexteclipse'],
        delay:[500,0,500]
    }

    const showBoxes = () =>(
        priceState.prices.map((box,index)=>(
            <Zoom key={index} className="pricing_item"   >
                <div className="pricing_inner_wrapper" >

                    <div className="pricing_title">
                        <span>R${priceState.prices[index]}</span>
                        <span>{priceState.position[index]}</span>                      
                    </div>

                    <div className="pricing_description">
                        {priceState.desc[index]}
                    </div>
                    
                    <div className="pricing_buttons">
                        <MyButton
                            text={'Comprar'}
                          
                            style ={{
                                 
                                color:'#ffffff'
                            }}
                            icon={{TicketIcon}}
                            link={priceState.linkto[index]}
                        />
                    </div>

                </div>
            </Zoom>
        ))
    )
    
    return (
        <div className="bck_black">
            <div className="center_wrapper pricing_section">
                <h2>ASSENTOS</h2>
                <div className="pricing_wrapper">
                    { showBoxes() }
                </div>
            </div>
        </div>
    )
}

export default Pricing