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
    import './styles.css';
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
                        <img className="px-searchIcon" src="http://www.endlessicons.com/wp-content/uploads/2012/12/search-icon.png"/>
                        <input type="text" id="px-searchBar" placeholder="Search Pokemon"/>
                        
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