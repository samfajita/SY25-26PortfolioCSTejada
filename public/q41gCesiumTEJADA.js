const form = document.getElementById("dForm");
if (form)
{
form.addEventListener("submit", function(e) {
  e.preventDefault(); // stop redirect

  if (confirm("Sure You Want To Save Your Work?")) {
    const data = new FormData(form);
    const obj = Object.fromEntries(data.entries());

    // Load existing movies (array of objects)
    let movies = JSON.parse(localStorage.getItem("movies")) || [];

    const existing = movies.find(m => m.title === obj.title);

    if (existing) {
      // Convert ratings to numbers
      existing.sum = (existing.sum || Number(existing.rating)) + Number(obj.rating);
      existing.count = (existing.count || 1) + 1;
      existing.rating = (existing.sum / existing.count).toFixed(1); // average
      } 
  
    else {
      // Initialize with sum & count
      obj.sum = Number(obj.rating);
      obj.count = 1;
      movies.push(obj);
      }


    // Save back to localStorage
    localStorage.setItem("movies", JSON.stringify(movies));

    console.log("Saved movies:", movies); // check in console
    alert("Movie saved!");
    form.reset();

    renderMovies();
  }
}); }

function renderMovies() {
  const movies = JSON.parse(localStorage.getItem("movies")) || [];
  const listDiv = document.getElementById("movieList");

  if (movies.length === 0) {
    listDiv.innerHTML = "<p>No movies saved yet.</p>";
    return;
  }

  let output = "<ul>";
  movies.forEach((movie,index) => {
    const avg = Number(movie.rating);
    const stars = "★".repeat(Math.round(avg)) + "☆".repeat(5 - Math.round(avg));
    output += `
      <div class="movie-card">
        <p>
          ${movie.title} (${movie.year}) - ${movie.genre}, 
          Average Rating: <span class="stars">${stars}</span> (${avg})
          <button class="delete-button" onclick="deleteMovie(${index})">Delete</button>
        </p>
      </div>
    `;
  });
  output += "</ul>";

  listDiv.innerHTML = output;
}


document.addEventListener("DOMContentLoaded", () => {
  renderMovies();
});

function deleteMovie(index) {
  if (confirm("Are you sure you want to delete?")) {
  let movies = JSON.parse(localStorage.getItem("movies")) || [];
  movies.splice(index, 1); // remove the movie at that position
  localStorage.setItem("movies", JSON.stringify(movies));
  renderMovies();} // refresh the list 
}
