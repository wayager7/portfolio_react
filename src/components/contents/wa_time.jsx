import React, { useState, useEffect, useMemo} from "react";
import './style/wa_time.scss';

function Time() {
    const [selectedOption, setSelectedOption] = useState(null);
    const [displayText, setDisplayText] = useState('');
    const infos = useMemo(() => ([
        { id: "un", title: "BAC Science Technologie de l'Industrie et du Développement Durable", image: "/logoSTI.jpg", date: "2020 - 2022", description: "caca"},
        { id: "deux", title: "BUT Métiers du Multimédia et de l'Internet", image: "/logoMMI.png", date: "2022 - 2025", description: "caca"},
        { id: "trois", title: "MASTER Science Sociale Culture et Metiers du Web", image: "logoCMW.jpg", date: "2025 - 2027", description: "caca"},
    ]), []);

    const handleCrochetClick = (id) => {
        const selectedInfo = infos.find(info => info.id === id);
        if (selectedInfo) {
            setSelectedOption(selectedInfo);
        }
    };


    return (
        <div className="time_travel">
            <div className='time_arrow'>
                <div className='annees'>
                    <p>2022</p>
                    <p>2023</p>
                    <p>2024</p>
                    <p>2025</p>
                </div>
                <div className='arrow-line'></div>
                <div className='crochets'>
                    <div className='crochet' id='un' onClick={() => handleCrochetClick('un')}></div>
                    <div className='crochet' id='deux' onClick={() => handleCrochetClick('deux')}></div>
                    <div className='crochet' id='trois' onClick={() => handleCrochetClick('trois')}></div>
                </div>
            </div>
            <div className='time_info'>
                <div className='eventimg'>
                    {selectedOption && <img src={selectedOption.image} alt="" />}
                </div>
                <div className='eventtext'>
                    {selectedOption ? (
                        <>
                            <h3>{selectedOption.title}</h3>
                            <p>{selectedOption.date}</p>
                            <p>{selectedOption.description}</p>
                        </>
                    ) : (
                        "Sélectionnez une période"
                    )}
                </div>
            </div>
        </div>
    )
}

export default Time;