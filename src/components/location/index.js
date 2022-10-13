import React from "react";

const Location = () =>{
    return (
        <div className="location_wrapper">
         <iframe 
            src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d1868.5379527987366!2d-54.61233732395717!3d-20.503114370554865!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x9486e5f501501899%3A0xa3a12020e73b352b!2sFACOM%20-%20Faculdade%20de%20Computa%C3%A7%C3%A3o%20-%20UFMS!5e0!3m2!1spt-BR!2sbr!4v1665686404264!5m2!1spt-BR!2sbr" 
            width="100%" 
            height="450"             
            allowfullscreen="" 
            loading="lazy" 
            referrerpolicy="no-referrer-when-downgrade">
        </iframe>   

        <div className="location_tag">
            <div>
                Localização
            </div>
        </div>

        </div>
    )
}


export default Location;