/* ==========================================================================
** Pokemon Profile Layout Component
** 13/04/2019
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
    const PokemonProfile = (props) => {
        return (
            <div className="container px-pokemonProfileContainer">
               <div className="row">
                <div className="col-md-12">
                    <h2> Profile </h2>
                </div>
               </div>

                <div className="row">
                    <div className="col-md-6 col-sm-12 col-xs-12">
                        <div className = "px-responsiveRow px-profileItem px-profileItemDetails">
                            <h5 className="px-label"> Height </h5>
                            <span> 0.7m </span>
                        </div>

                        <div className = "px-responsiveRow px-profileItem px-profileItemDetails">
                            <h5 className="px-label"> Catch Rate </h5>
                            <span> 0% </span>
                        </div>

                        <div className = "px-responsiveRow px-profileItem px-profileItemDetails">
                            <h5 className="px-label"> Egg Groups </h5>
                            <span> Monster, Grass </span>
                        </div>

                        <div className = "px-responsiveRow px-profileItem px-profileItemDetails">
                            <h5 className="px-label"> Abilities </h5>
                            <span> Clorophyl, Overgrow </span>
                        </div>
                    </div>

                    <div className="col-md-6 col-sm-12 col-xs-12">
                        <div className = "px-responsiveRow px-profileItem px-profileItemDetails">
                            <h5 className="px-label"> Weight </h5>
                            <span> 6.9kg </span>
                        </div>

                        <div className = "px-responsiveRow px-profileItem px-profileItemDetails">
                            <h5 className="px-label"> Gender Ratio </h5>
                            <span> 87.5% M 12.5% G </span>
                        </div>

                        <div className = "px-responsiveRow px-profileItem px-profileItemDetails">
                            <h5 className="px-label"> Hatch Steps </h5>
                            <span> 5100 </span>
                        </div>

                        <div className = "px-responsiveRow px-profileItem px-profileItemDetails">
                            <h5 className="px-label"> EVs </h5>
                            <span> 1 Sp Att </span>
                        </div>
                    </div>
                </div>
            </div>
        )
    }


// -------------------------------------- 
// Define PropTypes 
// -------------------------------------- 
    PokemonProfile.propTypes = {
        props: PropTypes
    };

// --------------------------------------
// Export Component
// --------------------------------------
    export default PokemonProfile;