import React from 'react';

function Header(props){

    return (
        <div class='container bg-primary bg-gradient shadow-lg rounded text-secondary mb-3'>
            <header class='text-center'>
                <h1>{props.title}</h1>
            </header>
        </div>
    );
}
export default Header;
