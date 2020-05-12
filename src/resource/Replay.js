import React from 'react';
import '../App.css';

const Replay = ({score}) => (
    <div className="replayBox">  
    <div className="showScore">You have scored {score} / 10.</div>
    </div>
)

export default Replay;