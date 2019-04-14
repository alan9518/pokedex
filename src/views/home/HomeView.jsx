/* ==========================================================================
** Main Page View
** Design App Layout
** 13/04/2019
** Alan Medina Silva
** ========================================================================== */

// --------------------------------------
// Get Dependences
// --------------------------------------
    import React, { Component, Fragment } from 'react';
    import logo from '../../img/logo-pokemon.png';
    import { Header } from '../../layouts';
    import PropTypes from 'prop-types';
    import  'flexboxgrid';

// --------------------------------------
// Create Component Class
// --------------------------------------
    class HomeView extends Component {
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
            // Render Main View
            // --------------------------------------
            renderHomeView() {
                return (
                    <Fragment>
                      <Header appLogo = {logo}/>
                    </Fragment>
                )
            }
            // --------------------------------------
            // Render Component
            // --------------------------------------
            render() {
                return this.renderHomeView();
            }
    }
// -------------------------------------- 
// Define PropTypes 
// -------------------------------------- 
HomeView.propTypes = {
    props: PropTypes
};
// --------------------------------------
// Export Component
// --------------------------------------
export default HomeView;