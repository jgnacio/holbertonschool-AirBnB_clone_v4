$(() => {
  var listAmenities = [];
  $('input[type=checkbox]').prop('checked',false); // Joaco credits :)
  $("input[type=checkbox]").change(function () {
    if (this.checked) {
      listAmenities.push($(this).attr("data-name"));
    } else {
      listAmenities.splice(listAmenities.indexOf($(this).attr("data-name")), 1);
    }
    $(".amenities > h4").text(listAmenities.join(", "));
  });
});

export { listAmenities };