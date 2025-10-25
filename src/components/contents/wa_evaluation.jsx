import { RadarChart, Radar, PolarGrid, PolarAngleAxis, PolarRadiusAxis } from 'recharts';
import React, { useState, useEffect, useMemo} from "react";
import './wa_evaluation.scss';


function Evaluation() {
    const data = useMemo(() => ([
    { subject: "Audio", value: 40, color: "#15ff00", description: "montage sonore, production de musique, mixage" },
    { subject: "dev", value: 60, color: "#00EAff", description: "développement web (HTML, JS, TS, React, Angular, ThreeJS, CSS, SCSS, PHP), programmation C#, API" },
    { subject: "design", value: 80, color: "#fbff00", description: "design graphique, UX/UI, dessin, illustration, Direction artistique" },
    { subject: "video", value: 40, color: "#ff0000", description: "montage vidéo, effets spéciaux, post-production, motion design" },
    { subject: "3D", value: 60, color: "#6E00FF", description: "modélisation 3D, animation, rendu" },
    ]), []);

    const [selected, setSelected] = useState(null);
    const [displayText, setDisplayText] = useState('');

    // Modifier l'effet d'initialisation
    useEffect(() => {
        setSelected(data[0]?.subject || null);
    }, []); // Dépendance vide car data est mémorisé avec useMemo

    useEffect(() => {
        if (!selected) return;

        const text = data.find(d => d.subject === selected)?.description || '';
        let index = 0;
        setDisplayText(''); // Reset le texte

        const intervalId = setInterval(() => {
            if (index >= text.length) {
                clearInterval(intervalId);
                return;
            }
            setDisplayText(text.slice(0, index + 1));
            index++;
        }, 5);

        return () => clearInterval(intervalId);
    }, [selected, data]);

    // tick personnalisé
    const renderTick = (props) => {
        const { payload, x, y, index } = props;
        const color = data.find(d => d.subject === payload.value)?.color || '#ffffff';        
        const offset = 14; // distance en px

        // calcul d'angle merci ChatGPT
        const total = data.length;
        const angle = (Math.PI / 2) - (index * 2 * Math.PI / total);

        const dx = Math.cos(angle) * offset;
        const dy = -Math.sin(angle) * offset;

        const isActive = payload.value === selected;

        return (
            <text 
                x={x + dx} 
                y={y + dy}  
                fill={color} 
                textAnchor="middle" 
                dominantBaseline="central" 
                style={{ fontSize: 17, fontWeight: isActive ? '800' : '400', cursor: 'pointer', pointerEvents: 'all' }}
                onClick={() => setSelected(payload.value)}
                className="subject-label"
                role='button'
                tabIndex={0}
                onKeyDown={(e) => {if (e.key === 'Enter'|| e.key === ' ') setSelected(payload.value); }}
                >
                {payload.value}
            </text>
        );
    };
    
    const selectedEntry = data.find(d => d.subject === selected);


    return (
        <div className="evaluation">
            <RadarChart outerRadius={90} width={"100%"} height={250} data={data}>

                 {/* Grille polygonale : chaque niveau aura une bordure */}
                <PolarGrid gridType="polygon" stroke="#ff00ff" strokeWidth={1} strokeOpacity={1} />

                {/* Noms des axes (A, B, C, D, E) */}
                <PolarAngleAxis dataKey="subject" stroke="#ff00ff" strokeWidth={2} tick={renderTick} />

                {/* Valeurs sur les rayons */}
                <PolarRadiusAxis angle={90} domain={[0, 100]} tick={{ fill: "#ffffff66", fontSize: 12 }} tickCount={6} stroke="#ff00ff" />

                <Radar
                    name="Data"
                    dataKey="value"
                    stroke={selectedEntry ? selectedEntry.color : "#ffffff"}
                    fill={selectedEntry ? selectedEntry.color : "#ffffff"}
                    fillOpacity={0.2}
                    strokeWidth={3}
                />
            </RadarChart>

            <div className='eva_answere'>
                {selectedEntry ? (
                    <div className='eva_selected'>
                        <p style={{color: selectedEntry.color, fontSize: '1.4rem', marginBottom: '0'}}>{selectedEntry.subject + ' :'}</p>
                        <p style={{marginTop: '0'}}>{displayText}</p>
                    </div>
                ) : (<p style={{color: '#ffffff66'}}>Cliquez sur une compétence pour voir la description.</p>)}
            </div>
        </div>
    );
}

export default Evaluation;