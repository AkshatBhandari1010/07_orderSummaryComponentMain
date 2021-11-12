import React from "react";
import "./PlanCard.css"
const PlanCard = () => {
    return (
        <div className="planCard">
            <div className="left">
                <div className="musicIcon"></div>
                <div className="planName">
                    <h4>Annual Plan</h4>
                    <p>$59.99/year</p>
                </div>
            </div>
            <div className="right"><a href="#" className="planChangeLink">Change</a></div>
        </div>
    );
};
export default PlanCard;