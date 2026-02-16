import React, { useState, useEffect, useMemo} from "react";
import './style/wa_time.scss';

function Time() {
    const [selectedOption, setSelectedOption] = useState(null);
    const [displayText, setDisplayText] = useState('');
    const infos = useMemo(() => ([
        { id: "un", title: "BAC Science Technologie de l'Industrie et du Développement Durable", image: "/logoSTI2.jpg", date: "2020 - 2022", description: "Filière technologique centrée sur l'innovation, la conception technique et l'ingénierie, tout en intégrant systématiquement les enjeux environnementaux et la transition énergétique."},
        { id: "deux", title: "BUT Métiers du Multimédia et de l'Internet", image: "/logoMMI.png", date: "2022 - 2025", description: "Formation pluridisciplinaire en trois ans qui fusionne la création numérique, le développement web et la stratégie de communication."},
        { id: "trois", title: "MASTER Science Sociale Culture et Metiers du Web", image: "logoCMW.jpg", date: "2025 - 2027", description: "Formation des stratèges du numérique capables de piloter des projets complexes en mêlant design de communication, marketing digital et gestion technique de plateformes web."},
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