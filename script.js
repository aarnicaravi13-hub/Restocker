// Find the main HTML elements
const addItemButton = document.getElementById("add-item");
const addForm = document.getElementById("add-form");
const itemNameInput = document.getElementById("Item-name");
const lastPurchasedInput = document.getElementById("Last-purchased");
const lifespanInput = document.getElementById("Usually-lasts");
const reminderInput = document.getElementById("Reminds-me-before");

// Find the area where supply cards will appear
const suppliesContainer = document.querySelector(".supply-card")?.parentElement;

// Hide the form when the page first opens
addForm.style.display = "none";

// Show the form when Add Item is clicked
addItemButton.addEventListener("click", () => {
    addForm.style.display = "flex";
});

// Handle form submission
addForm.addEventListener("submit", (event) => {
    event.preventDefault();

    // Read the values entered by the user
    const itemName = itemNameInput.value.trim();
    const lastPurchased = lastPurchasedInput.value;
    const lifespan = Number(lifespanInput.value);
    const reminderDays = Number(reminderInput.value);

    // Check whether the inputs are valid
    if (!itemName || !lastPurchased || lifespan <= 0 ||
        reminderDays < 0 || reminderInput.value === "") {
        alert("Please enter valid details for your supply.");
        return;
    }

    // Display the values in the browser console for testing
    console.log({
        itemName,
        lastPurchased,
        lifespan,
        reminderDays
    });
});
