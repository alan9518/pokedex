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
    // import PropTypes from 'prop-types';
    

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
                    showNoPokemonFoundMessage : false
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
                

                // get Pokemons All Data for State
                const pokemonsDetailsData = await this.getPokemonDetails(pokemonsData);
				
                

                 // Set State
                 this.setState({
                    pokemonsData : pokemonsDetailsData,
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
            async getPokemonDetails(pokemonsData) {
                // Merge Pokemons And Types
                const pokemonsLinksArray = pokemonsData.results.map((pokemon) => {return pokemon.url});
                const promisesArray = pokemonsLinksArray.map(url=>axios.get(url));

                try {
                    const pokemonDetails = (await Promise.all(promisesArray)).map(res=>res.data)
                    return pokemonDetails;  
                } 
                catch(error) {
                    console.error(error)
                    return [];
                }   
            }


            // --------------------------------------
            // Get Single Pokemon
            // --------------------------------------
            async getPokemonByNameOrId(pokemon) {
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
						
                        
                        let pokemonResult = [pokemonData.data]
						
                        this.setState({
                            filteredPokemons : pokemonResult,
                            showNoPokemonFoundMessage : pokemonData.length > 0 ? true : false
                        })
                    })
                    .catch((error)=> {
                        console.log("TCL: HomeView -> filterPokemons -> error", error)
                        this.setState({
                            filteredPokemons : [],
                            showNoPokemonFoundMessage : true
                        })
                    })
                }
                // reset FIltered pokemons, to show the ones the original List
                else {
                    this.setState({
                        filteredPokemons : [],
                        showNoPokemonFoundMessage : false
                    })
                }
                
            }

             
          




        /* ==========================================================================
        ** Handle State
        ** ========================================================================== */

            // --------------------------------------
            // Select Current Pokemon on 
            // Pokemon Grid Item Click
            // Filter State to get Current Pokemon
            // --------------------------------------
            onPokemonItemClick =  (pokemonName) =>{
                const {pokemonsData, filteredPokemons} = this.state;
                let currentPokemon = null
                if(filteredPokemons.length > 0) 
                    currentPokemon = filteredPokemons[0];
                else
                    currentPokemon = pokemonsData.filter(pokemon=>pokemon.name === pokemonName)[0];
                
				
                this.setState({currentPokemon : currentPokemon, showDetails : true})
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
                    
                    //  Promise to Get Pkemon Details
                    this.getPokemonDetails(pokemonsData.data).then((pokemonsDetailsData)=> {
						
						
                        // Update State with New Pokemons Data
                        this.setState({
                            currentPage : parseInt(newPage),
                            pokemonsData : pokemonsDetailsData,
                            offset : newOffset
                        });
                    });
                   
                });
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
                
                const {pokemonsData, filteredPokemons, showNoPokemonFoundMessage} = this.state;

                return (
                    <div className="bootstrap-wrapper">
                        <div className="container-fluid">
                            <div className="row">
                                <div className="col-lg-4 col-md-4 col-sm-12 col-xs-12">
                                   {this.renderPokemonDetails()}
                                </div>
                                <div className="col-lg-8 col-md-8 col-sm-8 col-xs-12">

                                    {this.renderSearchBar()}

                                    {  filteredPokemons.length <= 0  && showNoPokemonFoundMessage  && this.renderPokemonNotFound()}

                                   
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
            // Pokemon Not Found Message
            // --------------------------------------
            renderPokemonNotFound() {
                return (
                    <CardContainer>   
                       <h1> Pokemon Not Found  </h1>
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
                            pokemons = {pokemonsData}
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
                const {count} = pokemonsData

                return (
                    <CardContainer mediumCard = {true}>    
                        <Pagination currentPage = {currentPage} dataCount = {count} onItemClick = {this.onPageitemCick} itemsPerPage = {50} /> 
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