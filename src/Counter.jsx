
export default function Counter() {
    return (
        <div className="wrapper">
            <h1>Counter</h1>
            <h2>0</h2>
            <div className="flex">
                <button className="btn">Increment</button>
                <button className="btn">Reset</button>
                <button className="btn">Decrement</button>
            </div>
        </div>
    );
}