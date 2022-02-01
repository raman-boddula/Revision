let parent = document.getElementById("prod");

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

function showProd(data) {
  data.forEach((product) => {
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
    getData(i++);
  }
});

function scrollTooo() {
  // e.preventDefault();
  console.log("go up!");
  window.scrollTo({ top: 0, behavior: "smooth" });
}