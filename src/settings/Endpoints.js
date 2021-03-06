/* ==========================================================================
** Appliction API Ennpoints to consume
** 14/04/2019
** Alan Medina Silva
** ========================================================================== */


// --------------------------------------
// API Base Path
// --------------------------------------
    const path = 'https://pokeapi.co/api/v2';
// --------------------------------------
// Create Endpoints Object
// --------------------------------------
    export const Endpoints = {

        /** --------------------------------------
        // Get All Pokemons
        // @param {offset <String>}
        // @param {limit <String>}
        // --------------------------------------*/
        getPokemons : `${path}/pokemon`,

        /** --------------------------------------
        // Get Pokemon Species Data
        // @param {/id <String>}
        // --------------------------------------*/
        getPokemonSpecie : `${path}/pokemon-species`
    }