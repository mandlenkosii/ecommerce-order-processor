
// CHALLENGE 0: PROJECT SETUP AND ORDER DATASET
// Built-in concepts: Objects and Arrays


// Each object represents one customer order.
// Messy names, emails and different dates are included for testing.

let orders = [
    {
        orderId: "ORD-0001",
        customerName: "  john smith ",
        email: "JOHN.SMITH@example.com",
        product: "Laptop",
        category: "Electronics",
        price: 12500.99,
        orderDate: "2026-10-20"
    },
    {
        orderId: "ORD-0002",
        customerName: "MARY jones",
        email: "mary.jones@example.com",
        product: "Office Chair",
        category: "Furniture",
        price: 2499.50,
        orderDate: "2026-10-18"
    },
    {
        orderId: "ORD-0003",
        customerName: " peter  brown ",
        email: "peter.brown@example.com",
        product: "Headphones",
        category: "Electronics",
        price: 899.99,
        orderDate: "2026-10-15"
    },
    {
        orderId: "ORD-0004",
        customerName: "SARAH WILLIAMS",
        email: "sarah.williams@example.com",
        product: "Desk",
        category: "Furniture",
        price: 3500.75,
        orderDate: "2026-10-10"
    },
    {
        orderId: "ORD-0005",
        customerName: " david  lee ",
        email: "david.lee.example.com",
        product: "Smartphone",
        category: "Electronics",
        price: 9999.99,
        orderDate: "2026-09-30"
    },
    {
        orderId: "ORD-0006",
        customerName: "LUCY green",
        email: "lucy.green@example.com",
        product: "Running Shoes",
        category: "Clothing",
        price: 1299.95,
        orderDate: "2026-09-20"
    },
    {
        orderId: "ORD-0007",
        customerName: " thabo molefe",
        email: "thabo.molefe@example.com",
        product: "Backpack",
        category: "Accessories",
        price: 599.99,
        orderDate: "2026-08-25"
    },
    {
        orderId: "ORD-0008",
        customerName: "NOMSA khumalo ",
        email: "nomsa.khumalo@example.com",
        product: "Monitor",
        category: "Electronics",
        price: 2799.49,
        orderDate: "2026-07-15"
    },
    {
        orderId: "ORD-0009",
        customerName: " Sipho Dlamini ",
        email: "sipho.dlamini@example.com",
        product: "Coffee Maker",
        category: "Appliances",
        price: 749.90,
        orderDate: "2026-06-10"
    },
    {
        orderId: "ORD-0010",
        customerName: "AMY  DAVIS",
        email: "amy.davis@example.com",
        product: "Tablet",
        category: "Electronics",
        price: 4599.00,
        orderDate: "2026-05-01"
    }
];

// This array stores the orders currently displayed.
// Initially, all orders are displayed.
let displayedOrders = [...orders];


//
// CHALLENGE 1: CLEAN CUSTOMER DATA
// Built-in concept: String


// Remove extra spaces and capitalise each word in a name.
function cleanName(name) {
    return name
        .trim()
        .toLowerCase()
        .split(/\s+/)
        .map(word => word.charAt(0).toUpperCase() + word.slice(1))
        .join(" ");
}

// Remove extra spaces and make emails lowercase.
function cleanEmail(email) {
    return email.trim().toLowerCase();
}

// CHALLENGE 2: CALCULATE PRICES
// Built-in concepts: Number and Math

// Format prices as South African rand.
function formatMoney(amount) {
    return "R" + Number(amount).toLocaleString("en-ZA", {
        minimumFractionDigits: 2,
        maximumFractionDigits: 2
    });
}

// Calculate the total value of all orders.
function calculateTotal() {
    return orders.reduce((total, order) => {
        return total + Number(order.price);
    }, 0);
}

// Calculate the average order price.
function calculateAverage() {
    if (orders.length === 0) {
        return 0;
    }

    return calculateTotal() / orders.length;
}

// Find the highest-priced order.
function getHighestPrice() {
    if (orders.length === 0) {
        return 0;
    }

    return Math.max(...orders.map(order => Number(order.price)));
}

// Find the lowest-priced order.
function getLowestPrice() {
    if (orders.length === 0) {
        return 0;
    }

    return Math.min(...orders.map(order => Number(order.price)));
}

// Calculate 15% VAT for an order.
function calculateVAT(price) {
    return Number(price) * 0.15;
}

// CHALLENGE 3: WORK WITH ORDER DATES
// Built-in concept: Date

// Convert a raw date into a readable date.
function formatDate(dateString) {
    const date = new Date(dateString + "T00:00:00");

    if (Number.isNaN(date.getTime())) {
        return "Invalid date";
    }

    return date.toLocaleDateString("en-ZA", {
        day: "numeric",
        month: "long",
        year: "numeric"
    });
}

