import { useState, useEffect } from 'react';
import { Ghost } from 'react-kawaii';

const RandomMood = () => {
  const moods = [
    'sad',
    'shocked',
    'happy',
    'blissful',
    'lovestruck',
    'excited',
    'ko',
  ];

  const random = moods[Math.floor(Math.random() * moods.length)];
  console.log(random);
  const randomColor = Math.floor(Math.random() * 16777215).toString(16);
  console.log(randomColor);

  const wrapperFunction = () => {
    setColor([randomColor]);
    setMood(moods[Math.floor(Math.random() * moods.length)]);
  };

  const [mood, setMood] = useState('happy');
  const [color, setColor] = useState(() => randomColor);
  const Example = () => <Ghost size={200} mood={mood} color={`#` + color} />;

  useEffect(() => {
    console.log('Hello World');
    console.log(mood);
    console.log(color);
  }, [mood, color]);

  return (
    <>
      <div>
        <h1 style={{ color: `#` + color, margin: '5rem 0rem' }}>{mood}</h1>
        <div style={{ margin: '3rem 0rem' }}>
          <button onClick={() => setMood('sad')}>sad</button>
          <button onClick={() => setMood('shocked')}>shocked</button>
          <button onClick={() => setMood('happy')}>happy</button>
          <button onClick={() => setMood('blissful')}>blissful</button>
          <button onClick={() => setMood('lovestruck')}>lovestruck</button>
          <button onClick={() => setMood('excited')}>excited</button>
          <button onClick={() => setMood('ko')}>ko</button>
        </div>

        <div style={{ margin: '3rem 0rem' }}>
          <button onClick={() => setColor([randomColor])}>random Color</button>
        </div>

        <div style={{ margin: '3rem 0rem' }}>
          <button onClick={() => setMood(random)}>
            random TEST in Variable ausgelagert
          </button>
          <button onClick={wrapperFunction}>random TEST wrapperFunction</button>
          <button
            style={{ margin: '3rem 0rem' }}
            onClick={() =>
              setMood(moods[Math.floor(Math.random() * moods.length)])
            }
          >
            random Test direkt
          </button>
          <Example />
        </div>
      </div>
    </>
  );
};

export default RandomMood;
