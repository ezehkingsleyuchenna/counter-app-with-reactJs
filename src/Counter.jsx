import { useState, useEffect } from 'react';

export default function Counter() {
    const [count, setCount] = useState(0);

    function handleIncrement () {
        setCount(prevCount => prevCount + 1);
    }

    function handleDecrement () {
        count && setCount(prevCount => prevCount - 1);
    }

    function handleReset () {
        setCount(0);
    }

    useEffect(() => {
        const countElement = document.getElementById('count');
        let color = "gray";

        if(count >= 100) color = "green";
        else if(count >= 50) color = "white";
        else if (count >= 10) color = "silver";

        countElement.style.color = color;

        console.log(countElement, color);

    }, [count]);

    return (
        <div className="wrapper">
            <h1>Counter</h1>
            <h2 id="count">{count}</h2>
            <div className="flex">
                <button className="btn" onClick={handleIncrement}>Increment</button>
                <button className="btn" onClick={handleReset}>Reset</button>
                <button className="btn" onClick={handleDecrement}>Decrement</button>
            </div>
        </div>
    );
}