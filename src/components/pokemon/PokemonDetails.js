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
    import {ProgressBar, PokemonImage, StatsList} from '../../components'
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
                    <h2 className = "px-pokemonTitle px-greyTitle"> {pokemonID} - {pokemonName} </h2>
                </div>
              </div>

               <div className="row">

                    <div className="col-md-5">
                       <PokemonImage pokemonID = {pokemonID} />
                    </div>

                    <div className="col-md-7">
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