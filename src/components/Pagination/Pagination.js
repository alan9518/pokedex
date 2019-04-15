/* ==========================================================================
** Pagination Layout Component
** 13/04/2019
** Alan Medina Silva
** ========================================================================== */

// --------------------------------------
// Get Dependences
// --------------------------------------
    import React from 'react';
    import {PaginationItem} from '../index'
    import PropTypes from 'prop-types';
    import './styles.css';

// --------------------------------------
// Create Functional Component
// --------------------------------------
    const Pagination = (props) => {

        
        const { currentPage, dataCount, onItemClick, itemsPerPage, next, previous } = props;
		console.log("TCL: Pagination -> prev", previous)
		console.log("TCL: Pagination -> next", next)



        // Define Pagination Settings
        const totalPages = Math.ceil(dataCount / itemsPerPage);
        const maxItemsToShow = 6;
        let start_loop = currentPage;
        let difference = totalPages - currentPage;

        if (difference <= itemsPerPage)
            start_loop = totalPages - itemsPerPage;


        let end_loop = start_loop + itemsPerPage;
		console.log("TCL: Pagination -> end_loop", end_loop)
	
        // Iterate To Create Items List
        const renderPaginationItems = () => {
            let itemsLayout = []
            
            // currentPage +  maxItemsToShow = Update Items to List

            for (let pageCounter = currentPage; pageCounter <= (currentPage +  maxItemsToShow); pageCounter++) {
                itemsLayout.push(
                    <PaginationItem  
                        key = {`pagItem-${pageCounter}`} 
                        onItemClick = {onItemClick} 
                        pageCounter = {pageCounter} 
                        showArrow = {false}
                        arrowPosition = {null}
                        isActive = {currentPage === pageCounter ? true : false}
                    />
                )
                
            }

            

            return itemsLayout
        }


        return (
            <div className="px-pagination-bx col-lg-12 clearfix ">
                <ul className="px-row px-pagination">

                    {
                       
                        currentPage > 1 &&   <PaginationItem  
                                                key = {`pagItem-prev`} 
                                                onItemClick = {props.onItemClick} 
                                                pageCounter = {'previous'} 
                                                showArrow = {true}
                                                arrowPosition = {'left'}
                                                isActive = { false}
                                            />
                    }
                    {
                        renderPaginationItems()
                    }

                    {
                        // currentPage <= end_loop && <li className="next"><a href="#"><i className="fa fa-angle-double-right"></i></a></li>
                        currentPage < end_loop && <PaginationItem  
                                                key = {`pagItem-next`} 
                                                onItemClick = {props.onItemClick} 
                                                pageCounter = {'next'} 
                                                showArrow = {true}
                                                arrowPosition = {'right'}
                                                isActive = { false}
                                            />
                    }
                </ul>
            </div>
        )
    }


// -------------------------------------- 
// Define PropTypes 
// -------------------------------------- 
    Pagination.propTypes = {
        props: PropTypes
    };


// --------------------------------------
// Export Component
// --------------------------------------
    export default Pagination;