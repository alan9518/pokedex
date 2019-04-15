/* ==========================================================================
** Mini Pokemon Layout Component for Grid Layout
** 14/04/2019
** Alan Medina Silva
** ========================================================================== */

// --------------------------------------
// Get Dependences
// --------------------------------------
    import React from 'react';
    import {PokemonImage} from '../index'
    import PropTypes from 'prop-types';
    import './styles.css';


// --------------------------------------
// Create Functional Component
// --------------------------------------
    const MiniPokemon = (props) => {
        const {pokemon, onPokemonClick} = props;
        const {name, url} = pokemon;
        const pokemonIndex = url.split('/')[url.split('/').length-2];
        return (
            <div className = "px-column px-miniPokemonContainer " id = {name}  onClick = {props.onPokemonClick}>

               <PokemonImage pokemonID = {pokemonIndex} key = {`miniImage-${name}`}/>

                <div className="px-miniPokemonDetails px-column" >
                    <div className="px-idContainer">
                        <span> {pokemonIndex} </span>
                    </div>

                    <p className = "px-greyTitle px-miniPokemonTitle "> {name} </p>
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