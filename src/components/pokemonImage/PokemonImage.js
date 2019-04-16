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
    import { LazyLoadImage } from 'react-lazy-load-image-component';
    import {Pokeball} from '../index'
    import 'react-lazy-load-image-component/src/effects/blur.css';

    
    import PropTypes from 'prop-types';



// --------------------------------------
// Create Functional Component
// --------------------------------------
const PokemonImage = (props) => {
    const {pokemonID} =  props;
    const imageURL =  `https://github.com/PokeAPI/sprites/blob/master/sprites/pokemon/${pokemonID}.png?raw=true`;
    
    return (
        <Fragment>
            <div className="px-pokemonImageContainer">
                <LazyLoadImage
                    key={`${pokemonID}-image`}
                    alt={'image.alt'}
                    src={imageURL}
                    effect="blur"
                    width={150} />
            </div>
        </Fragment>
    )
}

// -------------------------------------- 
// Define PropTypes 
// -------------------------------------- 
    PokemonImage.propTypes = {
        pokemonID: PropTypes.number
    };
    
// --------------------------------------
// Export Component
// --------------------------------------
    export default PokemonImage;


  