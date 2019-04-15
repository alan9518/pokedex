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

        const {pokemonAbilities, weight, height, pokemonSpecie, pokemonStats } = props;
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

                        <PokemonProfileItem label = {'Catch Rate'} value = {`${setCatchRate(capture_rate)}%`}  />

                        <PokemonProfileItem label = {'Egg Group'} value = {splitArrayDataByName(egg_groups)}  />
                        
                        <PokemonProfileItem label = {'Abilities'} value = {splitAbilitiesByName(pokemonAbilities)}  />

                        


                       
                    </div>

                    <div className="col-md-6 col-sm-12 col-xs-12">
                    
                        <PokemonProfileItem label = {'Weight'} value = {`${convertPoundsToKg(weight)}kg`}  />
                        <PokemonGender gender_ratio = {gender_rate}/>
                        <PokemonProfileItem label = {'Hatch Steps'} value = {setStepsToHatchEgg(hatch_counter)}  />
                        <PokemonProfileItem label = {'Evs'} value = {setPokemonEvs(pokemonStats)}  />

                        
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


    // --------------------------------------
    // Set Catch Rate
    // The base capture rate; up to 255
    // --------------------------------------
    
    const setCatchRate = (catch_ratio) => {
        return Math.round((100 / 255) * catch_ratio);
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
    // Set Pokemon Evs
    // --------------------------------------
    const setPokemonEvs = (stats) => {
        
        // Filter Special Abilities
        const nStats = stats.filter(stat => {if (stat.effort > 0) {return true;}return false;})
     
        // Split the Values, remove - && add ,   
        return nStats.map((stat)=> {
              return `${stat.effort} ${stat.stat.name
                        .toLowerCase()
                        .split('-')
                        .map(s => s.charAt(0).toUpperCase() + s.substring(1))
                        .join(' ')}`;
            
        }).join(', ');
       
    }

    


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