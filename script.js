
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
