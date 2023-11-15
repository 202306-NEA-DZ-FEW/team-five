import React from "react";

const FeedbackForm = ({ onClose }) => {
    return (
        <div>
            {/* ui and logic goes here */}
            <button onClick={onClose}>Close</button>
        </div>
    );
};

export default FeedbackForm;
