/* ==========================================================================
** Pokemon Details Component
** 13/04/2019
** Alan Medina Silva
** ========================================================================== */

// --------------------------------------
// Get Dependences
// --------------------------------------
    import React, { Component, Fragment } from 'react';
    import {PokemonDetails,PokemonProfile ,Pokeball} from '../../components';
    import PropTypes from 'prop-types';

// --------------------------------------
// Create Component Class
// --------------------------------------
    class DetailsView extends Component {

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

           /** --------------------------------------
            * Render Pokemon Details
           // @param {pokemon <Obect>}
           // -------------------------------------- */
           renderPokemonDetails() {
               return (
                    <Fragment> 
                        <PokemonDetails/>
                        <PokemonProfile/>
                    </Fragment>
               )
           }



            // --------------------------------------
            // Render No Pokemon Selected Message
            // --------------------------------------
            renderNoPokemonSelected() {

                return ( <Pokeball/>  )

            }

            // --------------------------------------
            // Render Projects
            // --------------------------------------
            renderDetailsView() {
                return ( this.renderPokemonDetails() )
            }


            // --------------------------------------
            // Render Component
            // --------------------------------------
            render() {
                return this.renderDetailsView();
            }
    }

// -------------------------------------- 
// Define PropTypes 
// -------------------------------------- 
    DetailsView.propTypes = {
        props: PropTypes
    };
// --------------------------------------
// Export Component
// --------------------------------------
    export default DetailsView;