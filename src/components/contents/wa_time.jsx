import { RadarChart, Radar, PolarGrid, PolarAngleAxis, PolarRadiusAxis } from 'recharts';
import React, { useState, useEffect, useMemo} from "react";
import './style/wa_time.scss';

function Time() {

    return (
        <div class="time_travel">
            <div className='time_arrow'></div>
            <div className='time_info'></div>
        </div>
    )
}

export default Time;