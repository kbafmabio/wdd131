const year = document.querySelector("#currentyear");
const lastModified = document.querySelector("#lastModified");

year.textContent = new Date().getFullYear();
//alert(document.lastModified);
const options = {
    weekday: "long",
    day: "numeric",
    month: "long",
    year: "numeric"
};
lastModified.innerHTML = new Date(document.lastModified).toLocaleDateString("en-US", options);