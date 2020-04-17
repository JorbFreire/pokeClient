import React from 'react';
import './styles.css';

export default function pokemon(props){
  function dealWithDiferetJsonResponses(pokemon){
    if(pokemon.pokemon)
      return pokemon.pokemon;
    else if (pokemon.name)
      return pokemon;
    else
      console.log("unexpected input");
    return 0;
  }

  return (
    <a key={Math.random()} href={dealWithDiferetJsonResponses(props.pokemon).url}>
      <div className="pokemon">
        <p>{props.pokemon.name}</p>
      </div>
    </a>
  );
}
