//declaration of the variable
const mainnav = document.querySelector('.navigation');
const hambutton = document.querySelector('#menu');

//add an even listener to the hide hamburger and show navigation
hambutton.addEventListener('click', () => {
    mainnav.classList.toggle('show');
    hambutton.classList.toggle('show');
});

const temples = [
    {
        templeName: "Aba Nigeria",
        location: "Aba, Nigeria",
        dedicated: "2005, August, 7",
        area: 11500,
        imageUrl:
            "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/aba-nigeria/400x250/aba-nigeria-temple-lds-273999-wallpaper.jpg"
    },
    {
        templeName: "Manti Utah",
        location: "Manti, Utah, United States",
        dedicated: "1888, May, 21",
        area: 74792,
        imageUrl:
            "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/manti-utah/400x250/manti-temple-768192-wallpaper.jpg"
    },
    {
        templeName: "Payson Utah",
        location: "Payson, Utah, United States",
        dedicated: "2015, June, 7",
        area: 96630,
        imageUrl:
            "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/payson-utah/400x225/payson-utah-temple-exterior-1416671-wallpaper.jpg"
    },
    {
        templeName: "Yigo Guam",
        location: "Yigo, Guam",
        dedicated: "2020, May, 2",
        area: 6861,
        imageUrl:
            "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/yigo-guam/400x250/yigo_guam_temple_2.jpg"
    },
    {
        templeName: "Washington D.C.",
        location: "Kensington, Maryland, United States",
        dedicated: "1974, November, 19",
        area: 156558,
        imageUrl:
            "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/washington-dc/400x250/washington_dc_temple-exterior-2.jpeg"
    },
    {
        templeName: "Lima Perú",
        location: "Lima, Perú",
        dedicated: "1986, January, 10",
        area: 9600,
        imageUrl:
            "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/lima-peru/400x250/lima-peru-temple-evening-1075606-wallpaper.jpg"
    },
    {
        templeName: "Mexico City Mexico",
        location: "Mexico City, Mexico",
        dedicated: "1983, December, 2",
        area: 116642,
        imageUrl:
            "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/mexico-city-mexico/400x250/mexico-city-temple-exterior-1518361-wallpaper.jpg"
    },
    // Add more temple objects here...
    {
        templeName: "Abidjan Ivory Coast temple",
        location: "Bonoumin, Cocody, Abidjan",
        dedicated: "2025, May, 25",
        area: 17362,
        imageUrl:
            "https://churchofjesuschristtemples.org/assets/img/temples/abidjan-ivory-coast-temple/abidjan-ivory-coast-temple-1108.jpg"
    },
    {
        templeName: "Accra Ghana Temple",
        location: "57 Independence Ave, North Ridge, P.M.B CT209, Cantonments, Accra",
        dedicated: "2004, january, 11",
        area: 17500,
        imageUrl:
            "https://churchofjesuschristtemples.org/assets/img/temples/accra-ghana-temple/accra-ghana-temple-71208.jpg"
    },
    {
        templeName: "Bountiful Utah Temple",
        location: "640 S Bountiful Blvd ,Bountiful, Utah  84010-1394, United States",
        dedicated: "1995, January, 8-14",
        area: 104000,
        imageUrl:
            "https://churchofjesuschristtemples.org/assets/img/temples/bountiful-utah-temple/bountiful-utah-temple-64939.jpg"
    },

];

function createTempleCard() {
    const container = document.getElementById("temple-card");

    container.innerHTML = "";
    temples.forEach(temple => {

        const templecard = document.createElement("div");
        const templeName = document.createElement("h2");
        const location = document.createElement("p");
        const dedicated = document.createElement("p");
        const area = document.createElement("p");
        const image = document.createElement("img");
        const figure = document.createElement("fugure");

        templeName.textContent = temple.templeName;
        location.innerHTML = `<span>Location: </span>${temple.location}`;
        dedicated.innerHTML = `<span>Dedicated: </span>${temple.dedicated}`;
        area.innerHTML = `<span>Area: </span> ${temple.area} sq ft`;
        image.setAttribute("alt", `${templeName}`);
        image.setAttribute("src", temple.imageUrl);
        image.setAttribute("loading", "lazy");
        image.width = 300;
        image.height = 200;

        templecard.appendChild(templeName);
        templecard.appendChild(location);
        templecard.appendChild(dedicated);
        templecard.appendChild(area);
        figure.appendChild(image);
        templecard.appendChild(figure);
        container.appendChild(templecard);

    });
};
createTempleCard();

const old = document.querySelector("#old");

old.addEventListener("click", () => {

    const oldTemples = temples.filter(temple => {

        const yearBuilt = Number(temple.dedicated.split(",")[0]);

        return yearBuilt < 1900;

    });

    createTempleCard(oldTemples);

});

const newT = document.querySelector("#new");

newT.addEventListener("click", () => {

    createTempleCard(temples.filter(temple => {

        const yearBuilt = Number(temple.dedicated.split(",")[0]);

        return yearBuilt > 2000;

    }));

});

const large = document.querySelector("#large");

newT.addEventListener("click", () => {

    createTempleCard(temples.filter(temple => {

        temple.area > 90000;

    }));

});

const small = document.querySelector("#small");

newT.addEventListener("click", () => {

    createTempleCard(temples.filter(temple => {

        temple.area < 10000;

    }));

});