```javascript
// Find the main HTML elements
const addItemButton = document.getElementById("add-item");
const addForm = document.getElementById("add-form");

const itemNameInput = document.getElementById("Item-name");
const lastPurchasedInput = document.getElementById("Last-purchased");
const lifespanInput = document.getElementById("Usually-lasts");
const reminderInput = document.getElementById("Reminds-me-before");

// Find the area where supply cards will appear
const suppliesContainer = document.getElementById("supplies-container");

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

    // Validate the inputs
    if (
        !itemName ||
        !lastPurchased ||
        lifespan <= 0 ||
        reminderDays < 0 ||
        reminderInput.value === ""
    ) {
        alert("Please enter valid details for your supply.");
        return;
    }

    // Create a new supply card
    const card = document.createElement("div");
    card.classList.add("supply-card");

    // Add the supply details to the card
    const itemNameElement = document.createElement("p");
    itemNameElement.classList.add("item-name");
    itemNameElement.textContent = itemName;

    const purchaseDateElement = document.createElement("div");
    purchaseDateElement.textContent = `Last purchased: ${lastPurchased}`;

    const lifespanElement = document.createElement("div");
    lifespanElement.textContent = `Usually lasts: ${lifespan} days`;

    const reminderElement = document.createElement("div");
    reminderElement.textContent = `Remind me: ${reminderDays} days before`;

    const statusElement = document.createElement("div");
    statusElement.textContent = "Status: Added";

    // Put the details inside the card
    card.append(
        itemNameElement,
        purchaseDateElement,
        lifespanElement,
        reminderElement,
        statusElement
    );

    // Display the card on the webpage
    suppliesContainer.appendChild(card);

    // Clear the form after submission
    addForm.reset();

    // Hide the form after adding the item
    addForm.style.display = "none";
});
```
