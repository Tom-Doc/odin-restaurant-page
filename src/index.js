// Content Container
const content = document.getElementById("content");

//Website header
const titleHeader = document.createElement("header");
titleHeader.textContent = "Welcome to Bar Lynn";
titleHeader.classList.add("header");
content.appendChild(titleHeader);

//Tab Header
//Website header
const tabHeaders = document.createElement("header");
tabHeaders.classList.add("header");
content.appendChild(tabHeaders);

// Tab Content
const tabContent = document.createElement("div");
tabContent.classList.add("tab-content");
content.appendChild(tabContent); // Append tabContent to the content element

// Create Tabs
const tabContainer = document.createElement("div");
tabContainer.classList.add("tab-container");
//Labels for tabs
const tabLabels = ["Home", "Menu", "Contact"];

for (let i = 0; i < tabLabels.length; i++) {
  const tab = document.createElement("div");
  //Set the tab text based on the array
  tab.textContent = tabLabels[i];
  tab.classList.add("tab");
  tabContainer.appendChild(tab);
}
tabHeaders.appendChild(tabContainer);

// Variable to track the currently active tab
let currentTab = "Home";

function renderHomeTab() {
  // Home Page Image
  const newImage = document.createElement("img");
  newImage.src = "/src/images/PizzaBackground.jpg";
  newImage.classList.add("Image");

  // Bottom Text
  const footerContent = document.createElement("div");
  footerContent.classList.add("footer-container");

  // Labels for the "Home" tab
  const footerLabels = [
    "Handcrafted Artisanal Pies",
    "Sommelier-Selected Fine Wine Collection",
    "Elegant Dining Atmosphere",
  ];

  for (let i = 0; i < footerLabels.length; i++) {
    // Iterate through footerLabels
    const footer = document.createElement("div");
    footer.textContent = footerLabels[i];
    footer.classList.add("footer");
    footerContent.appendChild(footer);
  }

  // Append the image and footer content to the tab content container
  tabContent.appendChild(newImage);
  tabContent.appendChild(footerContent); // Move this line here
}

function renderMenuTab() {
  // Clear the existing content in the tab content container
  tabContent.innerHTML = "";

  // Create a menu header
  const menuHeader = document.createElement("div"); // Use "div" instead of "menu-header"
  menuHeader.textContent = "Our Menu";
  menuHeader.classList.add("menu-header");
  tabContent.appendChild(menuHeader);
}

function renderContactTab() {
  // Clear the existing content in the tab content container
  tabContent.innerHTML = "";

  // Create a contact header
  const contactHeader = document.createElement("div"); // Use "div" instead of "contact-header"
  contactHeader.textContent = "Contact Us";
  contactHeader.classList.add("contact-header");
  tabContent.appendChild(contactHeader);
}

// ... Your previous code for creating elements and defining functions ...

// Function to set up tab event listeners
function setupTabEventListeners() {
  const tabs = document.querySelectorAll(".tab");
  tabs.forEach(function (tab) {
    tab.addEventListener("click", function () {
      if (tab.textContent === "Home") {
        renderHomeTab();
      } else if (tab.textContent === "Menu") {
        renderMenuTab();
      } else if (tab.textContent === "Contact") {
        renderContactTab();
      }
    });
  });
}

// Call the function to set up the event listeners after creating the tabs
setupTabEventListeners();
