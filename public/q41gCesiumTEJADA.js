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

    // Add new account
    movies.push(obj);

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
  movies.forEach(movie => {
    output += `
      <div class="movie-card">
        <p>
          ${movie.title} (${movie.year}) - ${movie.genre}, 
          Rating: <span class="stars">${"★".repeat(movie.rating)}</span>
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

