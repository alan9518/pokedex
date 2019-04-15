/* ==========================================================================
** Pokemon Image Layout
** Images from https://github.com/PokeAPI/sprites/tree/master/sprites/pokemon
** 14/04/2019
** Alan Medina Silva
** ========================================================================== */

// --------------------------------------
// Get Dependences
// --------------------------------------
    import React from 'react';
    import PropTypes from 'prop-types';


// --------------------------------------
// Create Functional Component
// --------------------------------------
    const PokemonImage = (props) => {
        const {pokemonID} =  props;
        const imageURL =  `https://github.com/PokeAPI/sprites/blob/master/sprites/pokemon/${pokemonID}.png?raw=true`;
        
        return (
            <div className="px-pokemonImageContainer">
                <img className = "px-pokemonImage px-pokemonImageGrid" src = {imageURL} alt=""/>
            </div>
        )
    }


// -------------------------------------- 
// Define PropTypes 
// -------------------------------------- 
    PokemonImage.propTypes = {
        props: PropTypes
    };


// --------------------------------------
// Export Component
// --------------------------------------
    export default PokemonImage;