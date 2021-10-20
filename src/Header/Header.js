    import React from 'react';
    import Cart from './Cart'
    import './header.css'
    import { Link } from 'react-router-dom'
    import 'bulma/css/bulma.min.css';

    const Header = () => {
        const [isActive, setisActive] = React.useState(false);
        return (

        <nav className="navbar" role="navigation" aria-label="main navigation">
        <div className="navbar-brand">
        <a
            href="!#"      
            onClick={() => {
            setisActive(!isActive);
            }}
            
            role="button"
            className={`navbar-burger burger ${isActive ? "is-active" : ""}`}
            aria-label="menu"     
            aria-expanded="false"
            data-target="navbarBasicExample"
        >
            <span aria-hidden="true"></span>
            <span aria-hidden="true"></span>
            <span aria-hidden="true"></span>
        </a>
        </div>
        <div
        id="navbarBasicExample"
        className={`navbar-menu ${isActive ? "is-active" : ""}`}
        >
        <div className="navbar-start">
            <a href="# " className="navbar-item">
                <Link to='/products'>Home</Link>
            </a>        
            <a href="# " className="navbar-item">
                <Link to='/products'>Product</Link>
            </a>      
            
        </div>
        <div class="navbar-end">
    <div class="navbar-item">
        <div class="buttons">
        <Cart />
        </div>
    </div>
    </div>
        </div>
    
    </nav>  
                
        
        );
    }

    export default Header;
