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
        <div class='container d-grid gap-3 min-vh-100 min-vw-100 bg-light bg-gradiente text-center'>
            <Header title="My First Project in React" />
            <div class='container mb-3'>
                <img src={logo} className="App-logo " alt="logo" />
            </div>
            <div class='container d-flex justify-content-center mb-3'>
                <button type="button" class='btn btn-outline-primary position-relative' onClick={Increment}>Click!</button>
                <p class='ms-3'><strong>Click Number: {contador}</strong></p> 
            </div>
            <div class='container'>
               <Link to="/cadastro">Go to from question register</Link>
            </div>
        </div>
    );
}
export default Home;