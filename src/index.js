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

  //Menu Item Headers
  const menuItem1 = document.createElement("div");
  menuItem1.textContent = "Truffle Delight - $19";
  menuItem1.classList.add("menu-item-one");
  tabContent.appendChild(menuItem1);

  const menuItem2 = document.createElement("div");
  menuItem2.textContent = "Mediterranean Fusion - $18";
  menuItem2.classList.add("menu-item-two");
  tabContent.appendChild(menuItem2);

  const menuItem3 = document.createElement("div");
  menuItem3.textContent = "Fig & Goat Cheese Elegance - $20";
  menuItem3.classList.add("menu-item-three");
  tabContent.appendChild(menuItem3);

  const menuItem4 = document.createElement("div");
  menuItem4.textContent = "Pesto Prawn Perfection - $24";
  menuItem4.classList.add("menu-item-four");
  tabContent.appendChild(menuItem4);

  const menuItem5 = document.createElement("div");
  menuItem5.textContent = "Caprese Bianca - $17";
  menuItem5.classList.add("menu-item-five");
  tabContent.appendChild(menuItem5);

  const menuItem6 = document.createElement("div");
  menuItem6.textContent = "Prosciutto & Pear Elegance";
  menuItem6.classList.add("menu-item-six");
  tabContent.appendChild(menuItem6);

  //Menu Item Text
  const menuItem1Text = document.createElement("div");
  menuItem1Text.textContent =
    "A truffle-infused white sauce, wild mushrooms, prosciutto, and a blend of mozzarella and fontina cheeses, finished with a drizzle of truffle oil.";
  menuItem1Text.classList.add("menu-item-one-text");
  tabContent.appendChild(menuItem1Text);

  const menuItem2Text = document.createElement("div");
  menuItem2Text.innerHTML =
    "Sun-dried tomatoes, Kalamata olives, artichoke hearts, feta cheese, and fresh oregano on a crispy crust, topped with a balsamic glaze.";
  menuItem2Text.classList.add("menu-item-two-text");
  tabContent.appendChild(menuItem2Text);

  const menuItem3Text = document.createElement("div");
  menuItem3Text.textContent =
    "A sweet and savory delight with fig preserves, goat cheese, caramelized onions, and arugula on a thin crust.";
  menuItem3Text.classList.add("menu-item-three-text");
  tabContent.appendChild(menuItem3Text);

  const menuItem4Text = document.createElement("div");
  menuItem4Text.textContent =
    "Basil pesto base, grilled prawns, roasted cherry tomatoes, and pine nuts, creating a rich and fresh seafood experience.";
  menuItem4Text.classList.add("menu-item-four-text");
  tabContent.appendChild(menuItem4Text);

  const menuItem5Text = document.createElement("div");
  menuItem5Text.textContent =
    "A white pizza with mozzarella, heirloom tomatoes, and basil leaves on a garlic-infused olive oil base, drizzled with balsamic reduction.";
  menuItem5Text.classList.add("menu-item-five-text");
  tabContent.appendChild(menuItem5Text);

  const menuItem6Text = document.createElement("div");
  menuItem6Text.textContent =
    "Thinly sliced prosciutto, caramelized pears, gorgonzola cheese, and a touch of honey for the perfect sweet and savory combination.";
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
  wineItem1.textContent = "Velvet Noir Reserve - $43";
  wineItem1.classList.add("wine-item-one");
  tabContent.appendChild(wineItem1);

  const wineItem2 = document.createElement("div");
  wineItem2.textContent = "Golden Chardonnay Elegance - $39";
  wineItem2.classList.add("wine-item-two");
  tabContent.appendChild(wineItem2);

  const wineItem3 = document.createElement("div");
  wineItem3.textContent = "Rosé Petal Harmony - $35";
  wineItem3.classList.add("wine-item-three");
  tabContent.appendChild(wineItem3);

  const wineItem4 = document.createElement("div");
  wineItem4.textContent = "Sparkling Citrus Symphony - $47";
  wineItem4.classList.add("wine-item-four");
  tabContent.appendChild(wineItem4);

  const wineItem5 = document.createElement("div");
  wineItem5.textContent = "Cabernet Sauvignon Reserve Oak - $50";
  wineItem5.classList.add("wine-item-five");
  tabContent.appendChild(wineItem5);

  const wineItem6 = document.createElement("div");
  wineItem6.textContent = "Sauvignon Blanc Summer Breeze - $37";
  wineItem6.classList.add("wine-item-six");
  tabContent.appendChild(wineItem6);

  //Wine List Text
  const wineItem1Text = document.createElement("div");
  wineItem1Text.textContent =
    "A velvety red blend with notes of dark berries, cocoa, and a hint of spice.";
  wineItem1Text.classList.add("wine-item-one-text");
  tabContent.appendChild(wineItem1Text);

  const wineItem2Text = document.createElement("div");
  wineItem2Text.textContent =
    "An elegant Chardonnay with a golden hue, featuring flavors of ripe pear, vanilla, and a subtle buttery finish.";
  wineItem2Text.classList.add("wine-item-two-text");
  tabContent.appendChild(wineItem2Text);

  const wineItem3Text = document.createElement("div");
  wineItem3Text.textContent =
    " Delicate and refreshing, this Rosé offers a bouquet of rose petals, strawberries, and a touch of citrus.";
  wineItem3Text.classList.add("wine-item-three-text");
  tabContent.appendChild(wineItem3Text);

  const wineItem4Text = document.createElement("div");
  wineItem4Text.textContent =
    "Celebrate with this effervescent blend, showcasing lively citrus notes, green apple, and a crisp, refreshing effervescence.";
  wineItem4Text.classList.add("wine-item-four-text");
  tabContent.appendChild(wineItem4Text);

  const wineItem5Text = document.createElement("div");
  wineItem5Text.textContent =
    "A bold Cabernet Sauvignon with rich blackberry and cassis flavors, enhanced by subtle hints of oak and spice.";
  wineItem5Text.classList.add("wine-item-five-text");
  tabContent.appendChild(wineItem5Text);

  const wineItem6Text = document.createElement("div");
  wineItem6Text.textContent =
    "Experience the essence of summer with this Sauvignon Blanc, offering bright citrus, tropical fruit, and a zesty finish.";
  wineItem6Text.classList.add("wine-item-six-text");
  tabContent.appendChild(wineItem6Text);

  tabContent.appendChild(menuPizzaImg);
  tabContent.appendChild(menuWineImg);
}

