/* ==========================================================================
** Grid View Component
** Show Pokemon List
** 14/04/2019
** Alan Medina Silva
** ========================================================================== */

// --------------------------------------
// Get Dependences
// --------------------------------------
    import React from 'react';
    import { MiniPokemon,  } from '../../components';
    import PropTypes from 'prop-types';


// --------------------------------------
// Create Functional Component
// --------------------------------------
    const GridView = (props) => {
        const {pokemons, onPokemonItemClick} = props;

        // --------------------------------------
        // Iterate Pokemons List
        // --------------------------------------
        return (
                <div className="container">
                    <div className="row">
                    {  
                        pokemons && pokemons.map((pokemon, index)=> {
                            return (
                                <div className="col-md-3" key = {`miniPokemonCol-${pokemon.name}`} > 
                                    <MiniPokemon 
                                        pokemon = {pokemon} 
                                        key = {`miniPokemon-${pokemon.name}`} 
                                        onPokemonClick={() => onPokemonItemClick(pokemon.name)}
                                    /> 
                                </div>
                            )
                        })
                        
                    }
                    </div>
                </div>
        )
    }


// -------------------------------------- 
// Define PropTypes 
// -------------------------------------- 
    GridView.propTypes = {
        pokemons: PropTypes.array,
        onPokemonClick : PropTypes.func
    };


// --------------------------------------
// Export Component
// --------------------------------------
    export default GridView;