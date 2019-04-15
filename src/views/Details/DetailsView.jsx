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
            componentDidMount() {
                const {showDetails, currentPokemon} = this.props;
				console.log("TCL: DetailsView -> componentDidMount -> currentPokemon", currentPokemon)
                console.log("TCL: DetailsView -> componentDidMount -> showDetails", showDetails)
                
                if(showDetails) {
                    this.loadAPI(currentPokemon);
                }
            }


            // --------------------------------------
            // Update Props & State
            // --------------------------------------
            componentWillReceiveProps = (nextProps) => {
				console.log("TCL: DetailsView -> componentWillReceiveProps -> nextProps", nextProps)
                
                console.log("TCL: DetailsView -> componentDidMount -> this.props", this.props)

                if(nextProps.currentPokemon !== this.props.currentPokemon ) {
                    this.loadAPI(nextProps.currentPokemon);
                }

        
            }



    

            // --------------------------------------
            // Filter Pokemon Details Object
            // --------------------------------------
            getPokemonStats(pokemonData) {
                const pokemonStats = pokemonData.filter((pokemon)=>pokemon.stats);
				console.log("TCL: DetailsView -> getPokemonStats -> pokemonStats", pokemonStats)
            }


       /* ==========================================================================
        ** Load API
        ** ========================================================================== */

            // --------------------------------------
            // Load All Async Requests
            // --------------------------------------
            async loadAPI(currentPokemon) {
			    console.log("TCL: DetailsView -> loadAPI -> currentPokemon", currentPokemon)

                const pokemonsPromise = await this.getPokemonDetails(currentPokemon);
                const pokemonDetailsData =  await pokemonsPromise.data;

                const pokemonSpeciePromise = await this.getPokemonSpecies(currentPokemon);
                const pokemonSpecieData =  await pokemonSpeciePromise.data;
				console.log("TCL: DetailsView -> loadAPI -> pokemonSpecieData", pokemonSpecieData)

                console.log("TCL: HomeView -> onPokemonItemClick -> pokemonDetailsData", pokemonDetailsData)

                 this.setState({
                    pokemonDetails : pokemonDetailsData,
                    pokemonSpecie : pokemonSpecieData,
                    isLoaded :true
                })
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
               console.log("TCL: DetailsView -> renderPokemonDetails -> pokemonDetails", pokemonDetails)
               const {id, stats, name, abilities,weight,height} = pokemonDetails;
            


               return (
                    <Fragment> 
                        <PokemonDetails pokemonID = {id} pokemonStats = {stats} pokemonName = {name}/>
                        <PokemonProfile pokemonAbilities = {abilities}  pokemonSpecie = {pokemonSpecie}  weight = {weight} height = {height}/>
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
                const {showDetails, currentPokemon} = this.props;
                console.log("TCL: DetailsView -> componentDidMount -> this.props", this.props)
                // return pokemonDetails.length > 0 ? this.renderDetailsView(pokemonDetails) : 

                return showDetails === true ? this.renderDetailsView()  : this.renderNoPokemonSelected();
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