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
    import {ProgressBar} from '../../components'
    import './styles.css';
    
// --------------------------------------
// Create Functional Component
// --------------------------------------
    const PokemonDetails = (props) => {
        return (
            <div className = "px-pokemonDetailsContainer">

              <div className="row">
                <div className="col-md-12">
                    <h2 className = "px-pokemonTitle"> #001 Bulbasur </h2>
                </div>
              </div>

               <div className="row">

                    <div className="col-md-5">
                        <div className="px-pokemonImageContainer">
                            <img className = "px-pokemonImage"src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/1.png" alt=""/>
                        </div>
                    </div>

                    <div className="col-md-7">
                        <div className="px-pokemonStatsContainer">
                            <ul>
                                    <li className = "px-responsiveRow px-pokemonStat">
                                        <div className="px-profileItem">
                                            <h4 className="px-label"> HP </h4>
                                            <ProgressBar statValue = {50}/>
                                        </div>       
                                    </li>
                                    <li className = "px-responsiveRow px-pokemonStat">
                                        <div className="px-profileItem">
                                            <h4 className="px-label"> Attack </h4>
                                            <ProgressBar statValue = {27}/>
                                        </div>       
                                    </li>

                                    <li className = "px-responsiveRow px-pokemonStat">
                                        <div className="px-profileItem">
                                            <h4 className="px-label"> Defense </h4>
                                            <ProgressBar statValue = {47}/>
                                        </div>       
                                    </li>

                                    <li className = "px-responsiveRow px-pokemonStat">
                                        <div className="px-profileItem">
                                            <h4 className="px-label"> Speed </h4>
                                            <ProgressBar statValue = {87}/>
                                        </div>       
                                    </li>

                                    <li className = "px-responsiveRow px-pokemonStat">
                                        <div className="px-profileItem">
                                            <h4 className="px-label"> Sp Atk </h4>
                                            <ProgressBar statValue = {32}/>
                                        </div>       
                                    </li>

                                    <li className = "px-responsiveRow px-pokemonStat">
                                        <div className="px-profileItem">
                                            <h4 className="px-label"> Sp Def </h4>
                                            <ProgressBar statValue = {60}/>
                                        </div>       
                                    </li>
                            </ul>
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