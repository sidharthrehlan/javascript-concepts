window.onstorage = () => {
  // When local storage changes, dump the list to
  // the console.
  console.log("localstorge eventllll");
  console.log(window.localStorage.getItem("name"));
  //alert(window.localStorage.getItem("name"));
};
const form = document.querySelector("form");
const fieldValue = document.querySelector("#name");
form.addEventListener("submit", (e) => {
  e.preventDefault();

  localStorage.setItem("name", fieldValue.value);
});
