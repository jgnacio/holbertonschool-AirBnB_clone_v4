$(() => {
  let listAmenities = [];

  $("input[type=checkbox]").change(function () {
    if (this.checked) {
      listAmenities.push($(this).attr("data-name"));
    } else {
      listAmenities.splice(listAmenities.indexOf($(this).attr("data-name")), 1);
      //   listAmenities($(this).attr("data-name"));
    }
    $(".amenities > h4").text(listAmenities.join(", "));
  });
});
