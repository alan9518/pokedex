/* ==========================================================================
** Pagination Item
** 13/04/2019
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
    const PaginationItem = (props) => {
        const { onItemClick, pageCounter, showArrow, arrowPosition, isActive } = props;
		

        const className = isActive ? 'site-button px-paginationButton px-active' : 'site-button px-paginationButton';
        return (
            <li  >
                {
                    showArrow === false ?
                        <button name={pageCounter} className={className} value={pageCounter} onClick={onItemClick}> {pageCounter}  </button>
                        :<button name={pageCounter} className={className} value={pageCounter} onClick={onItemClick}> <i className={`fa fa-angle-double-${arrowPosition}`} >   </i> </button>
                }

            </li>
        )
    }


// -------------------------------------- 
// Define PropTypes 
// -------------------------------------- 
    PaginationItem.propTypes = {
        onItemClick:PropTypes.func,
        pageCounter:PropTypes.any,
        showArrow:PropTypes.bool,
        arrowPosition:PropTypes.string,
        isActive :PropTypes.bool
    };


// --------------------------------------
// Export Component
// --------------------------------------
    export default PaginationItem;