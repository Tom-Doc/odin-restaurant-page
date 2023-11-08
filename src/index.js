// Content Container
const content = document.getElementById("content");

//Website header
const titleHeader = document.createElement("header");
titleHeader.textContent = "Welcome to Bar Lynn";
titleHeader.classList.add("header");
content.appendChild(titleHeader);

//Tab Header
const tabHeaders = document.createElement("div");
tabHeaders.classList.add("tab-header");
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
  tabContent.innerHTML = "";
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

  // Footer Icons
  const footerIconContainer = document.createElement("div");
  footerIconContainer.classList.add("footer-icon-container");

  const iconSources = [
    "/src/images/footer-icons/pizza.png",
    "/src/images/footer-icons/wine-bottle.png",
    "/src/images/footer-icons/dinner-table.png",
  ];

  for (let i = 0; i < iconSources.length; i++) {
    const icon = document.createElement("img");
    icon.src = iconSources[i];
    icon.classList.add("footer-icons");
    footerIconContainer.appendChild(icon);
  }

  tabContent.appendChild(newImage);
  tabContent.appendChild(footerContent);
  tabContent.appendChild(footerIconContainer);
}

function renderMenuTab() {
  // Clear the existing content in the tab content container
  tabContent.innerHTML = "";

  // Create a menu header
  const menuHeader = document.createElement("div");
  menuHeader.textContent = "Our Pizzas";
  menuHeader.classList.add("menu-header");
  tabContent.appendChild(menuHeader);

  //Menu Pizza Image
  const menuPizzaImg = document.createElement("img");
  menuPizzaImg.src = "/src/images/menu-images/menu-pizza.jpg";
  menuPizzaImg.classList.add("menu-pizza-image");

  //Menu Items
  const menuItem1 = document.createElement("div");
  menuItem1.textContent = "Menu Item 1";
  menuItem1.classList.add("menu-item-one");
  tabContent.appendChild(menuItem1);

  const menuItem1Text = document.createElement("div");
  menuItem1Text.textContent =
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam magna turpis, varius nec justo ut, sodales tincidunt erat.";
  menuItem1Text.classList.add("menu-item-one-text");
  tabContent.appendChild(menuItem1Text);

  const menuItem2 = document.createElement("div");
  menuItem2.textContent = "Menu Item 2";
  menuItem2.classList.add("menu-item-two");
  tabContent.appendChild(menuItem2);

  const menuItem2Text = document.createElement("div");
  menuItem2Text.textContent =
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam magna turpis, varius nec justo ut, sodales tincidunt erat.";
  menuItem2Text.classList.add("menu-item-two-text");
  tabContent.appendChild(menuItem2Text);

  const menuItem3 = document.createElement("div");
  menuItem3.textContent = "Menu Item 3";
  menuItem3.classList.add("menu-item-three");
  tabContent.appendChild(menuItem3);

  const menuItem3Text = document.createElement("div");
  menuItem3Text.textContent =
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam magna turpis, varius nec justo ut, sodales tincidunt erat.";
  menuItem3Text.classList.add("menu-item-three-text");
  tabContent.appendChild(menuItem3Text);

  const menuItem4 = document.createElement("div");
  menuItem4.textContent = "Menu Item 4";
  menuItem4.classList.add("menu-item-four");
  tabContent.appendChild(menuItem4);

  const menuItem4Text = document.createElement("div");
  menuItem4Text.textContent =
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam magna turpis, varius nec justo ut, sodales tincidunt erat.";
  menuItem4Text.classList.add("menu-item-four-text");
  tabContent.appendChild(menuItem4Text);

  const menuItem5 = document.createElement("div");
  menuItem5.textContent = "Menu Item 5";
  menuItem5.classList.add("menu-item-five");
  tabContent.appendChild(menuItem5);

  const menuItem5Text = document.createElement("div");
  menuItem5Text.textContent =
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam magna turpis, varius nec justo ut, sodales tincidunt erat.";
  menuItem5Text.classList.add("menu-item-five-text");
  tabContent.appendChild(menuItem5Text);

  const menuItem6 = document.createElement("div");
  menuItem6.textContent = "Menu Item 6";
  menuItem6.classList.add("menu-item-six");
  tabContent.appendChild(menuItem6);

  const menuItem6Text = document.createElement("div");
  menuItem6Text.textContent =
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam magna turpis, varius nec justo ut, sodales tincidunt erat.";
  menuItem6Text.classList.add("menu-item-six-text");
  tabContent.appendChild(menuItem6Text);

  //Sub menu header
  const menuSubHeader = document.createElement("div");
  menuSubHeader.textContent = "Our Wines";
  menuSubHeader.classList.add("menu-sub-header");
  tabContent.appendChild(menuSubHeader);

  // Menu Wine Image
  const menuWineImg = document.createElement("img");
  menuWineImg.src = "/src/images/menu-images/menu-wine.jpg";
  menuWineImg.classList.add("menu-wine-image");

  // Wine List
  const wineItem1 = document.createElement("div");
  wineItem1.textContent = "Wine Item 1";
  wineItem1.classList.add("wine-item-one");
  tabContent.appendChild(wineItem1);

  const wineItem2 = document.createElement("div");
  wineItem2.textContent = "Wine Item 2";
  wineItem2.classList.add("wine-item-two");
  tabContent.appendChild(wineItem2);

  const wineItem3 = document.createElement("div");
  wineItem3.textContent = "Wine Item 3";
  wineItem3.classList.add("wine-item-three");
  tabContent.appendChild(wineItem3);

  const wineItem4 = document.createElement("div");
  wineItem4.textContent = "Wine Item 4";
  wineItem4.classList.add("wine-item-four");
  tabContent.appendChild(wineItem4);

  const wineItem5 = document.createElement("div");
  wineItem5.textContent = "Wine Item 5";
  wineItem5.classList.add("wine-item-five");
  tabContent.appendChild(wineItem5);

  const wineItem6 = document.createElement("div");
  wineItem6.textContent = "Wine Item 6";
  wineItem6.classList.add("wine-item-six");
  tabContent.appendChild(wineItem6);

  //Wine List Text
  const wineItem1Text = document.createElement("div");
  wineItem1Text.textContent =
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam magna turpis, varius nec justo ut, sodales tincidunt erat.";
  wineItem1Text.classList.add("wine-item-one-text");
  tabContent.appendChild(wineItem1Text);

  const wineItem2Text = document.createElement("div");
  wineItem2Text.textContent =
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam magna turpis, varius nec justo ut, sodales tincidunt erat.";
  wineItem2Text.classList.add("wine-item-two-text");
  tabContent.appendChild(wineItem2Text);

  const wineItem3Text = document.createElement("div");
  wineItem3Text.textContent =
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam magna turpis, varius nec justo ut, sodales tincidunt erat.";
  wineItem3Text.classList.add("wine-item-three-text");
  tabContent.appendChild(wineItem3Text);

  const wineItem4Text = document.createElement("div");
  wineItem4Text.textContent =
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam magna turpis, varius nec justo ut, sodales tincidunt erat.";
  wineItem4Text.classList.add("wine-item-four-text");
  tabContent.appendChild(wineItem4Text);

  const wineItem5Text = document.createElement("div");
  wineItem5Text.textContent =
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam magna turpis, varius nec justo ut, sodales tincidunt erat.";
  wineItem5Text.classList.add("wine-item-five-text");
  tabContent.appendChild(wineItem5Text);

  const wineItem6Text = document.createElement("div");
  wineItem6Text.textContent =
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam magna turpis, varius nec justo ut, sodales tincidunt erat.";
  wineItem6Text.classList.add("wine-item-six-text");
  tabContent.appendChild(wineItem6Text);

  tabContent.appendChild(menuPizzaImg);
  tabContent.appendChild(menuWineImg);
}

function renderContactTab() {
  // Clear the existing content in the tab content container
  tabContent.innerHTML = "";

  // Create a contact header
  const contactHeader = document.createElement("div");
  contactHeader.textContent = "Contact Us";
  contactHeader.classList.add("contact-header");
  tabContent.appendChild(contactHeader);
}

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
// Call function so that Home tab always opens first
renderHomeTab();
