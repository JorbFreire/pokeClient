import React, { useState, useEffect } from 'react';
import api from '../../services/api';

import Pokemon from './Pokemon';
import Header from '../../components/Header';

import './styles.css';

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

  return (
    <div className="CharacterList">
      <div>
        <Header />
        <section className="characters">
          {characters.map(pokemon => (
            <Pokemon key={Math.random()} pokemon={pokemon}/>
          ))}
        </section>
      </div>

      <section className="types">
        <h2>TYPES</h2>
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
