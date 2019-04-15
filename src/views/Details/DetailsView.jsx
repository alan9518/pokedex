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
            // Set Initial Values
            // Look For Project ID
            // --------------------------------------
            




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


            async loadAPI(currentPokemon) {
			    console.log("TCL: DetailsView -> loadAPI -> currentPokemon", currentPokemon)

                const pokemonsPromise = await this.getPokemonDetails(currentPokemon);
                const pokemonDetails =  await pokemonsPromise.data;
                console.log("TCL: HomeView -> onPokemonItemClick -> pokemonDetails", pokemonDetails)

                 this.setState({
                    pokemonDetails : pokemonDetails
                })
            }


            // --------------------------------------
            // Load All Async Requests
            // --------------------------------------
            async getPokemonDetails(currentPokemon) {
                return axios.get(`${Endpoints.getPokemons}/${currentPokemon}`);
            }




        /* ==========================================================================
        ** Render Methods
        ** ========================================================================== */

           /** --------------------------------------
            * Render Pokemon Details
           // @param {pokemon <Obect>}
           // -------------------------------------- */
           renderPokemonDetails() {
               const {pokemonDetails} = this.state;
               console.log("TCL: DetailsView -> renderPokemonDetails -> pokemonDetails", pokemonDetails)
               const {id, stats, name} = pokemonDetails;
            // const pokemonStats = this.getPokemonStats(pokemonDetails);


               return (
                    <Fragment> 
                        <PokemonDetails pokemonID = {id} pokemonStats = {stats} pokemonName = {name}/>
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
            renderDetailsView(pokemonDetails) {
				console.log("TCL: DetailsView -> renderDetailsView -> pokemonDetails", pokemonDetails)
                return ( this.renderPokemonDetails() )
            }


            // --------------------------------------
            // Render Component
            // --------------------------------------
            render() {
                const {showDetails, currentPokemon} = this.props;
                console.log("TCL: DetailsView -> componentDidMount -> this.props", this.props)
                // return pokemonDetails.length > 0 ? this.renderDetailsView(pokemonDetails) : 

                return showDetails === true ? this.renderDetailsView(currentPokemon)  : this.renderNoPokemonSelected();
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