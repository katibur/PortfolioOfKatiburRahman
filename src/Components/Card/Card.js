import React from "react";
import "./Card.css";

const Card = ({ emoji, heading, detail, color }) => {
    return (
        <div className="card" style={{ borderColor: { color } }}>
            <img src={emoji} alt="" />
        </div>
    );
};

export default Card;