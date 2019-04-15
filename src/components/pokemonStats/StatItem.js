/* ==========================================================================
** Pokemon Stat Item
** 14/04/2019
** Alan Medina Silva
** ========================================================================== */

// --------------------------------------
// Get Dependences
// --------------------------------------
    import React from 'react';
    import {ProgressBar} from '../index'
    import PropTypes from 'prop-types';


// --------------------------------------
// Create Functional Component
// base_stat = Value
// --------------------------------------
    const StatItem = (props) => {
        const {statData} = props;
        const {base_stat, stat} = statData
        const {name} = stat;
        let statName = '' ;


        // Reduce Long Names
        if(name === 'special-defense')
            statName = 'Sp Atk';
        else if (name === 'special-attack')
            statName = 'Sp Atk';
        else statName = name;


        // Render Stat
        return (
            <li className = "px-pokemonStat">
                <div className="px-responsiveRow px-profileItem">
                    <h4 className="px-label px-capitalize"> {statName} </h4>
                    <ProgressBar statValue = {base_stat}/>
                </div>       
            </li>
        )
    }

// -------------------------------------- 
// Define PropTypes 
// -------------------------------------- 
    StatItem.propTypes = {
        props: PropTypes
    };

// --------------------------------------
// Export Component
// --------------------------------------
    export default StatItem;