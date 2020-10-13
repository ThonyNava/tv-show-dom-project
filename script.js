//You can edit ALL of the code here

const allEpisodes = getAllEpisodes();
let button = document.querySelector("button");
let search = document.querySelector("input");
let query;
let gettingValue = () => {
  query = search.value;
};

button.addEventListener("click", function () {
  let api = "https://api.tvmaze.com/search/shows?q=";
  let url = api + query;
  console.log(url);
  fetch(url)
    .then((response) => {
      if (response.status >= 200 && response.status <= 299) {
        return response.json();
      } else {
        throw new Error(
          `Encountered something unexpected: ${response.status} ${response.statusText}`
        );
      }
    })
    .then((jsonResponse) => {
      console.log(jsonResponse);
      jsonResponse.forEach((obj) => {
        let show = obj.show;
        let div = document.createElement("div");
        div.classList = "col-lg-4 p-2";
        div.innerHTML = `
          <div class="card w-100 h-100">
            <img class="card-img-top rounded"
            src="${show.image.original}"
            alt="image of episode ${show.name}"/>
            <div class="card-body d-flex flex-column">
              <h5 class="card-title">${show.name} | S${show.season}E${show.number}</h5>
              <p class="card-text">${show.summary}</p>
              <a href="${show.url}" target="_blank" class="btn btn-info mt-auto">More info</a>
            </div>
          </div>`;
        document.getElementById("infoBoxes").appendChild(div);
      });
    })
    .catch((error) => {
      // Handle the error
      console.log(error);
    });
});
