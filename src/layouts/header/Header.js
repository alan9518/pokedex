/* ==========================================================================
** Header Layout Component
** 13/04/2019
** Alan Medina Silva
** ========================================================================== */

// --------------------------------------
// Get Dependences
// --------------------------------------
    import React from 'react';
    import PropTypes from 'prop-types';
    import './styles.css';

// --------------------------------------
// Create Functional Component
// --------------------------------------
    const Header = (props) => {
        const {appLogo} =  props
 

        return(
            <div className="row center-xs">
                <div className="col-xs-12 col-md-12">
                    <header className="px-header">
                        <img src={appLogo} className="App-logo" alt="Pokémon" />      
                    </header>
                </div>
            </div>
        )
    }

// -------------------------------------- 
// Define PropTypes 
// -------------------------------------- 
    Header.propTypes = {
        appLogo : PropTypes.string
    };

// --------------------------------------
// Export Component
// --------------------------------------
    export default Header;