import React from 'react';

function Footer(){
    let curryear = new Date().getFullYear();

    return <footer>
        <h1>Notecode App Copyright© {curryear} </h1>
    
    </footer>
}
export default Footer;