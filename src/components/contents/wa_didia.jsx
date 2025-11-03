import React, { useState, useEffect, useRef } from "react";
import './wa_didia.scss'
import IAPNG from '../../assets/moi/ia.png'

function Didia() {

    const [messages, setMessages] = useState([
        { sender: 'user', text: "qu'est ce que tu es ?" },
        { sender: 'ia', text: "bonjour je suis WALD-IA, je réponds à tes questions sur moi (en théorie du moins)" }
    ]);
    
    const [input, setInput] = useState('');
    const replyTimeout = useRef(null);


    const handleSubmit = (e) => {
        e.preventDefault();
        const text = input.trim();
        if (!text) return;
        setMessages(prev => [...prev, { sender: 'user', text }]);
        setInput('');        
        
        // programme la réponse automatique
        if (replyTimeout.current) clearTimeout(replyTimeout.current);
        replyTimeout.current = setTimeout(() => {
            setMessages(prev => [...prev, { sender: 'ia', text: 'je ne suis pas encore au point, je ne peux pas encore répondre...' }]);
        }, 600); // délai en ms, ajuste si besoin
    };

    return(
        <div className="IA">
            <div className="conv_ia">
                <div className="img_ia">
                    <img src={IAPNG} alt="" />
                </div>
                <div className="conv">
                    {messages.map((m, i) => (
                        <div key={i} className={m.sender === 'ia' ? 'mess_ia' : 'mess_hu'}>
                            {m.text}
                        </div>
                    ))}
                </div>
            </div>
                <form onSubmit={handleSubmit} id="question">
                    <input
                        type="text"
                        name="CMD"
                        required
                        placeholder="COMMANDE"
                        value={input}
                        onChange={e => setInput(e.target.value)}
                    />
                </form>
            </div>
    )
}

export default Didia;