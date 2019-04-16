/* ==========================================================================
** Mini Pokemon Layout Component for Grid Layout
** 14/04/2019
** Alan Medina Silva
** ========================================================================== */

// --------------------------------------
// Get Dependences
// --------------------------------------
    import React from 'react';
    import {PokemonImage, PokemonCounter,PokemonTypes} from '../index'
    import PropTypes from 'prop-types';
    import './styles.css';



// --------------------------------------
// Create Functional Component
// --------------------------------------
    const MiniPokemon = (props) => {
        const {pokemon, onPokemonClick} = props;
        const {name, url, id, types} = pokemon;
		
        const pokemonIndex = id || url.split('/')[url.split('/').length-2];
        return (
            <div className = "px-column px-miniPokemonContainer " id = {name}  onClick = {onPokemonClick}>

               <PokemonImage pokemonID = {pokemonIndex} key = {`miniImage-${name}`}/>

                <div className="px-miniPokemonDetails px-column" >
                   
                    <PokemonCounter pokemonID = {pokemonIndex} showTag = {true}/>

                    <p className = "px-greyTitle px-miniPokemonTitle "> {name} </p>
                    <p className = "px-greyText px-miniPokemonType"> Type : </p>  <PokemonTypes types = {types}/>
                </div>


            </div>
        )
    }

// -------------------------------------- 
// Define PropTypes 
// -------------------------------------- 
    MiniPokemon.propTypes = {
        pokemon: PropTypes.object.isRequired,
        onPokemonClick : PropTypes.func
    };


// --------------------------------------
// Export Component
// --------------------------------------
    export default MiniPokemon;