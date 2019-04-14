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
    import { CardContainer, MiniPokemon } from '../../components';
    import DetailsView from '../Details/DetailsView';
    import PropTypes from 'prop-types';
    

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
                    <div className="bootstrap-wrapper">
                        <div className="container-fluid">
                            <div className="row">
                            <div className="col-lg-4 col-md-4 col-sm-4 col-xs-12">
                                <CardContainer>  
                                    <DetailsView/>
                                </CardContainer>
                            </div>
                            <div className="col-lg-8 col-md-8 col-sm-8 col-xs-12">
                                <CardContainer> 
                                    <div className="row">
                                        <div className="col-md-3"> <MiniPokemon/> </div>
                                        <div className="col-md-3"> <MiniPokemon/> </div>
                                        <div className="col-md-3"> <MiniPokemon/> </div>
                                        <div className="col-md-3"> <MiniPokemon/> </div>
                                    </div>

                                    <div className="row">
                                        <div className="col-md-3"> <MiniPokemon/> </div>
                                        <div className="col-md-3"> <MiniPokemon/> </div>
                                        <div className="col-md-3"> <MiniPokemon/> </div>
                                        <div className="col-md-3"> <MiniPokemon/> </div>
                                    </div>
                                </CardContainer>
                            </div>
                            
                            </div>
                           
                           
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
                      <div className="px-pokedexContainer">
                        {this.renderGridLayout()}
                      </div>
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