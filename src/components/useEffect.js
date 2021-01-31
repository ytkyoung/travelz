import { useState, useEffect } from 'react';

const UseEffect = () => {
  // So wird der useEffect immer auasgeführt, wenn ide Komponente geladen wird aber auch wenn sich ein state ändert!
  const [count, setCount] = useState(0);
  const [count2, setCount2] = useState(0);
  useEffect(() => {
    console.log('Hello World');
  }, [count2]); // Man übergibt das worauf er hören soll vor der schlöießenden Kalmmer als Array. Leeres arry = nur beim Laden der Komponente

  return (
    <>
      <div>
        <p>You clicked {count} times</p>
        <button onClick={() => setCount(count + 1)}>plus 1</button>
        <p>{count}</p>
        <button onClick={() => setCount2(count + 1)}>plus 1</button>
        <p>{count2}</p>
      </div>
    </>
  );
};

export default UseEffect;