// Check whether an order was placed in the last 30 days.
function isRecent(dateString) {
    const orderDate = new Date(dateString + "T00:00:00");
    const today = new Date();

    if (Number.isNaN(orderDate.getTime())) {
        return false;
    }

    // Remove the time so the comparison is based on calendar days.
    today.setHours(0, 0, 0, 0);

    const daysAgo = (today.getTime() - orderDate.getTime())
        / (1000 * 60 * 60 * 24);

    return daysAgo >= 0 && daysAgo <= 30;
}

// Calculate how many days have passed since an order.
function daysSince(dateString) {
    const orderDate = new Date(dateString + "T00:00:00");
    const today = new Date();

    if (Number.isNaN(orderDate.getTime())) {
        return null;
    }

    today.setHours(0, 0, 0, 0);

    return Math.floor(
        (today.getTime() - orderDate.getTime()) / (1000 * 60 * 60 * 24)
    );
}

// CHALLENGE 4: SEARCH, FILTER AND ANALYSE ORDERS
// Built-in concept: Array methods

// Find an order by its ID or customer name.
function findOrder(searchText) {
    const search = searchText.trim().toLowerCase();

    return orders.find(order =>
        order.orderId.toLowerCase().includes(search) ||
        cleanName(order.customerName).toLowerCase().includes(search)
    );
}

// Filter orders by category and price range.
function filterOrders() {
    const search = document.getElementById("searchInput")
        .value.trim().toLowerCase();

    const category = document.getElementById("categoryFilter").value;

    const minValue = document.getElementById("minPrice").value;
    const maxValue = document.getElementById("maxPrice").value;

    const minPrice = minValue === "" ? 0 : Number(minValue);
    const maxPrice = maxValue === "" ? Infinity : Number(maxValue);

    // filter() keeps only orders that match all selected conditions.
    displayedOrders = orders.filter(order => {
        const matchesSearch =
            order.orderId.toLowerCase().includes(search) ||
            cleanName(order.customerName).toLowerCase().includes(search) ||
            order.product.toLowerCase().includes(search);

        const matchesCategory =
            category === "" || order.category === category;

        const matchesMinPrice = Number(order.price) >= minPrice;
        const matchesMaxPrice = Number(order.price) <= maxPrice;

        return matchesSearch &&
            matchesCategory &&
            matchesMinPrice &&
            matchesMaxPrice;
    });

    // some() checks if at least one order costs more than R1,000.
    const hasExpensiveOrder = displayedOrders.some(order =>
        Number(order.price) > 1000
    );

    // every() checks whether every displayed order has a valid price.
    const allPricesValid = displayedOrders.every(order =>
        Number.isFinite(Number(order.price)) && Number(order.price) >= 0
    );

    // map() creates a list of product names and prices including VAT.
    const pricesWithVAT = displayedOrders.map(order => {
        return order.product + ": " +
            formatMoney(Number(order.price) + calculateVAT(order.price));
    });

    // reduce() calculates the total for the filtered orders.
    const filteredTotal = displayedOrders.reduce((total, order) => {
        return total + Number(order.price);
    }, 0);

    document.getElementById("analysisMessage").textContent =
        "Filtered total: " + formatMoney(filteredTotal) +
        " | Any order over R1,000: " + (hasExpensiveOrder ? "Yes" : "No") +
        " | All prices valid: " + (allPricesValid ? "Yes" : "No") +
        " | Orders shown: " + displayedOrders.length;

    renderOrders();

    // The VAT list is also available in the browser console for testing.
    console.log("Filtered products with VAT:", pricesWithVAT);
}

// Show all orders again.
function resetFilters() {
    document.getElementById("searchInput").value = "";
    document.getElementById("categoryFilter").value = "";
    document.getElementById("minPrice").value = "";
    document.getElementById("maxPrice").value = "";

    displayedOrders = [...orders];

    document.getElementById("analysisMessage").textContent =
        "Showing all orders.";

    renderOrders();
}

// Sort the orders from newest to oldest.
function sortNewestFirst() {
    displayedOrders.sort((a, b) => {
        return new Date(b.orderDate) - new Date(a.orderDate);
    });

    renderOrders();
}

// CHALLENGE 5: UNIQUE CATEGORIES
// Built-in concept: Set

// Set automatically removes duplicate category names.
function getUniqueCategories() {
    return new Set(orders.map(order => order.category));
}

