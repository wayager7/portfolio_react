// import React from "react";
import React, { useState, useEffect, useMemo } from "react";
import './style/wa_analysis.scss';
import frame from '../../assets/moi/Frame_252.png';

function Analysis() {
    const [selectedOption, setSelectedOption] = useState(null);
    const [displayText, setDisplayText] = useState('');
    const texts = useMemo(() => ({
        'Large Cranium': " Impossible to know exactly what's hidden there, but many ideas are jostling around.",
        'Wide-angle vision': " provides essential insight to analyze and gain perspective on a project.",
        'Flaming heart': " invaluable temperature, but maintains its user's passion for multimedia.",
        'Fairy fingers': " useful for web development, graphic design, video editing and more.",
        'Solid Support': " practical for perseverance, even in the toughest projects."
    }), []);

    useEffect(() => {
        if (selectedOption) {
            const text = texts[selectedOption];
            let index = 0;
            setDisplayText(''); // Reset le texte

            const typeText = () => {
                if (index < text.length) {
                    setDisplayText(prev => prev + text.charAt(index));
                    index++;
                }
            };

            const intervalId = setInterval(typeText, 20);

            return () => {
                clearInterval(intervalId);
            };
        }
    }, [selectedOption, texts]);

    const handleClick = (option) => {
        setSelectedOption(option);
    };

    
    return (
        <div className="analysis">
            <div className="ana_choice">
                <div className="ana_options">
                    
                    {Object.keys(texts).map((option) => (
                        <div 
                            key={option}
                            className={`ana_option ${selectedOption === option ? 'active' : ''}`}
                            onClick={() => handleClick(option)}
                        >
                            {option}
                        </div>
                    ))}
                </div>
                <div className="ana_img">
                    <img src={frame} alt="Frame 252" />
                </div>
            </div>
            <div className="ana_answere">
                <p>{displayText}</p>
            </div>
        </div>
    );
}

export default Analysis;


