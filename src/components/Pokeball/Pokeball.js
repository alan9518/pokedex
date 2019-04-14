/* ==========================================================================
** No Pokemon Selected Layout Component
** 13/04/2019
** Alan Medina Silva
** ========================================================================== */

// --------------------------------------
// Get Dependences
// --------------------------------------
    import React from 'react';
    import PokeballImage from '../../img/pokeball.png'
    import PropTypes from 'prop-types';
    import './styles.css';


// --------------------------------------
// Create Functional Component
// --------------------------------------
    const Pokeball = (props) => {
        return (
            <div className = "px-cardContent">
                <h2> Empty State </h2>
                <img src = {PokeballImage} alt="No pokemon Selected" className = "px-cardContentImage" />
            </div>
        )
    }


// -------------------------------------- 
// Define PropTypes 
// -------------------------------------- 
    Pokeball.propTypes = {
        props: PropTypes
    };


// --------------------------------------
// Export Component
// --------------------------------------
    export default Pokeball;