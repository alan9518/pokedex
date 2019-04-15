/* ==========================================================================
** Pokemon Gender Ratio Layout
** 15/04/2019
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
    const PokemonGender = (props) => {
        const {gender_ratio} = props;
        const genderPercantage = setGenderPercentage(gender_ratio);
        return (
            <div className = "px-responsiveRow px-profileItem px-profileItemDetails">
                <h5 className="px-label"> Gender Ratio</h5>
               {
                   gender_ratio === -1 ? <span > Genderless </span>
                  : <div>
                        <span > { genderPercantage.male }% <i className="fas fa-mars"></i> </span>
                        <span > { genderPercantage.female }% <i className="fas fa-venus"></i> </span>
                    </div>
               }
            </div>
        )
    }


// --------------------------------------
// Set Gender Ratio
// GenderRatio : The chance of this Pokémon 
// being female, in eighths; or -1 for genderless.
// --------------------------------------
    const setGenderPercentage = (gender_ratio)=> {
        const maxPercentage = 8;
        let femalePercentage = (gender_ratio * 100) / maxPercentage;
        let malePercentage = 100 - femalePercentage
		console.log("TCL: setGenderPercentage -> malePercentage", malePercentage)
        console.log("TCL: setGenderPercentage -> femalePercentage", femalePercentage)
        
        return {
            male : malePercentage,
            female : femalePercentage
        }
    }



// -------------------------------------- 
// Define PropTypes 
// -------------------------------------- 
    PokemonGender.propTypes = {
        props: PropTypes
    };

// --------------------------------------
// Export Component
// --------------------------------------
    export default PokemonGender;