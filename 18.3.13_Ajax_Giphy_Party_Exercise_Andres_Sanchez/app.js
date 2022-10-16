//Variables -Search input field and output HTML element
const $searchInput = $("#search-input");
const $gifArea = $(".giph-output");

//Retrieve Gifs
$("#gifs-form").on("submit", async (e) => {
  e.preventDefault();

  let searchTerm = $searchInput.val();
  $searchInput.val("");

  const response = await axios.get("http://api.giphy.com/v1/gifs/search", {
    params: {
      q: searchTerm,
      api_key: "MhAodEJIJxQMxW9XqxKjyXfNYdLoOIym",
    },
  });
  addGif(response.data);
});

//Function to add Gifs to DOM
const addGif = (res) => {
  let numResults = res.data.length;
  if (numResults) {
    let randomIdx = Math.floor(Math.random() * numResults);
    let $newCol = $("<div>", { class: "maxWidth" });
    let $newGif = $("<img>", {
      src: res.data[randomIdx].images.original.url,
      class: "maxWidth",
    });
    $newCol.append($newGif);
    $gifArea.append($newCol);
  }
};

//Function to rmove all Gifs
$(".remove-gifs").on("click", () => {
  $gifArea.empty();
});
