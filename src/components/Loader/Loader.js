/* ==========================================================================
 * Custom Loader Component
 * Using react-loader-spinner
 * 30/11/2018
 * Alan Medina Silva
 ========================================================================== */

// --------------------------------------
// Import Dependences
// --------------------------------------
    import React  from "react";
    // import PropTypes from "prop-types";
    
    import './styles.css';

// --------------------------------------
// Create Component
// --------------------------------------    
    const Apploader = () => {  
        // const {customHeight} = props;
        return (
            <div className="px-wrapper">
                <div className="px-pokeball"></div>
            </div>
        )
    }   

    
    // --------------------------------------
    // Props types
    // --------------------------------------  
    // Apploader.propTypes = {
    //     customHeight : PropTypes.number
    // }
    
    // --------------------------------------
    // Default Props
    // --------------------------------------  
    // Apploader.defaultProps = {
    //     customHeight : 800
    // }


// --------------------------------------
// Export Component
// --------------------------------------
    export default Apploader;