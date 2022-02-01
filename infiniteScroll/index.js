let parent = document.getElementById("prod");
let searchParent = document.getElementById("searchResults");
var titles = [];
function getData(page) {
  fetch(
    `https://api.pexels.com/v1/search?query=bikes&page=${page}&per_page=25`,
    {
      method: "GET",
      headers: {
        Authorization:
          "563492ad6f9170000100000153773b5c95d14d0291140d39b7064f0e",
      },
    }
  )
    .then((response) => response.json())
    .then((response) => showProd(response.photos))
    .catch((e) => console.log(e));
}
getData(1);
let delayed;

function debounce(fn, time) {
  // delay
  if (delayed) {
    clearTimeout(delayed);
  }
  delayed = setTimeout(() => {
    fn(1);
  }, time);
}
function searchData(page) {
  let searchQuery = document.getElementById("query").value;
  fetch(
    `https://api.pexels.com/v1/search?query=${searchQuery}&page=${page}&per_page=25`,
    {
      method: "GET",
      headers: {
        Authorization:
          "563492ad6f9170000100000153773b5c95d14d0291140d39b7064f0e",
      },
    }
  )
    .then((response) => response.json())
    .then((response) => showSearchProd(response.photos))
    .catch((e) => console.log(e));
}

function showProd(data) {
  data.forEach((product) => {
    titles.push(product.alt);
    let div = document.createElement("div");
    let img = document.createElement("img");
    img.src = product.src.large2x;
    let p = document.createElement("p");
    p.setAttribute("class", "ownerClass");

    p.textContent = product.alt;
    let owner = document.createElement("h2");
    owner.setAttribute("class", "ownerClass");
    owner.textContent = "Captured By " + product.photographer;
    div.append(img, p, owner);
    parent.append(div);
  });
}
let i = 2;
window.addEventListener("scroll", () => {
  if (
    window.scrollY + window.innerHeight >=
    document.documentElement.scrollHeight
  ) {
    if (parent) {
      getData(i++);
    } else {
      searchData(i++);
    }
  }
});

function scrollTooo() {
  // e.preventDefault();
  console.log("go up!");
  window.scrollTo({ top: 0, behavior: "smooth" });
}
function showTitles(data) {
  let inputValue = document.getElementById("query").value;
  let modified = data.filter((el) => {
    return el.toUpperCase().includes(inputValue.toUpperCase());
  });
  let debounceParent = document.getElementById("searchDiv");
  modified.forEach((el) => {
    let p = document.createElement("p");
    p.textContent = el;
    debounceParent.append(p);
  });
}

function showSearchProd(data) {
  parent.innerHTML = null;
  titles = new Array();
  //   console.log("search fun", data);
  searchParent.innerHTML = null;
  data.forEach((product) => {
    titles.push(product.alt);
    let div = document.createElement("div");
    let img = document.createElement("img");
    img.src = product.src.large2x;
    let p = document.createElement("p");
    p.setAttribute("class", "ownerClass");

    p.textContent = product.alt;
    let owner = document.createElement("h2");
    owner.setAttribute("class", "ownerClass");
    owner.textContent = "Captured By " + product.photographer;
    div.append(img, p, owner);
    searchParent.append(div);
    showTitles(titles);
  });
}
