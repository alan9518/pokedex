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
    import "../../../node_modules/blueprint-css/dist/blueprint.min.css";

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
            // Render Grid Layuot
            // 1/3 Details View
            // 2/3 List View
            // --------------------------------------
            renderGridLayout() {
                return (
                    <div className="row">
                    <div className = "col-xs-12 col-sm-8 col-md-6 col-lg-4">
                        <div className="box">12</div>
                    </div>

                    <div className = "col-xs-12 col-sm-8 col-md-6 col-lg-8">
                        <div className="box">12</div>
                    </div>
                </div>
                )
            }


            // --------------------------------------
            // Render Main View
            // --------------------------------------
            renderHomeView() {
                return (
                    <Fragment>
                      <Header appLogo = {logo}/>
                      {this.renderGridLayout()}
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