import React from "react";
import "./DetailSection.css"
import PlanCard from "./PlanCard";

const DetailSection = () => {
    return (
        <div className="detailSection">
            <h1>Order Summary</h1>
            <p>You can now listen to millions of songs, audiobooks, and podcasts on any device anywhere you like!</p>
            <PlanCard />
            <button className="btn">Proceed to Payment</button>
            <a href="" className="cancelLink">Cancel Order</a></div>
    );
};
export default DetailSection;