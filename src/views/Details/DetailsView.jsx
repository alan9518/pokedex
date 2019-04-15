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
    import {Endpoints} from '../../settings/Endpoints';
    import axios from 'axios';
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
                    pokemonDetails : {},
                    pokemonSpecie : {},
                    isLoaded: false,
                }
            }


            // --------------------------------------
            // Load Data Initial
            // --------------------------------------
            async componentDidMount() {
                const {showDetails, currentPokemon} = this.props;
				    
                if(showDetails) 
                    this.loadAPI(currentPokemon);
                
            }


            // --------------------------------------
            // Update Props & State
            // Whenever the selected pokemon changes o
            // the HomeView
            // --------------------------------------
            componentWillReceiveProps = (nextProps) => {
                if(nextProps.currentPokemon !== this.props.currentPokemon ) 
                    this.loadAPI(nextProps.currentPokemon);
                
            }




       /* ==========================================================================
        ** Load API
        ** ========================================================================== */

            // --------------------------------------
            // Load All Async Requests
            // --------------------------------------
            async loadAPI(currentPokemon) {
                
                try {
                    // Declare Axios Promises
                    const pokemonsPromise = await this.getPokemonDetails(currentPokemon);
                    const pokemonSpeciePromise = await this.getPokemonSpecies(currentPokemon);
                   

                    // Execute all Promises
                    const [pokemonDetailsData, pokemonSpecieData] = await Promise.all([pokemonsPromise, pokemonSpeciePromise])
    
                    // Update Data
                    this.setState({
                        pokemonDetails : pokemonDetailsData.data,
                        pokemonSpecie : pokemonSpecieData.data,
                        isLoaded :true
                    })
                }
                catch(error) {
					console.log("TCL: DetailsView -> loadAPI -> error", error)
                    
                }

               
            }


            // --------------------------------------
            // Load POkemon Details
            // --------------------------------------
            async getPokemonDetails(currentPokemon) {
                return axios.get(`${Endpoints.getPokemons}/${currentPokemon}`);
            }

            // --------------------------------------
            // Load Pokemon Species Data
            // --------------------------------------
            async getPokemonSpecies(currentPokemon) {
                return axios.get(`${Endpoints.getPokemonSpecie}/${currentPokemon}`);
            }



        /* ==========================================================================
        ** Render Methods
        ** ========================================================================== */

           /** --------------------------------------
            * Render Pokemon Details
           // @param {pokemon <Obect>}
           // -------------------------------------- */
           renderPokemonDetails() {
               const {pokemonDetails, pokemonSpecie} = this.state;
               const {sprites} = pokemonDetails
               console.log("TCL: DetailsView -> renderPokemonDetails -> sprites", sprites)
               const {id, stats, name, abilities, weight, height} = pokemonDetails;
            


               return (
                    <Fragment> 
                        <PokemonDetails pokemonID = {id} pokemonStats = {stats} pokemonName = {name} pokemonGallery = {sprites}/>
                        <PokemonProfile pokemonAbilities = {abilities}  pokemonSpecie = {pokemonSpecie}  weight = {weight} height = {height} pokemonStats = {stats}/>
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
				const {isLoaded} = this.state;
                return ( isLoaded &&  this.renderPokemonDetails() )
            }


            // --------------------------------------
            // Render Component
            // --------------------------------------
            render() {
                const {showDetails} = this.props;
                return showDetails === true ? this.renderDetailsView()  : this.renderNoPokemonSelected();
            }
    }

// -------------------------------------- 
// Define PropTypes 
// -------------------------------------- 
    DetailsView.propTypes = {
        currentPokemon: PropTypes.string,
        showDetails : PropTypes.bool.isRequired
    };
// --------------------------------------
// Export Component
// --------------------------------------
    export default DetailsView;