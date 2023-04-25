document.addEventListener("DOMContentLoaded", () => {
    let div = document.querySelector("#api_status");
    fetch("http://172.22.128.139:5001/api/v1/places_search/", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: "{}",
    })
      .then((response) => response.json())
      .then((data) => {
        const sectionPlace = document.querySelector("section.places");
        for (place of data) {
          const article = document.createElement("article");

          article.innerHTML = `
          <div class="title_box">
            <h2>${place.name}</h2>
            <div class="price_by_night">${place.price_by_night}</div>
          </div>
          <div class="information">
            <div class="max_guest">${place.max_guest} Guest${place.max_guest != 1 ?"s":""}</div>
            <div class="number_rooms">${place.number_rooms} Bedroom${place.number_rooms != 1 ?"s":""}</div>
            <div class="number_bathrooms">${place.number_bathrooms} Bathroom${place.number_bathrooms != 1 ?"s":""}</div>
          </div>
          <div class="user"><b>Owner:</b> </div>
              <div class="description">
            ${place.description ? place.description : ""}
              </div>
        `

          //append the article template
          sectionPlace.appendChild(article);
        }
      })
      .then((response) => console.log(JSON.stringify(response)))
      .catch(function (error) {
        console.log(error);
      });
  });
  


