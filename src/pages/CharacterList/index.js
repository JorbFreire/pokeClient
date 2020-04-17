import React, { useState, useEffect } from 'react';
import api from '../../services/api';

import './styles.css';
import './types.css';
import './characters.css';

export default function CharacterList(){
  const [types, setTypes] = useState([]);
  const [characters, setCharacters] = useState([]);

  async function getFromApi(){
    const response = await api.get('/type/3/');
    return response;
  }

  async function filterByType(type) {
    console.log(type)
  }
  
  useEffect(() => {
    async function listTypes(){
      const response = await api.get('/type/');
      setTypes(response.data.results);
      return 1;
    }
    setCharacters([1, 1, 1, 1])
    listTypes();   
  }, []);

  return (
    <div className="CharacterList">
      <section className="characters">
        {characters.map(() => (          
          <div className="character">
            <p>bla</p>
          </div>
        ))}
      </section>

      <section className="types">
        <h2>TYPES</h2>
        <button onClick={() => filterByType("showALL")}> Show ALL </button>
        {types.map( type => (
          <button
            onClick={() => filterByType(type.url)}
            key={Math.random}
          >
            {type.name}
          </button>
        ))}
      </section>
    </div>
  )
}
