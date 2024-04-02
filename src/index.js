// Function to initialize event listeners
const init = () => {
    const inputForm = document.querySelector("form");
  
    // Event listener for form submission
    inputForm.addEventListener("submit", (event) => {
      event.preventDefault(); // Prevent default form submission behavior
  
      const input = document.querySelector("#searchByID"); // Get user input
      const movieDetails = document.querySelector("#movieDetails"); // Get movie details section
  
      // Fetch data based on user input
      fetch(`http://localhost:3000/movies/${input.value}`)
        .then((response) => response.json())
        .then((data) => {
          // Update movie details section with fetched data
          movieDetails.innerHTML = `
            <h4>${data.title}</h4>
            <p>${data.summary}</p>
          `;
        })
        .catch((error) => {
          console.error("Error fetching data:", error);
          movieDetails.innerHTML = "<p>Movie not found!</p>"; // Display error message if movie not found
        });
    });
  };
  
  // Event listener for DOM content loaded
  document.addEventListener("DOMContentLoaded", init);
  