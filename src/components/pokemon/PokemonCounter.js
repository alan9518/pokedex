/* eslint-disable no-extend-native */
/* ==========================================================================
** Pokemon ID Tag Layout
** Use Pad to the Leading Zeros
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
    const PokemonCounter = (props) => {
        const {pokemonID, pokemonName ,showTag} = props;
        return (
            
            showTag === false  ? 
                <h2 className = "px-pokemonTitle px-greyTitle"> {addZeros(pokemonID,3)} - {pokemonName} </h2>  
                : <div className="px-idContainer"><span> {addZeros(pokemonID,3)}</span></div>
        
        )
    }



// --------------------------------------
// Add Leading Zeros
// --------------------------------------
    const addZeros = (number,length)=> {
     
        let numberWithZeros = '' + number;
        while (numberWithZeros.length < length) {
            numberWithZeros = '0' + numberWithZeros;
        }
           
        return numberWithZeros;
        
        }
  


// -------------------------------------- 
// Define PropTypes 
// -------------------------------------- 
    PokemonCounter.propTypes = {
        pokemonID: PropTypes.number,
        pokemonName : PropTypes.string,        
        showTag: PropTypes.bool,        
    };

// --------------------------------------
// Export Component
// --------------------------------------
    export default PokemonCounter;