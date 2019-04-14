/* ==========================================================================
** Search Bar Component
** 14/04/2019
** Alan Medina Silva
** ========================================================================== */

// --------------------------------------
// Get Dependences
// --------------------------------------
import React, { Component, Fragment } from 'react';
import PropTypes from 'prop-types';
// --------------------------------------
// Create Component Class
// --------------------------------------
class SearchBar extends Component {

    /* ==========================================================================
    ** Component Setup
    ** ========================================================================== */
        // --------------------------------------
        // Constructor
        // --------------------------------------
        constructor(props) {
            super(props);
            this.state = {
                isLoaded: false,
            }
        }
        // --------------------------------------
        // Set Initial Values
        // --------------------------------------
        componentDidMount() {
        }


    /* ==========================================================================
    ** Render Methods
    ** ========================================================================== */
        // --------------------------------------
        // Render Projects
        // --------------------------------------
        renderSearchBar() {
            return (
                <Fragment>

                    <form class="px-searchContainer">
                        
                        <input type="text" id="search-bar" placeholder="What can I help you with today?"/>
                        <a href="#"><img class="px-searchIcon" src="http://www.endlessicons.com/wp-content/uploads/2012/12/search-icon.png"/></a>
                    </form>
                </Fragment>
            )
        }

        // --------------------------------------
        // Render Component
        // --------------------------------------
        render() {
            return this.renderSearchBar();
        }
}
// -------------------------------------- 
// Define PropTypes 
// -------------------------------------- 
SearchBar.propTypes = {
    props: PropTypes
};
// --------------------------------------
// Export Component
// --------------------------------------
export default SearchBar;