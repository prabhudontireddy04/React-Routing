import React,{useState} from 'react'
const Counter = () => {
    const [count, setCount]=useState(0);
    function increment(){
        setCount(count+1);
    }
    function decrement(){ 
        setCount(count-1);
    }
    return (
        <div>
            <h2>Counter: {count}</h2>
            {count > 10 && <h3 style={{ color: 'green' }}>Count reaches high!</h3>}
            {count < 0 && <h3 style={{ color: 'red' }}>Negative count!</h3>}
            {count>=0 && count<=10 && <h3 style={{ color:'blue'}}>Keep going!</h3>}
            <button onClick={increment}>Increment</button>
            <button onClick={decrement}>Decrement</button>
        </div>
    );
}

export default Counter;
