
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
