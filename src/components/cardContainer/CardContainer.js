/* ==========================================================================
** Card Container Layout Component
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
    const CardContainer = (props) => {
        const {mediumCard, fixedCard, children} = props;
        const cardClass = mediumCard === true ? 'px-cardContainer px-mediumCard' : 'px-cardContainer';
        const fixedStyles = fixedCard && {
            position : 'fixed', left : '10px', width : '33%'
        }
        return (
            <div className = {cardClass} style = {fixedStyles}> 
                <div className="px-cardContent">
                    {children}
                </div>
                
            </div>
        )
    }


// -------------------------------------- 
// Define PropTypes 
// -------------------------------------- 
    CardContainer.propTypes = {
        props: PropTypes
    };

// --------------------------------------
// Export Component
// --------------------------------------
    export default CardContainer;