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
                    offset : 0,
                    limit : 50,
                    isLoaded: false,
                    currentPokemon : null,
                    showDetails : false
                    // pokemonDetails : []
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
            // Load All Async Requests
            // --------------------------------------
            async getAllPokemons() {
                const {offset, limit } = this.state;
                return axios.get(Endpoints.getPokemons,{params:{offset:offset, limit:limit}})
            }


             
          




        /* ==========================================================================
        ** Handle State
        ** ========================================================================== */
            // --------------------------------------
            // Select Current Pokemon on 
            // Pokemon Grid Item Click
            // --------------------------------------
            onPokemonItemClick =  (pokemonName) =>{
                console.log("TCL: HomeView -> onPokemonItemClick -> event", pokemonName)
                
              
        

                this.setState({currentPokemon : pokemonName, showDetails : true})

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
                
                const {pokemonsData} = this.state;

                return (
                    <div className="bootstrap-wrapper">
                        <div className="container-fluid">
                            <div className="row">
                                <div className="col-lg-4 col-md-4 col-sm-4 col-xs-12">
                                   {this.renderPokemonDetails()}
                                </div>
                                <div className="col-lg-8 col-md-8 col-sm-8 col-xs-12">

                                    {this.renderSearchBar()}

                                   
                                    {this.renderPokemonsTable(pokemonsData)}
                                 

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
                    <CardContainer fixedCard = {true}>  
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
                        <SearchBar/> 
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
                const {pokemonsData} = this.state;
                const {count} = pokemonsData
                // return <CardContainer>    <Pagination currentPage = {currentPage} dataCount = {anunciosCount} onItemClick = {this.onPageitemCick} itemsPerPage = {itemsPerPage}/> </CardContainer>
                return (
                    <CardContainer mediumCard = {true}>    
                        <Pagination currentPage = {1} dataCount = {count} onItemClick = {(e)=> console.log(e)} itemsPerPage = {50}/> 
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
// Define PropTypes 
// -------------------------------------- 
HomeView.propTypes = {
    props: PropTypes
};
// --------------------------------------
// Export Component
// --------------------------------------
export default HomeView;