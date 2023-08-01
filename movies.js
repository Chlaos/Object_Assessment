document.addEventListener('DOMContentLoaded', (event) => {
    // An array of favorite movies
    const movies = [
        {
            name: "Inception",
            year: 2010,
            director: "Christopher Nolan",
            picture: "https://c8.alamy.com/comp/P3XHKC/original-film-title-inception-english-title-inception-film-director-christopher-nolan-year-2010-credit-warner-bross-picturessyncopylegendary-pictures-album-P3XHKC.jpg"
        },
        {
            name: "My Neighbor Totoro",
            year: 1988,
            director: "Hayao Miyazaki",
            picture: "https://upload.wikimedia.org/wikipedia/en/0/02/My_Neighbor_Totoro_-_Tonari_no_Totoro_%28Movie_Poster%29.jpg"
        },
        {
            name: "Interstellar",
            year: 2014,
            director: "Christopher Nolan",
            picture: "https://m.media-amazon.com/images/I/61pyUElLh7L._AC_UF894,1000_QL80_.jpg"
        }
    ];

    // Get a reference to the ol tag
    const movieList = document.querySelector('#movie-list');

    // Map over the array and build an array of li elements
    movies.map(movie => {
        const li = document.createElement('li');
        li.innerHTML = `
            <h2>${movie.name}</h2>
            <p>Directed by ${movie.director}, ${movie.year}</p>
            <img src="${movie.picture}" alt="${movie.name}" style="width:200px;height:300px;">
        `;
        movieList.appendChild(li);
    });
});
