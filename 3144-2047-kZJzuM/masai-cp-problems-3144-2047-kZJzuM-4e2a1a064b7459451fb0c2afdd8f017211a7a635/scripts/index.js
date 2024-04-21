// --- do not touch  ↓↓↓↓↓↓↓↓↓↓↓↓ ----------
const baseServerURL = `http://localhost:${
  import.meta.env.REACT_APP_JSON_SERVER_PORT
}`;
// --- do not touch  ↑↑↑↑↑↑↑↑↑↑↑↑ ----------

// ***** Constants / Variables ***** //
const jobURL = `${baseServerURL}/jobs`;
let mainSection = document.getElementById("data-list-wrapper");

let paginationWrapper = document.getElementById("pagination-wrapper");

//sort and filter
let sortAtoZBtn = document.getElementById("sort-low-to-high");
let sortZtoABtn = document.getElementById("sort-high-to-low");
let filterGoogle = document.getElementById("filter-Google");
let filterMicrosoft = document.getElementById("filter-Microsoft");
let filtercapgemini = document.getElementById("filter-capgemini");


//Jobs Data
let jobsData = [];
let queryParamString = null;
let pageNumber = 1;