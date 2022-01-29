var titleData = [];
var myHeaders = new Headers();
myHeaders.append("Authorization", "Client-ID f8c12722308ea37");
var formdata = new FormData();
var requestOptions = {
  method: "GET",
  headers: myHeaders,
  redirect: "follow",
};
fetch(
  "https://api.imgur.com/3/gallery/top/viral/month/1?showViral=true&mature=true&album_previews=true",
  requestOptions
)
  .then((response) => response.json())
  .then((result) => showProd(result.data))
  .catch((error) => console.log("error", error));

let parent = document.getElementById("prod");
let parent1 = document.getElementById("prod1");
let parent2 = document.getElementById("prod2");
let parent3 = document.getElementById("prod3");
let parent4 = document.getElementById("prod4");
let parent5 = document.getElementById("prod5");
function showProd(data) {
  console.log("data", data);

  let data1 = data.slice(0, 15);
  let data2 = data.slice(15, 45);
  let data3 = data.slice(30, 45);
  let data4 = data.slice(45, 60);
  let data5 = data.slice(10, 30);
  let data6 = data.slice(40, 60);
  data1.forEach((product) => {
    let div = document.createElement("div");
    let img = document.createElement("img");
    img.setAttribute("class", "imgGif");
    img.src = product.link;
    let titl = document.createElement("p");
    titl.textContent = product.title;
    titleData.push(product.title);
    div.append(img, titl);
    parent.append(div);
  });
  data2.forEach((product) => {
    let div = document.createElement("div");
    let img = document.createElement("img");
    img.setAttribute("class", "imgGif");
    img.src = product.link;
    let titl = document.createElement("p");
    titl.textContent = product.title;
    titleData.push(product.title);
    div.append(img, titl);
    parent1.append(div);
  });
  data3.forEach((product) => {
    let div = document.createElement("div");
    let img = document.createElement("img");
    img.setAttribute("class", "imgGif");
    img.src = product.link;
    let titl = document.createElement("p");
    titl.textContent = product.title;
    titleData.push(product.title);

    div.append(img, titl);
    parent2.append(div);
  });
  data4.forEach((product) => {
    let div = document.createElement("div");
    let img = document.createElement("img");
    img.setAttribute("class", "imgGif");
    img.src = product.link;
    let titl = document.createElement("p");
    titl.textContent = product.title;
    titleData.push(product.title);

    div.append(img, titl);
    parent3.append(div);
  });
  data5.forEach((product) => {
    let div = document.createElement("div");
    let img = document.createElement("img");
    img.setAttribute("class", "imgGif");
    img.src = product.link;
    let titl = document.createElement("p");
    titl.textContent = product.title;
    div.append(img, titl);
    parent4.append(div);
  });
  data6.forEach((product) => {
    let div = document.createElement("div");
    let img = document.createElement("img");
    img.setAttribute("class", "imgGif");
    img.src = product.link;
    let titl = document.createElement("p");
    titl.textContent = product.title;
    div.append(img, titl);
    parent5.append(div);
  });
}
let btn = document.getElementById("btnSearch");
btn.addEventListener("click", () => {
  let inputValue = document.getElementById("search").value;
  // alert(`hey you searched${inputValue}`);
  let searchedResult = titleData.filter((el) => {
    return el.toUpperCase().includes(inputValue.toUpperCase());
  });
  console.log("searched result", searchedResult);
  showSearchResult(searchedResult);
});
let searchParent = document.getElementById("ParentSearch");
function showSearchResult(data) {
  data.forEach((el) => {
    let div = document.createElement("div");
    let p = document.createElement("p");
    p = el;
    div.append(p);
    searchParent.append(div);
  });
}
