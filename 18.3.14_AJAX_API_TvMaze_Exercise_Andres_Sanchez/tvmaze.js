//Make query request to TvMaze via async function and axios, & retrieve/return requested data points
async function searchShows(query) {
  let url = `http://api.tvmaze.com/search/shows?q=${query}`;

  let response = await axios.get(url);
  console.log("Shows:", response);

  let showsData = response.data.map((item) => {
    return {
      id: item.show.id,
      name: item.show.name,
      summary: item.show.summary,
      image: item.show.image
        ? item.show.image.medium
        : "https://tinyurl.com/tv-missing",
    };
  });
  return showsData;
}

//Populate DOM with shows and add attributes for styling and DOM interaction
function populateShows(shows) {
  const $showsList = $("#shows-list");
  $showsList.empty();

  for (let show of shows) {
    let $item = $(
      `<div class="col-md-6 col-lg-3 Show" data-show-id="${show.id}">
         <div class="card" data-show-id="${show.id}">
           <div class="card-body">
           <img class="card-img-top" src=${show.image}>
             <h5 class="card-title">${show.name}</h5>
             <p class="card-text">${show.summary}</p>
             <button class="btn btn-success">Episodes</button>
           </div>
         </div>
       </div>
      `
    );

    $showsList.append($item);
  }
}

//Capture search input value to return list of shows, hide episodes area, and invoke populateShows function
$("#search-form").on("submit", async function handleSearch(evt) {
  evt.preventDefault();

  let query = $("#search-query").val();
  if (!query) return;

  $("#episodes-area").hide();

  let shows = await searchShows(query);

  populateShows(shows);
});

//Get episodes data to post to DOM
async function getEpisodes(id) {
  let url = `http://api.tvmaze.com/shows/${id}/episodes`;
  let response = await axios.get(url);
  let episodeData = response.data.map((item) => {
    return {
      id: item.id,
      name: item.name,
      season: item.season,
      number: item.number,
    };
  });

  console.log("Episode Data:", episodeData);
  return episodeData;
}

//Populate Episodes Data to DOM
function populateEpisondes(episodes) {
  const $episodesUl = $("#episodes-list");
  $episodesUl.empty();

  for (let episode of episodes) {
    const $episodesLi = $("<li>");
    $episodesLi.text(
      `${episode.name} (Season ${episode.season}, Number ${episode.number} ) `
    );
    $episodesUl.append($episodesLi);
    console.log($episodesLi.text());
  }
  $("#episodes-area").show();
}

//Event listener to trigger getEpisodes and populateEpisodes functions
$("#shows-list").on("click", ".btn", async function handleEpisodes(e) {
  let id = $(e.target).closest(".card").data("show-id");
  let episodes = await getEpisodes(id);
  populateEpisondes(episodes);
});
