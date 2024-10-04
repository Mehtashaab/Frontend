import React from "react";

const Square = ({ onClick, value }) => {
    return (
        <div
            onClick={onClick}
            style={{
                border: "1px solid #ccc",
                height: "100px",
                width: "100%",
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                fontSize: "3rem",
                cursor: "pointer",
                color: value === 'X' ? "red" : "blue" // Different colors for 'X' and 'O'
            }}
            className="square"
        >
            {value}
        </div>
    );
}

export default Square;
