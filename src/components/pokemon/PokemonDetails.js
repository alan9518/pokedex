/* ==========================================================================
** Pokemon Details Card Layout Component
** 13/04/2019
** Alan Medina Silva
** ========================================================================== */

// --------------------------------------
// Get Dependences
// --------------------------------------
    import React from 'react';
    import PropTypes from 'prop-types';
    import {ProgressBar, PokemonImage, StatsList, PokemonCounter} from '../../components'
    import './styles.css';
    
    
// --------------------------------------
// Create Functional Component
// --------------------------------------
    const PokemonDetails = (props) => {
        const {pokemonID,pokemonName, pokemonStats} = props;
		console.log("TCL: PokemonDetails -> props", props)
        return (
            <div className = "container px-pokemonDetailsContainer">

              <div className="row">
                <div className="col-md-12">
                    <PokemonCounter  pokemonID = {pokemonID}  pokemonName = {pokemonName} showTag = {false}/>
                </div>
              </div>

               <div className="row">

                    <div className="col-md-6">
                       <PokemonImage pokemonID = {pokemonID} />
                    </div>

                    <div className="col-md-6">
                        <div className="px-pokemonStatsContainer">
                            <StatsList pokemonStats = {pokemonStats}/>
                        </div>
                    </div>

               
               </div>

            
            </div>
        )
    }


// -------------------------------------- 
// Define PropTypes 
// -------------------------------------- 
    PokemonDetails.propTypes = {
        props: PropTypes
    };


// --------------------------------------
// Export Component
// --------------------------------------
    export default PokemonDetails;