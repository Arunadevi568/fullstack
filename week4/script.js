// Select the container
const container = document.getElementById("container");

// Style the container
container.style.width = "500px";
container.style.margin = "30px auto";
container.style.padding = "20px";
container.style.border = "2px solid navy";
container.style.borderRadius = "10px";
container.style.backgroundColor = "#f0f8ff";
container.style.textAlign = "center";

// Create Heading
const heading = document.createElement("h1");
heading.textContent = "Travel Booking System";

// Create Paragraph
const para = document.createElement("p");
para.textContent = "Book your dream destination!";

// Create Image
const image = document.createElement("img");
image.src = "https://picsum.photos/300/180";
image.alt = "Travel Image";
image.style.borderRadius = "10px";

// Create Button
const button = document.createElement("button");
button.textContent = "Show Destinations";
button.style.padding = "10px 20px";
button.style.marginTop = "20px";
button.style.cursor = "pointer";

// Create Empty List
const list = document.createElement("ul");
list.style.textAlign = "left";

// Button Click Event
button.addEventListener("click", function () {

    // Clear previous items
    list.innerHTML = "";

    // Destination Array
    const places = [
        "Goa",
        "Manali",
        "Ooty",
        "Kashmir",
        "Jaipur",
        "Mumbai",
        "kanyakumari",
        "banglore",
        "visakhapatnam"
    ];

    // Create List Items
    places.forEach(function(place) {

        const item = document.createElement("li");
        item.textContent = place;

        list.appendChild(item);

    });

    // Change Button Text and Style
    button.textContent = "Destinations Loaded";
    button.style.backgroundColor = "green";
    button.style.color = "white";

});
