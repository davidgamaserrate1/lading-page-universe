import React, { useState, useEffect, useCallback } from "react";
import Slide from "@mui/material/Slide";

const TimeUntil = () => {

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

    const getTimeUntil = (deadline) => {
        const time = Date.parse(deadline) - Date.parse(new Date());

        if (time < 0)
            console.log()

    }
    useEffect(() => {
        setInterval(() => getTimeUntil('Dez, 24, 2022, 01:04:00'), 1000)
    }, [getTimeUntil])

    return (
        <Slide left delay={1000}>
            <div className="countdown_wrapper">
                <div className="countdown_top">
                    Next Eclipse in
                </div>
                <div className="countdown_bottom">
                    {renderItem(27, 'Dias')}
                    {renderItem(4, 'Hs')}
                    {renderItem(10, 'Min')}
                    {renderItem(55, 'Sec')}




                </div>
            </div>

        </Slide>
    )
}

export default TimeUntil;