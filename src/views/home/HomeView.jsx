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
    import { CardContainer,  SearchBar, Pagination, Loader } from '../../components';
    import {GridView,DetailsView } from '../../views';
    import {Endpoints} from '../../settings/Endpoints';
    import axios from 'axios';
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
                    pokemonsData : [],
                    filteredPokemons : [],
                    offset : 0,
                    limit : 50,
                    isLoaded: false,
                    currentPokemon : null,
                    showDetails : false,
                    currentPage : 1,
                    pokemonFound : false
                }
            }

            // --------------------------------------
            // Set Initial Values
            // --------------------------------------
            componentDidMount() {
                this.loadAPI();
            }


        /* ==========================================================================
        ** API Connection
        ** ========================================================================== */

            // --------------------------------------
            // Load All Async Requests
            // --------------------------------------
            async loadAPI() {
                const pokemonsPromise = await this.getAllPokemons();
                const pokemonsData =  await pokemonsPromise.data;
                console.log("TCL: HomeView -> loadAPI -> pokemonsData", pokemonsData)
                

                // Set State
                this.setState({
                    pokemonsData : pokemonsData,
                    isLoaded : true
                })
            }   

            
            // --------------------------------------
            // Get all Pokemons
            // --------------------------------------
            async getAllPokemons(offset = this.state.offset) {
                const {limit } = this.state;
                return axios.get(Endpoints.getPokemons,{params:{offset:offset, limit:limit}})
            }

            // --------------------------------------
            // Get Single Pokemon
            // --------------------------------------
            getPokemonByNameOrId(pokemon) {
                return axios.get(`${Endpoints.getPokemons}/${pokemon}`);
            }


            // --------------------------------------
            // Search Pokemon By Name
            // --------------------------------------
            filterPokemons(pokemon) {

                // Choose betwween Look for pokemons or show all pokemons
                if(pokemon.length > 0) {
                    // Call Axios to Filter Pokemon
                    this.getPokemonByNameOrId(pokemon).then((pokemonData)=> {
                        let pokemonResult = {results : [{name : pokemonData.data.name, id:pokemonData.data.id}]}
                        this.setState({
                            filteredPokemons : pokemonResult,
                            pokemonFound : pokemonData.length > 0 ? true : false
                        })
                    })
                    .catch((error)=> {
                        console.log("TCL: HomeView -> filterPokemons -> error", error)
                        this.setState({
                            filteredPokemons : [],
                            pokemonFound : false
                        })
                    })
                }
                // reset FIltered pokemons, to show the ones the original List
                else {
                    this.setState({
                        filteredPokemons : [],
                    })
                }
                
            }

             
          




        /* ==========================================================================
        ** Handle State
        ** ========================================================================== */
            // --------------------------------------
            // Select Current Pokemon on 
            // Pokemon Grid Item Click
            // --------------------------------------
            onPokemonItemClick =  (pokemonName) =>{
                this.setState({currentPokemon : pokemonName, showDetails : true})
            }



            // --------------------------------------
            // Change Page
            // Load Prev/Next Page
            // --------------------------------------
            onPageitemCick = (event)=> {
                event.preventDefault();
                const {value} = event.currentTarget;
                const {limit} = this.state;
                let newPage = this.state.currentPage;
                let newOffset = this.state.offset;
                
                
                // Check if is Page Number or Next or Prev
                switch(value) {
                    case 'next' : newPage +=1; 
                        break;  
                    case 'previous' : newPage -=1; 
                        break;  
                    default : 
                        newPage = parseInt(value); 
                }

                // Update Offset for Requests
                newOffset = (newPage - 1) * limit;


                // Update Data
                this.getAllPokemons(newOffset).then((pokemonsData)=> {
                    this.setState({
                        currentPage : parseInt(newPage),
                        pokemonsData : pokemonsData.data,
                        offset : newOffset
                    })
                })
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
                
                const {pokemonsData, filteredPokemons} = this.state;

                return (
                    <div className="bootstrap-wrapper">
                        <div className="container-fluid">
                            <div className="row">
                                <div className="col-lg-4 col-md-4 col-sm-12 col-xs-12">
                                   {this.renderPokemonDetails()}
                                </div>
                                <div className="col-lg-8 col-md-8 col-sm-8 col-xs-12">

                                    {this.renderSearchBar()}

                                   
                                    { 
                                        filteredPokemons.length <= 0 
                                        ? this.renderPokemonsTable(pokemonsData)
                                        : this.renderPokemonsTable(filteredPokemons)
                                    }
                                 

                                    {this.renderPagination()}
                                </div>
                                
                            </div>    
                        </div>
                    </div>
                )
            }


            // --------------------------------------
            // Render Pokemon Details
            // --------------------------------------
            renderPokemonDetails() {
                const {currentPokemon, showDetails} = this.state;
				console.log("TCL: HomeView -> rendercurrentPokemon -> currentPokemon", currentPokemon)
                return  (
                    <CardContainer fixedCard = {true} key = {'detailsCardContainer'}>  
                        <DetailsView  currentPokemon = {currentPokemon} showDetails = {showDetails}/>
                    </CardContainer>
                )
            }


            // --------------------------------------
            // Render SearchBar
            // --------------------------------------
            renderSearchBar() {
                return  ( 
                    <CardContainer>   
                        <SearchBar searchPokemon = {this.filterPokemons.bind(this)}/> 
                    </CardContainer>
                )
            }

            // --------------------------------------
            // Grid View
            // --------------------------------------
            renderPokemonsTable(pokemonsData) {
                return( 
                    <CardContainer>   
                        <GridView 
                            pokemons = {pokemonsData.results}
                            onPokemonItemClick = {this.onPokemonItemClick}
                        />    

                    </CardContainer>
                )

            }

            // --------------------------------------
            // Pagination
            // --------------------------------------

            renderPagination() {
                const {pokemonsData, currentPage} = this.state;
                const {previous, next, count} = pokemonsData

                return (
                    <CardContainer mediumCard = {true}>    
                        <Pagination currentPage = {currentPage} dataCount = {count} onItemClick = {this.onPageitemCick} itemsPerPage = {50} next = {next} prev = {previous}/> 
                    </CardContainer>
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
            // Render Loader
            // --------------------------------------
            renderLoader() {
                return <Loader/>
            }

            // --------------------------------------
            // Render Component
            // --------------------------------------
            render() {
                const {isLoaded} = this.state;
                return isLoaded ? this.renderHomeView() : this.renderLoader();
            }
    }


// --------------------------------------
// Export Component
// --------------------------------------
export default HomeView;