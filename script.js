//You can edit ALL of the code here
function setup() {
  const allEpisodes = getAllEpisodes();
  makePageForEpisodes(allEpisodes);
}

function makePageForEpisodes(episodeList) {
  // const rootElem = document.getElementById("root");
  // rootElem.textContent = `Got ${episodeList.length} episode(s)`;
  console.log(episodeList);
  episodeList.forEach((obj) => {
    console.log(obj);
    let div = document.createElement("div");
    div.classList = "col-lg-4 p-2";
    div.innerHTML = `
    <div class="card w-100 h-100">
      <img class="card-img-top rounded"
      src="${obj.image.original}"
      alt="image of episode ${obj.name}"/>
      <div class="card-body d-flex flex-column">
        <h5 class="card-title">${obj.name} | S${obj.season}E${obj.number}</h5>
        <p class="card-text">${obj.summary}</p>
        <a href="${obj.url}" target="_blank" class="btn btn-info mt-auto">More info</a>
      </div>
    </div>`;
    document.getElementById("infoBoxes").appendChild(div);
  });
}

window.onload = setup;
