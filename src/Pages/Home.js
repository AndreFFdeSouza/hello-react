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
        <div className='App-home'>

            <Header title="My First Project in React"/>
            <img src={logo} className="App-logo" alt="logo" />
            <p>
                <button type="button" class="btn btn-outline-secondary" onClick={Increment}>Click!</button>

            </p>
            <p>Click Number: {contador}</p> 
            <Link to="/cadastro">Go to from question register</Link>
        </div>
    );
}
export default Home;