import React from 'react';

function Header(props){

    return (
        <div class='bg-primary bg-gradient rounded text-secondary mb-3'>
            <header class='text-center'>
                <h1>{props.title}</h1>
            </header>
        </div>
    );
}
export default Header;