// Display categories and populate the category dropdown.
function renderCategories() {
    const categories = getUniqueCategories();
    const categoriesList = document.getElementById("categoriesList");
    const categoryFilter = document.getElementById("categoryFilter");

    categoriesList.innerHTML = "";

    categories.forEach(category => {
        const tag = document.createElement("span");

        tag.className = "bg-blue-100 text-blue-800 px-3 py-2 rounded";
        tag.textContent = category;

        categoriesList.appendChild(tag);
    });

    // Preserve the current selection if the category still exists.
    const previousSelection = categoryFilter.value;

    categoryFilter.innerHTML = '<option value="">All categories</option>';

    categories.forEach(category => {
        const option = document.createElement("option");
        option.value = category;
        option.textContent = category;

        categoryFilter.appendChild(option);
    });

    if (categories.has(previousSelection)) {
        categoryFilter.value = previousSelection;
    }
}

// CHALLENGE 6: PRODUCT LOOKUP
// Built-in concept: Map

// Create a Map where the product name is the key.
function getProductMap() {
    const productMap = new Map();

    orders.forEach(order => {
        productMap.set(order.product.toLowerCase(), {
            product: order.product,
            price: Number(order.price),
            category: order.category
        });
    });

    return productMap;
}

// Search for a product and show its details.
function lookupProduct() {
    const productName = document.getElementById("productInput")
        .value.trim().toLowerCase();

    const productMap = getProductMap();
    const result = document.getElementById("productResult");

    if (productName === "") {
        result.textContent = "Please enter a product name.";
        result.className = "mt-4 text-orange-700";
        return;
    }

    // has() checks if the product exists before get() retrieves it.
    if (productMap.has(productName)) {
        const product = productMap.get(productName);

        result.textContent =
            "Product: " + product.product +
            " | Category: " + product.category +
            " | Price: " + formatMoney(product.price);

        result.className = "mt-4 text-green-700 font-semibold";
    } else {
        result.textContent = "Product not found. Please try another name.";
        result.className = "mt-4 text-red-700";
    }

    console.log("Number of products in the Map:", productMap.size);
}

// CHALLENGE 7: EXPORT AND IMPORT ORDERS
// Built-in concept: JSON

// Convert the order array into a JSON string.
function exportOrders() {
    const jsonText = JSON.stringify(orders, null, 2);

    document.getElementById("jsonOutput").value = jsonText;
    document.getElementById("jsonMessage").textContent =
        "Orders converted to JSON successfully.";
    document.getElementById("jsonMessage").className =
        "mt-3 text-green-700";
}

// Download the orders as a JSON file.
function downloadOrders() {
    const jsonText = JSON.stringify(orders, null, 2);
    const file = new Blob([jsonText], { type: "application/json" });
    const downloadURL = URL.createObjectURL(file);

    const link = document.createElement("a");
    link.href = downloadURL;
    link.download = "orders.json";
    link.click();

    URL.revokeObjectURL(downloadURL);
}

// Import new orders from JSON text.
function importOrders() {
    const jsonText = document.getElementById("jsonInput").value.trim();
    const message = document.getElementById("jsonMessage");

    if (jsonText === "") {
        message.textContent = "Please paste JSON data before importing.";
        message.className = "mt-3 text-red-700";
        return;
    }

    try {
        // JSON.parse() converts JSON text back into JavaScript data.
        const importedOrders = JSON.parse(jsonText);

        if (!Array.isArray(importedOrders)) {
            throw new Error("The JSON must contain an array of orders.");
        }

        // Check that every imported order has the required fields.
        const requiredFields = [
            "orderId", "customerName", "email",
            "product", "category", "price", "orderDate"
        ];

        const validOrders = importedOrders.every(order =>
            order &&
            typeof order === "object" &&
            !Array.isArray(order) &&
            requiredFields.every(field =>
                Object.prototype.hasOwnProperty.call(order, field)
            ) &&
            typeof order.orderId === "string" &&
            typeof order.customerName === "string" &&
            typeof order.email === "string" &&
            typeof order.product === "string" &&
            typeof order.category === "string" &&
            Number.isFinite(Number(order.price)) &&
            Number(order.price) >= 0 &&
            typeof order.orderDate === "string" &&
            !Number.isNaN(new Date(order.orderDate).getTime())
        );

        if (!validOrders) {
            throw new Error("One or more orders have missing or invalid fields.");
        }

        // Prevent duplicate order IDs.
        const existingIds = new Set(orders.map(order => order.orderId));
        const importedIds = new Set();

        for (const order of importedOrders) {
            if (existingIds.has(order.orderId) ||
                importedIds.has(order.orderId)) {
                throw new Error("Duplicate order ID found: " + order.orderId);
            }

            importedIds.add(order.orderId);
        }

        // Add the imported orders to the existing dataset.
        orders = [...orders, ...importedOrders];
        displayedOrders = [...orders];

        renderAll();

        message.textContent =
            importedOrders.length + " order(s) imported successfully.";
        message.className = "mt-3 text-green-700";

    } catch (error) {
        // Show a helpful message instead of crashing the application.
        message.textContent = "Import failed: " + error.message;
        message.className = "mt-3 text-red-700";
    }
}
