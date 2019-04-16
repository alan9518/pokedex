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
                           
                            <span>
                                {typeItem.type.name
                                    .toLowerCase()
                                    .split(' ')
                                    .map(s => s.charAt(0).toUpperCase() + s.substring(1))
                                    .join(' ')
                                }
                            </span>
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
    props: PropTypes
};
// --------------------------------------
// Export Component
// --------------------------------------
export default PokemonTypes;