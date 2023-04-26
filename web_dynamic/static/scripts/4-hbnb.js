document.addEventListener("DOMContentLoaded", () => {
  let listAmenities = [];
  let listIdofAmen = [];
  $("input[type=checkbox]").prop("checked", false); // Joaco credits :)
  $("input[type=checkbox]").change(function () {
    if (this.checked) {
      listAmenities.push($(this).attr("data-name"));
      listIdofAmen.push($(this).attr("data-id"));
    } else {
      listAmenities.splice(listAmenities.indexOf($(this).attr("data-name")), 1);
      listIdofAmen.splice(listIdofAmen.indexOf($(this).attr("data-id")), 1);
    }
    $(".amenities > h4").text(listAmenities.join(", "));
  });

  let body_data = '{}';
  const btn = document.querySelector('button');
    btn.addEventListener('click', function(event){
    if (listIdofAmen.length > 0) {
    body_data = {'amenities': listIdofAmen};
    }
  });

  fetch("http://0.0.0.0:5001/api/v1/places_search/", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: body_data,
  })
    .then((response) => response.json())
    .then((data) => {
      const sectionPlace = document.querySelector("section.places");
      for (let place of data) {
        const article = document.createElement("article");
        article.innerHTML = `
        <div class="title_box">
          <h2>${place.name}</h2>
          <div class="price_by_night">${place.price_by_night}</div>
        </div>
        <div class="information">
          <div class="max_guest">${place.max_guest} Guest${
          place.max_guest != 1 ? "s" : ""
        }</div>
          <div class="number_rooms">${place.number_rooms} Bedroom${
          place.number_rooms != 1 ? "s" : ""
        }</div>
          <div class="number_bathrooms">${place.number_bathrooms} Bathroom${
          place.number_bathrooms != 1 ? "s" : ""
        }</div>
        </div>
        <div class="user"><b>Owner:</b> </div>
            <div class="description">
          ${place.description ? place.description : ""}
            </div>
      `;
        //append the article template
        sectionPlace.appendChild(article);
      }
    })
    .catch(function (error) {
      console.log(error);
    });
});
