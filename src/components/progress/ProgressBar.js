/* ==========================================================================
** ProgressBar for Pokemon Stats Component
** 13/04/2019
** Alan Medina Silva
** ========================================================================== */


// --------------------------------------
// Get Dependences
// --------------------------------------
    import React from 'react';
    import PropTypes from 'prop-types';
    import './styles.css';

// --------------------------------------
// Create Functional Component
// --------------------------------------
    const ProgressBar = (props) => {
        const {statValue}  = props;
        return (
            <div className="px-progress-bar px-green px-stripes">
                <span style={{ width: `${statValue}%` }} className = "px-filler">  </span>
                <span className = "px-counter">   {`${statValue}%`}  </span>
            </div>
        )
    }

// -------------------------------------- 
// Define PropTypes 
// -------------------------------------- 
    ProgressBar.propTypes = {
        props: PropTypes
    };

// --------------------------------------
// Export Component
// --------------------------------------
    export default ProgressBar;