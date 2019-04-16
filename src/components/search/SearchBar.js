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
                searchText : '',
            }
        }

        // --------------------------------------
        // Set Initial Values
        // --------------------------------------
        componentDidMount() {
        }


    /* ==========================================================================
    ** Handle State
    ** ========================================================================== */

        // --------------------------------------
        // Update State with User Input
        // --------------------------------------
        onChangeInput = (event)=> {
            const {target} = event;
            const {value, name} = target;

            this.setState({
                [name] : value
            })
        }


        // --------------------------------------
        // Submit Form
        // send Input To HomeView to Update State
        // --------------------------------------
        onFormSubmit = (event) => {
            event.preventDefault();
            const {searchText} = this.state;
            this.props.searchPokemon(searchText)
        }

    /* ==========================================================================
    ** Render Methods
    ** ========================================================================== */
        // --------------------------------------
        // Render Projects
        // --------------------------------------
        renderSearchBar() {
            const {searchText} = this.state;
            
            return (
                <Fragment>

                    <form className="px-searchContainer" onSubmit = {this.onFormSubmit}>
                        <img className="px-searchIcon" src="http://www.endlessicons.com/wp-content/uploads/2012/12/search-icon.png" alt = "search"/>
                        <input 
                            type="text" 
                            id="px-searchBar" 
                            placeholder="Search Pokemon by Name or ID" 
                            value = {searchText} 
                            name = 'searchText'
                            onChange = {this.onChangeInput}/>
                        
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
// SearchBar.propTypes = {
//     props: PropTypes
// };
// --------------------------------------
// Export Component
// --------------------------------------
export default SearchBar;