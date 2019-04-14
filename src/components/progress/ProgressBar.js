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
            <div className="px-progressBar">
                <div className="px-filler" style={{ width: `${statValue}%` }} >  {`${statValue}%`}  </div>
                {/*<span style={{ width: `${statValue}%` }}></span>*/}
            </div>
        )


        // return (
        //     <div class="meter">
        //         <span style={{ width: `${statValue}%` }}></span>
        //     </div>
        // )
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