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

        
        const { currentPage, dataCount, onItemClick, itemsPerPage } = props;


        // Define Pagination Settings
        const totalPages = Math.ceil(dataCount / itemsPerPage);
        let start_loop = currentPage;
        let difference = totalPages - currentPage;

        if (difference <= 4)
            start_loop = totalPages - 4;


        let end_loop = start_loop + 4;

        console.log("TCL: Pagination -> totalPages", totalPages)


        // Iterate To Create Items List
        const renderPaginationItems = () => {
            let itemsLayout = []
            // const activeclass = 'active';
            

            for (let pageCounter = 1; pageCounter <= end_loop; pageCounter++) {
                itemsLayout.push(
                    <PaginationItem  
                        key = {`pagItem-${pageCounter}`} 
                        onItemClick = {props.onItemClick} 
                        pageCounter = {pageCounter} 
                        showArrow = {false}
                        arrowPosition = {null}
                        isActive = {currentPage === pageCounter ? true : false}
                    />
                )
                
            }

            console.log("TCL: renderPaginationItems -> itemsLayout", itemsLayout)

            return itemsLayout
        }


        return (
            <div className="px-pagination-bx col-lg-12 clearfix ">
                <ul className="px-row px-pagination">

                    {
                        // currentPage > 1 && <li className="previous"><a href="#"><i className="fa fa-angle-double-left"></i></a></li>
                        currentPage > 1 &&   <PaginationItem  
                                                key = {`pagItem-prev`} 
                                                onItemClick = {props.onItemClick} 
                                                pageCounter = {'prev'} 
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