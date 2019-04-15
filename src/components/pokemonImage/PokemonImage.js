/* ==========================================================================
** Pokemon Image Layout
** Images from https://github.com/PokeAPI/sprites/tree/master/sprites/pokemon
** 14/04/2019
** Alan Medina Silva
** ========================================================================== */

// --------------------------------------
// Get Dependences
// --------------------------------------
    import React, { Component, Fragment } from 'react';
    import PokeballImage from '../../img/pokeball.png'
    import { Loader } from '../index';
    import PropTypes from 'prop-types';


// --------------------------------------
// Create Component Class
// --------------------------------------
    class PokemonImage extends Component {
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
                imageLoading: true,
                imageError: false
            }
        }

    
        // --------------------------------------
        // Image Is Loaded
        // --------------------------------------
        handleImageLoaded = () => {
            this.setState({ imageLoading: false });
        }

        // --------------------------------------
        // Error While Loading the Image
        // --------------------------------------

        handleImageErrored = () => {
            this.setState({ imageError : true});
        }


        /* ==========================================================================
        ** Render Methods
        ** ========================================================================== */
        // --------------------------------------
        // Render Projects
        // --------------------------------------
        renderPokemonImage() {
            const { pokemonID } = this.props;
            const { imageLoading, imageError } = this.state;
            const imageURL = `https://github.com/PokeAPI/sprites/blob/master/sprites/pokemon/${pokemonID}.png?raw=true`;

            return (
                <Fragment>
                    <div className="px-pokemonImageContainer">
                        {
                            imageLoading === true ||  imageError === true?   
                            <img
                                    className="px-loadingImage"
                                    style = {{width: 150, opacity:0.1}}
                                    src={PokeballImage}
                                    alt = 'Loading...'
                                    // onLoad={this.handleImageLoaded}
                                />
                        
                            :
                                <img
                                    className="px-pokemonImage px-pokemonImageGrid"
                                    src={imageURL}
                                    alt={imageURL}
                                    onLoad={this.handleImageLoaded}
                                    onError={this.handleImageErrored} />
                        }

                        {this.state.imageStatus}
                    </div>
                </Fragment>
            )
        }
        // --------------------------------------
        // Render Component
        // --------------------------------------
        render() {
            return this.renderPokemonImage();
        }
    }

// -------------------------------------- 
// Define PropTypes 
// -------------------------------------- 
    PokemonImage.propTypes = {
        props: PropTypes
    };
// --------------------------------------
// Export Component
// --------------------------------------
    export default PokemonImage;