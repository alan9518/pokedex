/* ==========================================================================
** Render Pokemon Types
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

    const PokemonTypes = (props) => {
        const {types} = props;
        return (
            <div >
                {
                    types && types.map((typeItem) => {
						
                        return (
                           
                            <p className = "px-greyText px-miniPokemonType" key = {`type-${typeItem.type.name}`}>
                                {typeItem.type.name
                                    .toLowerCase()
                                    .split(' ')
                                    .map(s => s.charAt(0).toUpperCase() + s.substring(1))
                                    .join(' ')
                                }
                            </p>
                        )
                    })
                }
            </div>
        )
    }

// -------------------------------------- 
// Define PropTypes 
// -------------------------------------- 
    PokemonTypes.propTypes = {
        types: PropTypes.array
    };

// --------------------------------------
// Export Component
// --------------------------------------
    export default PokemonTypes;