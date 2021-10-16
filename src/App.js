import React, { useState, useEffect } from 'react';
import './style.css';
import CharacterList from './CharacterList';

export default function App() {
  const [characters, setCharacters] = useState([]);
  const [index, setIndex] = useState(0);
  const [maxIndex, setMaxIndex] = useState(0);
  useEffect(() => {
    const data = [
      { name: '小青', active: true },
      { name: '小白', active: false },
      { name: '阿宣', active: false },
    ];
    setMaxIndex(data.length - 1);
    setCharacters(data);
  }, []);
  useEffect(() => {
    const timer = setInterval(() => {
      // debugger;
      let innerIndex = 0;

      const copy = JSON.parse(JSON.stringify(characters));
      if (index === maxIndex) {
        innerIndex = 0;
      } else {
        innerIndex = index + 1;
      }

      copy.forEach((char, currentIndex) => {
        if (currentIndex === innerIndex) {
          char.active = true;
        } else {
          char.active = false;
        }
      });
      setIndex(innerIndex);
      setCharacters(copy);
    }, 600);
    return () => {
      clearInterval(timer);
    };
  }, [characters]);
  return (
    <div>
      <h1>The side-effect cleanup</h1>
      <CharacterList characters={characters} />
    </div>
  );
}
