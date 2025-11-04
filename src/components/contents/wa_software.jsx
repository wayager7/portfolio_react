import React, { useState } from 'react';
import './style/wa_software.scss';
import tools from './data/wa_softwares.json'
import test from '../../assets/moi/ico_git.png'

function Softwares(){
  const [hoveredId, setHoveredId] = useState(null);
    return (
        <div className='tools'>
            {/* <p>caca</p> */}
            {tools.map((u)=>(
                <>
                    <div 
                        key={u.id}
                        onMouseEnter={() => setHoveredId(u.id)}
                        onMouseLeave={() => setHoveredId(null)}
                        className='item' tabIndex="0"
                    >
                        <img src={u.image} alt={u.name}/>
                        {hoveredId === u.id && (
                            <div className="tooltip">
                                {u.name} :<br/>
                                {u.description}
                            </div>
                        )}
                    </div>
                    
                </>
            ))}
        </div>
    )
}

export default Softwares;