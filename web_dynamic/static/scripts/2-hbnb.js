document.addEventListener("DOMContentLoaded", () => {
  let div = document.querySelector("#api_status");
  fetch("http://172.22.128.139:5001/api/v1/status/")
    .then(function (response) {
      if (response.ok) {
        div.classList.add("available");
      } else {
        div.classList.remove("available");
      }
    })
    .catch(function (error) {
      console.log(error);
    });
});
