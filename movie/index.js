const fetch = require("node-fetch");

const url = "https://api.themoviedb.org/3/movie/changes?page=1";
const options = { method: "GET", headers: { accept: "application/json" } };

fetch(url, options)
  .then((res) => res.json())
  .then((json) => console.log(json))
  .catch((err) => console.error("error:" + err));
