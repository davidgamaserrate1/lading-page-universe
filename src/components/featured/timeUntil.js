import React, { useState, useEffect, useCallback } from "react";
import { Slide } from "react-awesome-reveal";

const TimeUntil = () => {
    const [time,setTime] = useState({
        days:'0',
        hours:'0',
        minutes:'0',
        seconds:'0'
    })

    const renderItem = (time, value) => (
        <div className="countdown_item">
            <div className="countdown_time">
                {time}
            </div>
            <div className="countdown_tag">
                {value}
            </div>
        </div>
    )

    const getTimeUntil = useCallback ((deadline) => {
        const time = Date.parse(deadline) - Date.parse(new Date());

        if (time < 0)
            console.log('Date passe')
        else{
            const seconds = Math.floor((time/1000)%60);
            const minutes = Math.floor((time/1000/60)%60);
            const hours = Math.floor((time/(1000*60*60))%24);
            const days = Math.floor((time/(1000*60*60*24)));        
            setTime({
                days,
                hours,
                minutes,
                seconds
            })
        }
    },[]) 
    

    useEffect(() => {
        setInterval(() => getTimeUntil('Dec, 24, 2022, 01:04:00'), 1000)
    }, [getTimeUntil])

    return (
        <Slide left delay={1000}>
            <div className="countdown_wrapper">
                <div className="countdown_top">
                    Next Eclipse in
                </div>
                <div className="countdown_bottom">
                    {renderItem(time.days, 'Dias')}
                    {renderItem(time.hours, 'Horas')}
                    {renderItem(time.minutes, 'Minutos')}
                    {renderItem(time.seconds, 'Segundos')}
                </div>
            </div>
        </Slide>
    )
}

export default TimeUntil;