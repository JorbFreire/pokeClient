import React from 'react';
import { Link } from 'react-router-dom';

import silhouette from '../../../assets/pokemon.png';
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
    <div className="pokemon">
      <Link
        to='/character/details' 
          //dealWithDiferetJsonResponses(props.pokemon).url}
        className="linkBox"
      >
        <img src={silhouette} alt="Pokemon Silhouette"/>
        <p>{dealWithDiferetJsonResponses(props.pokemon).name}</p>
      </Link>
    </div>
  );
}
