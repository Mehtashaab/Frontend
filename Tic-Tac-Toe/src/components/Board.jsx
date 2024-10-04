import React, { useState } from "react";
import Square from "./Square";

const Board = () => {
    const [board, setBoard] = useState(Array(9).fill(null));
    const [isXTurn, setIsXTurn] = useState(true);

    // Logic to check for a winner
    const checkWinner = () => {
        const winnerLogic = [
            [0, 1, 2],
            [3, 4, 5],
            [6, 7, 8],
            [0, 3, 6],
            [1, 4, 7],
            [2, 5, 8],
            [0, 4, 8],
            [2, 4, 6],
        ];

        for (let logic of winnerLogic) {
            const [a, b, c] = logic;

            // Check if the squares are filled and match
            if (board[a] && board[a] === board[b] && board[b] === board[c]) {
                return board[a];
            }
        }

        // If no winner is found, return null
        return null;
    };

    const isWinner = checkWinner();
    const isDraw = board.every(square => square !== null) && !isWinner; // Game is tied when no empty squares are left and no winner exists

    // Handle user clicks on squares
    const handleClick = (index) => {
        // Prevent click if square is already filled, or game has been won or drawn
        if (board[index] || isWinner || isDraw) return;

        const copyBoard = [...board];
        copyBoard[index] = isXTurn ? "X" : "O";
        setBoard(copyBoard);
        setIsXTurn(!isXTurn);
    };

    // Reset the game
    const handleReset = () => {
        setBoard(Array(9).fill(null));
        setIsXTurn(true);
    };

    return (
        <div className="board-container">
            {/* Display winner or draw message */}
            <h1>Tic Tac Toe</h1>
            {isWinner ? (
                <div className="winner-message">
                    <h2>{isWinner} won the game!</h2>
                    <button className="reset-button" onClick={handleReset}>Play Again</button>
                </div>
            ) : isDraw ? (
                <div className="draw-message">
                    <h2>It's a draw!</h2>
                    <button className="reset-button" onClick={handleReset}>Restart Game</button>
                </div>
            ) : (
                <>
                    <h2 className="turn-message">{isXTurn ? "X" : "O"}'s Turn</h2>
                    <div className="board">
                        {/* Render the board with clickable squares */}
                        <div className="board-row">
                            <Square onClick={() => handleClick(0)} value={board[0]} />
                            <Square onClick={() => handleClick(1)} value={board[1]} />
                            <Square onClick={() => handleClick(2)} value={board[2]} />
                        </div>
                        <div className="board-row">
                            <Square onClick={() => handleClick(3)} value={board[3]} />
                            <Square onClick={() => handleClick(4)} value={board[4]} />
                            <Square onClick={() => handleClick(5)} value={board[5]} />
                        </div>
                        <div className="board-row">
                            <Square onClick={() => handleClick(6)} value={board[6]} />
                            <Square onClick={() => handleClick(7)} value={board[7]} />
                            <Square onClick={() => handleClick(8)} value={board[8]} />
                        </div>
                    </div>
                </>
            )}
        </div>
    );
};

export default Board;
