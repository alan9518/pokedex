/* ==========================================================================
** Pokemon Profile Item
** 14/04/2019
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
    const PokemonProfileItem = (props) => {
        const {label, value} = props;
        return (
            <div className = "px-responsiveRow px-profileItem px-profileItemDetails">
                <h5 className="px-label"> {label} </h5>
                <span className = "px-capitalize"> { value } </span>
            </div>
        )
    }

// -------------------------------------- 
// Define PropTypes 
// -------------------------------------- 
    PokemonProfileItem.propTypes = {
        props: PropTypes
    };


// --------------------------------------
// Export Component
// --------------------------------------
    export default PokemonProfileItem;