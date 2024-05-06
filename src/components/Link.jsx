

import React, { useState } from 'react';

function Link({ linkData }) {
    const { date, links, text } = linkData;
    const [showFullText, setShowFullText] = useState(false);

    const toggleShowFullText = () => {
        setShowFullText(!showFullText);
    };

    return (
        <div className="link">
            <div>
                <span style={{ color: "white", display: "inline", backgroundColor: '#191f45', borderRadius: "0.5rem", padding: "0.5rem 0.8rem", marginRight: "10px" }}>Opportunity details</span>
                <div style={{ color: "#e5e3e3b9", padding: "1rem 0.3rem", lineHeight: "1.5rem" }}>
                    {showFullText ? text : text.slice(0, 100)} {/* Display first 100 characters or full text based on showFullText state */}
                    {text.length > 100 && ( // Display "Read More" or "Read Less" button if text length is greater than 100 characters
                        <button style={{ background: "none", border: "none", color: "#007bff", cursor: "pointer", marginLeft: "5px" }} onClick={toggleShowFullText}>
                            {showFullText ? "Read Less" : "Read More"}
                        </button>
                    )}
                </div>
            </div>
            <div style={{ lineHeight: "1.5rem" }}>
                <button style={{ color: "white", backgroundColor: '#191f45', borderRadius: "0.5rem", padding: "0.5rem 0.8rem", marginRight: "10px" }}>
                    <a style={{ textDecoration: "none", color: "white" }} href={links} target="_blank" rel="noopener noreferrer">Apply</a>
                </button>
            </div>
            <div style={{ marginTop: "1rem", display: "flex", justifyContent: "right" }}>
                <span style={{ color: "grey", display: "inline", borderRadius: "0.5rem", padding: "0.2rem 0.8rem" }}>{date}</span>
            </div>
        </div>
    );
}

export default Link;
