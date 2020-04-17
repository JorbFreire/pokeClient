import React from 'react';
import './styles.css';

export default function Login(){
  return (
    <div className="login">
      <div className="box">
        <input type="text" placeholder="UserName" />
        <input type="password" placeholder="Password" />
        
        <section>
          <p>Login to acess Pokemons details</p>
          <button> Login </button>
        </section>
      </div>
    </div>
  )
}
