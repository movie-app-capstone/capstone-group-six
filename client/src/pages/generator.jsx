import { useState } from "react";
import "./App.css";
const Generator = () => {
    const [num, setNum] = useState(0);
 
    const randomNumberInRange = (min, max) => {
        return Math.floor(Math.random()
            * (max - min + 1)) + min;
    };
 
    const handleClick = () => {
        setNum(randomNumberInRange(1, 20));
    };
 
    return (
        <div className="wrapper">
            <h2>Number is: {num}</h2>
            <button onClick={handleClick}>
                Click Me for a random movie!!
            </button>
        </div>
    );
};
export default Generator;