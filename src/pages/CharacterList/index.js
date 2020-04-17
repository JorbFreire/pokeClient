import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import api from '../../services/api';

import './styles.css';
import './types.css';
import './characters.css';

export default function CharacterList(){
  const [types, setTypes] = useState([]);
  const [characters, setCharacters] = useState([]);

  async function filterPokemonsByType(type) {
    const response = await api.get(type);
    const pokemons = response.data.pokemon;

    if (pokemons.length >= 100) {
      console.log("maior que 100");
    } else {
      setCharacters(pokemons);
      console.log("not that big");
    }

    return 0;
  }
  
  //inicialize Types
  useEffect(() => {
    async function listTypes(){
      const response = await api.get('/type/');
      setTypes(response.data.results);
      return 1;
    }
    listTypes();   
  }, []);

  //inicialize Pokemons
  useEffect(() => {
    filterPokemonsByType('/type/2/');
  },[]);

  return (
    <div className="CharacterList">
      <section className="characters">
        {characters.map(pokemon => (
          <a key={Math.random()} href={pokemon.pokemon.url}>
            <div className="character">
              <p>{pokemon.pokemon.name}</p>
            </div>
          </a>
        ))}
      </section>

      <section className="types">
        <h2>TYPES</h2>
        <button
          onClick={() => filterPokemonsByType("showALL")}
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
