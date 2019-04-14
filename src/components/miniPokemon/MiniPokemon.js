/* ==========================================================================
** Mini Pokemon Layout Component for Grid Layout
** 14/04/2019
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
    const MiniPokemon = (props) => {
        return (
            <div className = "px-column px-miniPokemonContainer ">

                <div className="px-pokemonImageContainer">
                    <img className = "px-pokemonImage"src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/1.png" alt=""/>
                </div>

                <div className="px-miniPokemonDetails px-column">
                    <div className="px-idContainer">
                        <span> 001 </span>
                    </div>

                    <p className = "px-greyTitle px-miniPokemonTitle "> Bulbasur </p>
                    <p className = "px-greyText px-miniPokemonType"> Type : Poison </p>
                </div>


            </div>
        )
    }

// -------------------------------------- 
// Define PropTypes 
// -------------------------------------- 
    MiniPokemon.propTypes = {
        props: PropTypes
    };


// --------------------------------------
// Export Component
// --------------------------------------
    export default MiniPokemon;