import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import api from '../../services/api';

import './styles.css';
import './types.css';
import './characters.css';

export default function CharacterList(){
  const [types, setTypes] = useState([]);
  const [characters, setCharacters] = useState([]);

  async function getAllPokemons(){
    const reponse = await api.get('/pokemon/?offset=0&limit=2000')
    setCharacters(reponse.data.results);
  }
  
  async function filterPokemonsByType(type) {
    const response = await api.get(type);
    const pokemons = response.data.pokemon;

    setCharacters(pokemons);

    return 1;
  }

  function dealWithDiferetJsonResponses(pokemon){
    if(pokemon.pokemon)
      return pokemon.pokemon;
    else if (pokemon.name)
      return pokemon;
    else
      console.log("unexpected input");
    return 0;
  }
  
  //inicialize pokeTypes
  useEffect(() => {
    async function getTypes(){
      const response = await api.get('/type/');
      setTypes(response.data.results);
      return 1;
    }
    getTypes();   
  }, []);

  //inicialize Pokemons
  useEffect(() => {
    getAllPokemons();
  }, [types]);

  async function debug(){
    const response = await api.get('/pokemon/?offset=0&limit=2000');
    console.log(response);
  }

  return (
    <div className="CharacterList">
      <section className="characters">
      <button onClick={debug}>DEBUG</button>
        {characters.map(pokemon => (
          <a key={Math.random()} href={dealWithDiferetJsonResponses(pokemon).url}>
            <div className="character">
              <p>{pokemon.name}</p>
            </div>
          </a>
        ))}
      </section>

      <section className="types">
        <h2>TYPES</h2>
        <button
          onClick={getAllPokemons}
        >
          Show ALL
        </button>

        {types.map( type => (
          <button
            onClick={() => filterPokemonsByType(type.url)}
            key={type.name}
          >
            {type.name}
          </button>
        ))}
      </section>
    </div>
  )
}
