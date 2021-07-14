import React, {useState} from 'react';
import Header from '../Header';
import logo from '../logo.svg';
import {Link} from 'react-router-dom';

function Home(){
    const [contador, setContador]= useState(0);
    function Increment(){
        setContador(contador+1);
    }

    return (
        <div className='App'>

            <Header title="Header Param"/>
            <img src={logo} className="App-logo" alt="logo" />
            <p>
                <input tipe="button" value="Clique" onClick={Increment} />
            </p>
            <p>Número de cliques: {contador}</p> 
            <Link to="/cadastro">Acessar cadastro</Link>
        </div>
    );
}
export default Home;