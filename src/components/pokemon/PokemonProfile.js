/* ==========================================================================
** Pokemon Profile Layout Component
** 13/04/2019
** Alan Medina Silva
** ========================================================================== */

// --------------------------------------
// Get Dependences
// --------------------------------------
    import React from 'react';
    import {PokemonProfileItem, PokemonGender} from '../index';
    import PropTypes from 'prop-types';

// --------------------------------------
// Create Functional Component
// --------------------------------------
    const PokemonProfile = (props) => {

        const {pokemonAbilities, weight, height, pokemonSpecie } = props;
        const {capture_rate, hatch_counter, egg_groups, gender_rate} = pokemonSpecie;
		console.log("TCL: PokemonProfile -> pokemonAbilities", pokemonAbilities)

        return (
            <div className="container px-pokemonProfileContainer">
               <div className="row">
                <div className="col-md-12">
                    <h2> Profile </h2>
                </div>
               </div>

                <div className="row">
                    <div className="col-md-6 col-sm-12 col-xs-12">
                        <PokemonProfileItem label = {'Height'} value = {`${convertFeetToMeters(height)}mts`}  />

                        <PokemonProfileItem label = {'Catch Rate'} value = {`${capture_rate}%`}  />

                        <PokemonProfileItem label = {'Egg Group'} value = {splitArrayDataByName(egg_groups)}  />
                        
                        <PokemonProfileItem label = {'Abilities'} value = {splitAbilitiesByName(pokemonAbilities)}  />

                        


                       
                    </div>

                    <div className="col-md-6 col-sm-12 col-xs-12">
                    
                        <PokemonProfileItem label = {'Weight'} value = {`${convertPoundsToKg(weight)}kg`}  />


                        <PokemonGender gender_ratio = {gender_rate}/>

                        <PokemonProfileItem label = {'Hatch Steps'} value = {setStepsToHatchEgg(hatch_counter)}  />

                        <div className = "px-responsiveRow px-profileItem px-profileItemDetails">
                            <h5 className="px-label"> EVs </h5>
                            <span> 1 Sp Att </span>
                        </div>
                    </div>
                </div>
            </div>
        )
    }


// --------------------------------------
// Helper Functions to Display Data
// --------------------------------------

    // Feets to Meters
    const convertFeetToMeters = (sizeOnFeets)=> {
        return (sizeOnFeets / 3.2808).toFixed(2);
    }

    // Pounds to Kg
    const convertPoundsToKg = (weightOnPounds) => {
        return (weightOnPounds/2.2046).toFixed(2);
    }

    // Split Array Data into single String
    const splitArrayDataByName = (arrayData) => {
        const namesArray = arrayData.map((arrayItem)=>{return arrayItem.name});
		console.log("TCL: splitArrayDataByName -> namesArray", namesArray)
        return namesArray.join(', ')
        
    }

     // Split Array Data into single String
     const splitAbilitiesByName = (arrayData) => {
        const namesArray = arrayData.map((arrayItem)=>{return arrayItem.ability.name});
		console.log("TCL: splitArrayDataByName -> namesArray", namesArray)
        return namesArray.join(', ')
        
    }

    // --------------------------------------
    // Set Steps Required To Hatch
    // Initial hatch counter: one must walk 255 × (hatch_counter + 1) 
    // steps before this Pokémon's egg hatches, 
    // unless utilizing bonuses like Flame Body's.
    // --------------------------------------

    const setStepsToHatchEgg = (hatch_counter) => {
        return ( 255 * (hatch_counter + 1))
    }


    // --------------------------------------
    // Set Pokemon Gender Ratio
    // --------------------------------------


// -------------------------------------- 
// Define PropTypes 
// -------------------------------------- 
    PokemonProfile.propTypes = {
        props: PropTypes
    };

// --------------------------------------
// Export Component
// --------------------------------------
    export default PokemonProfile;