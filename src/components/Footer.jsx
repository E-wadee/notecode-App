import React from 'react';

function Footer(){
    let curryear = new Date().getFullYear();

    return <footer>
        <h1>Notecode App CopyrightÂ© {curryear} </h1>
    
    </footer>
}
export default Footer;