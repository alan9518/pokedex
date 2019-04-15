/* ==========================================================================
** POkemon Stats List Layout
** 14/04/2019
** Alan Medina Silva
** ========================================================================== */

// --------------------------------------
// Get Dependences
// --------------------------------------
    import React from 'react';
    import {StatItem} from '../index'
    import PropTypes from 'prop-types';

// --------------------------------------
// Create Functional Component
// --------------------------------------
    const StatsList = (props) => {
        const {pokemonStats} = props;
        return (
            <div className="px-pokemonStatsContainer">
                <ul>
                    {
                        pokemonStats && pokemonStats.map((stat)=> {
                            return (
                                <StatItem statData = {stat}/>
                            )
                        })
                    }          
                </ul>
                   
            </div>
        )
    }

// -------------------------------------- 
// Define PropTypes 
// -------------------------------------- 
    StatsList.propTypes = {
        props: PropTypes
    };

// --------------------------------------
// Export Component
// --------------------------------------
    export default StatsList;