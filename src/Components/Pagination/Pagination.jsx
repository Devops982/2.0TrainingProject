import React, { useState } from "react";
import JsonData from "./usedata.json"; // Importing sample data from a JSON file
import ReactPaginate from "react-paginate";

/**
 * Pagination Component for displaying a list of users with pagination.
 * Uses ReactPaginate for page navigation.
 */
function Pagination() {
  // State for the list of users and current page number
  const [users, setUsers] = useState(JsonData.slice(0, 50)); // Initial user data, sliced to limit the number of displayed users
  const [pageNumber, setPageNumber] = useState(0);

  // Number of users to display per page and calculation for the range of users to display
  const usersPerPage = 10; // Number of users to display on each page
  const pagesVisited = pageNumber * usersPerPage; // Index of the first user on the current page

  // Map and display the users for the current page
  const displayUsers = users
    .slice(pagesVisited, pagesVisited + usersPerPage)
    .map((user) => {
      return (
        <div className="user" key={user.id}>
          <h3>{user.firstName}</h3>
          <h3>{user.lastName}</h3>
          <h3>{user.email}</h3>
        </div>
      );
    });

  // Calculate the total number of pages based on the user data
  const pageCount = Math.ceil(users.length / usersPerPage);

  // Function to change the current page when a pagination button is clicked
  const changePage = ({ selected }) => {
    setPageNumber(selected);
  };

  return (
    <>
      <div class="m-6 block rounded-lg bg-white p-6 shadow-[0_2px_15px_-3px_rgba(0,0,0,0.07),0_10px_20px_-2px_rgba(0,0,0,0.04)] dark:bg-neutral-700">
        <h5 class="mb-2 text-xl font-medium leading-tight text-neutral-800 dark:text-neutral-50">
          Card title
        </h5>
        <p class="mb-4 text-base text-neutral-600 dark:text-neutral-200">
          {displayUsers}
          {/* ReactPaginate component for page navigation */}
          <ReactPaginate
            previousLabel={"Previous"}
            nextLabel={"Next"}
            pageCount={pageCount} // Total number of pages
            onPageChange={changePage} // Function to handle page changes
            containerClassName={"paginationBttns"} // CSS class for the pagination container
            previousLinkClassName={"previousBttn"} // CSS class for the "Previous" button
            nextLinkClassName={"nextBttn"} // CSS class for the "Next" button
          />
        </p>
      </div>

      
    </>
  );
}

export default Pagination;
