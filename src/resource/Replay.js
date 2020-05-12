import React from 'react';
import '../App.css';

const Replay = ({score, rematch}) => (
    <div className="replayBox">  
    <div className="showScore">You have scored {score} out of 10 questions.</div>
    <button className="rematch" onClick={rematch}>Replay</button>
    </div>
)

export default Replay;