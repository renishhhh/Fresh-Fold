const mongoose = require("mongoose");

mongoose.connect("mongodb://localhost:27017/freshfold", { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => console.log("Connected to MongoDB"))
    .catch((err) => console.error("Connection failed", err));

// Define Customer Schema
const customersSchema = new mongoose.Schema({
    f_name: String,
    l_name: String,
    mob_no: String,
    email: String,
    address: String
});

// Trigger 1: InsertOne Trigger for Customer
customersSchema.post("save", function(doc) {
    console.log("New customer added:", doc);
    // Perform any additional actions here, like logging or sending notifications
});

// Trigger 4: UpdateOne Trigger for Customer
customersSchema.post("updateOne", async function() {
    const filter = this.getFilter(); // Gets the filter used in the update query
    const updatedDoc = await this.model.findOne(filter); // Retrieves the updated document

    console.log("Customer details updated:", updatedDoc);

    // Additional actions, such as logging the update or sending notifications, can be added here
});

const customers = mongoose.model("Customer", customersSchema);

// Define OrderItem Schema
const orderItemSchema = new mongoose.Schema({
    order_id: mongoose.Schema.Types.ObjectId, // Reference to the Orders collection
    cloth_type: [String],
    service: [String], // e.g., "iron", "iron_wash"
    quantity: [Number],
    cost: Number
});

// Trigger 2: InsertOne Trigger for OrderItem
orderItemSchema.post("save", function(doc) {
    console.log("New order placed:", doc);
    // Additional actions like calculating the total cost or sending order confirmation can be done here
});

const OrderItem = mongoose.model("OrderItem", orderItemSchema);

// Define Prices Schema
const pricesSchema = new mongoose.Schema({
    cloth_type: String,
    iron: Number, // Cost for ironing
    iron_wash: Number // Cost for washing and ironing
});

// Trigger 3: UpdateOne Trigger for Prices
pricesSchema.post("updateOne", function(doc) {
    console.log("Prices updated for cloth type:", doc);
    // Additional actions like notifying services of the price update can be done here
});

const Prices = mongoose.model("Prices", pricesSchema);

// Function to Add New Customer
async function addNewCustomer(f_name, l_name, mob_no, email, address) {
    const newCustomer = new Customer({ f_name, l_name, mob_no, email, address });
    await newCustomer.save();
    console.log("Customer added successfully.");
}

// Function to Place an Order
async function placeOrder(order_id, cloth_type, service, quantity, cost) {
    const newOrder = new OrderItem({ order_id, cloth_type, service, quantity, cost });
    await newOrder.save();
    console.log("Order placed successfully.");
}

// Function to Update Prices
async function updatePrices(cloth_type, iron, iron_wash) {
    await Prices.updateOne({ cloth_type }, { iron, iron_wash });
    console.log("Prices updated successfully.");
}

// Example usage