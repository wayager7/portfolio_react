import { RadarChart, Radar, PolarGrid, PolarAngleAxis, PolarRadiusAxis } from 'recharts';
import React from "react";
import './wa_evaluation.scss';

const data = [
{ subject: "Audio", value: 40, color: "#15ff00" },
{ subject: "dev", value: 60, color: "#00EAff" },
{ subject: "design", value: 80, color: "#fbff00" },
{ subject: "video", value: 40, color: "#ff0000" },
{ subject: "3D", value: 60, color: "#6E00FF" },
];

export default function Evaluation() {
    // tick personnalisé : colorie chaque label selon data.color
    const renderTick = (props) => {
        const { payload, x, y } = props;
        const color = data.find(d => d.subject === payload.value)?.color || '#ffffff';
        return (
        <text x={x} y={y} fill={color} textAnchor="middle" dominantBaseline="central" style={{ fontSize: 12 }}>
            {payload.value}
        </text>
        );
    };
    
    return (
        <div className="evaluation">
            <RadarChart outerRadius={90} width={"100%"} height={250} data={data}>

                 {/* Grille polygonale : chaque niveau aura une bordure */}
                <PolarGrid gridType="polygon" stroke="#ff00ff" strokeWidth={1} strokeOpacity={1} />

                {/* Noms des axes (A, B, C, D, E) */}
                <PolarAngleAxis dataKey="subject" color={data.color} stroke="#ff00ff" strokeWidth={2} tick={{ fill: "#ffffff", fontSize: 14 }} />

                {/* Valeurs sur les rayons */}
                <PolarRadiusAxis angle={90} domain={[0, 100]} tick={{ fill: "#ffffff", fontSize: 12 }} tickCount={6} stroke="#ff00ff" />

                <Radar
                    name="Data"
                    dataKey="value"
                    stroke="#fbff00"
                    fill="#fbff00"
                    fillOpacity={0.2}
                    strokeWidth={3}
                />
            </RadarChart>
            <div className='eva_answere'>

            </div>
        </div>
    );
}