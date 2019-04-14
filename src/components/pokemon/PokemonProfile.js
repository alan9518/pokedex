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
            <div className="px-pokemonProfileContainer">
               <div className="row">
                <div className="col-md-12">
                    <h3> Profile </h3>
                </div>
               </div>

                <div className="row">
                    <div className="col-md-6 col-sm-12 col-xs-12">
                        <div className="px-responsiveRow px-profileItem px-profileText">
                            <h4 className="px-label"> Height </h4>
                            <p> 0.7m </p>
                        </div>

                        <div className="px-responsiveRow px-profileItem px-profileText">
                            <h4 className="px-label"> Catch Rate </h4>
                            <p> 0% </p>
                        </div>

                        <div className="px-responsiveRow px-profileItem px-profileText">
                            <h4 className="px-label"> Egg Groups </h4>
                            <p> Monster, Grass </p>
                        </div>

                        <div className="px-responsiveRow px-profileItem px-profileText">
                            <h4 className="px-label"> Abilities </h4>
                            <p> Clorophyl, Overgrow </p>
                        </div>
                    </div>

                    <div className="col-md-6 col-sm-12 col-xs-12">
                        <div className="px-responsiveRow px-profileItem px-profileText">
                            <h4 className="px-label"> Weight </h4>
                            <p> 6.9kg </p>
                        </div>

                        <div className="px-responsiveRow px-profileItem px-profileText">
                            <h4 className="px-label"> Gender Ratio </h4>
                            <p> 87.5% M 12.5% G </p>
                        </div>

                        <div className="px-responsiveRow px-profileItem px-profileText">
                            <h4 className="px-label"> Hatch Steps </h4>
                            <p> 5100 </p>
                        </div>

                        <div className="px-responsiveRow px-profileItem px-profileText">
                            <h4 className="px-label"> EVs </h4>
                            <p> 1 Sp Att </p>
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