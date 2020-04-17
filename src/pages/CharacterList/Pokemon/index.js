import React from 'react';
import './styles.css';

export default function pokemon(){
  return (
    {characters.map(pokemon => (
      <a key={Math.random()} href={dealWithDiferetJsonResponses(pokemon).url}>
        <div className="character">
          <p>{pokemon.name}</p>
        </div>
      </a>
    ))}
  );
}