function renderContactTab() {
  // Clear the existing content in the tab content container
  tabContent.innerHTML = "";

  //Contact Us Header
  const contactHeader = document.createElement("div");
  contactHeader.textContent = "Contact Us";
  contactHeader.classList.add("contact-header");
  tabContent.appendChild(contactHeader);

  //Contact Us Images
  const contactUsImage = document.createElement("img");
  contactUsImage.src = "/src/images/contact-us-images/contact-us-img.jpg";
  contactUsImage.classList.add("contact-us-image");
  tabContent.appendChild(contactUsImage);

  //Contact Us Sub Headers
  const contactUsSub1 = document.createElement("div");
  contactUsSub1.textContent = "Location";
  contactUsSub1.classList.add("contact-us-location");
  tabContent.appendChild(contactUsSub1);

  const contactUsSub2 = document.createElement("div");
  contactUsSub2.textContent = "Hours";
  contactUsSub2.classList.add("contact-us-hours");
  tabContent.appendChild(contactUsSub2);

  const contactUsSub3 = document.createElement("div");
  contactUsSub3.textContent = "Call Us";
  contactUsSub3.classList.add("contact-us-call");
  tabContent.appendChild(contactUsSub3);

  //Contact Us Sub Header Text Lines
  const contactUsSubText1 = document.createElement("div");
  contactUsSubText1.textContent =
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit.";
  contactUsSubText1.classList.add("contact-us-sub-one");
  tabContent.appendChild(contactUsSubText1);

  const contactUsSubText2 = document.createElement("div");
  contactUsSubText2.textContent =
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit.";
  contactUsSubText2.classList.add("contact-us-sub-two");
  tabContent.appendChild(contactUsSubText2);

  const contactUsSubText3 = document.createElement("div");
  contactUsSubText3.textContent =
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit.";
  contactUsSubText3.classList.add("contact-us-sub-three");
  tabContent.appendChild(contactUsSubText3);
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
