import { useState } from 'react';

const Counterhook = () => {
  const [count, setCount] = useState(0);

  // Diese Zeile erstellt uns eine Variable (count) die den Wert in den Klammern hinter useState als Startwert hat um eine Funtion, die genutzt wird, diese Variable zu ändern

  // const [input, setInput] = useState([{ name: '' }]);

  const [input, setInput] = useState('');

  return (
    <>
      <div>
        <p>You clicked {count} times</p>
        <button onClick={() => setCount(count + 1)}>plus 1</button>
      </div>
      <div>
        <button onClick={() => setCount(count - 1)}>minus</button>
        <button onClick={() => setCount((prevCount) => prevCount * 2)}>
          mal 2
        </button>
      </div>
      <div>
        <button onClick={() => setCount(0)}>Click me</button>
      </div>
      <input
        type="text"
        onChange={(event) => setInput(event.target.value)}
        value={input}
      ></input>
      <p>{input}</p>
    </>
  );
};

export default Counterhook;
