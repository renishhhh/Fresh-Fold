import React, { useState } from 'react';

const mensWearItems = [
    { name: "Suit/Coat/Jacket", price: 180, category: "Men's Wear" },
    { name: "Top Wear", price: 40, category: "Men's Wear" },
    { name: "Bottom Wear", price: 40, category: "Men's Wear" },
    { name: "Sherwani", price: 300, category: "Men's Wear" },
    { name: "Kurta", price: 150, category: "Men's Wear" },
    { name: "Inners", price: 25, category: "Men's Wear" },
    { name: "Winter Wear", price: 50, category: "Men's Wear" }
];

const womensWearItems = [
    { name: "Top Wear", price: 40, category: "Women's Wear" },
    { name: "Lehenga", price: 40, category: "Women's Wear" },
    { name: "Dupatta", price: 60, category: "Women's Wear" },
    { name: "Shawl", price: 50, category: "Women's Wear" },
    { name: "Winter Wear", price: 100, category: "Women's Wear" },
    { name: "Blazer/Coat", price: 180, category: "Women's Wear" },
    { name: "Bottom Wear", price: 80, category: "Women's Wear" },
    { name: "Saree", price: 50, category: "Women's Wear" }
];

const householdandaccessoriesItems = [
    { name: "Travel Bag", price: 100, category: "Household & Accessories" },
    { name: "Blanket", price: 70, category: "Household & Accessories" },
    { name: "Towel", price: 40, category: "Household & Accessories" },
    { name: "Pillow Case", price: 60, category: "Household & Accessories" },
    { name: "Table Mat", price: 70, category: "Household & Accessories" },
    { name: "Caps/Hats", price: 70, category: "Household & Accessories" }
];



const WearDropdown = ({ items, title, addToBag, isOpen, toggleDropdown }) => (
    <div className="dropdown w-full">
        <h2
            onClick={toggleDropdown}
            className="text-xl font-semibold cursor-pointer bg-indigo-300 p-3 rounded-md flex justify-between items-center"
        >
            {title}
            <i className={`text-xl fa-solid fa-circle-chevron-${isOpen ? 'up' : 'down'}`}></i>
        </h2>
        <ul
            className={`transition-all duration-300 ease-in-out ${isOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0 overflow-hidden'}`}
        >
            {items.map(item => (
                <li key={item.name} className="flex flex-col justify-between items-center py-6 bg-indigo-100 border-2 border-indigo-300">
                    <div className="text-lg p-2 font-semibold">{item.name}</div>
                    <div className="text-gray-600 p-2 text-md">₹{item.price}/piece</div>
                    <button
                        onClick={() => addToBag(item)}
                        className="bg-blue-600 text-white p-2 mr-2 rounded-md font-semibold mt-2"
                    >
                        <i className="fa-solid fa-cart-shopping"></i> Add to Bag
                    </button>
                </li>
            ))}
        </ul>
    </div>
);

const Bag = ({ bagItems, updateItemQuantity, deliveryCharge = 40 }) => {
    const subtotal = bagItems.reduce((total, item) => total + item.price * item.quantity, 0);
    const totalItems = bagItems.reduce((total, item) => total + item.quantity, 0);
    const grandTotal = subtotal + deliveryCharge;

    return (
        <div className="bag-section bg-indigo-100 p-4 rounded-md w-full">
            <h2 className="text-xl font-bold mb-2 text-center">Your Bag</h2>
            <p className="text-center mb-4">Total Items: {totalItems}</p>
            <div className="mt-2 text-lg">
                {bagItems.map((item, index) => (
                    <>
                        <p className="text-gray-500 text-center text-base mb-1">
                            {item.category}
                        </p>
                        <div key={index} className="flex justify-between items-center py-2">
                            <span>{item.name} - ₹{item.price}</span>
                            <div className="flex items-center p-1 border-black border-[1px] rounded-full">
                                <button
                                    onClick={() => updateItemQuantity(item.name, -1)}
                                    className="bg-violet-700 text-white px-2 py-1 rounded-md mx-1 text-sm"
                                >
                                    <i className="fa-solid fa-minus"></i>
                                </button>
                                <span className="p-2 font-semibold">{item.quantity}</span>
                                <button
                                    onClick={() => updateItemQuantity(item.name, 1)}
                                    className="bg-rose-700 text-white px-2 py-1 rounded-md mx-1 text-sm"
                                >
                                    <i className="fa-solid fa-plus"></i>
                                </button>
                            </div>
                        </div>
                        <div className="separate bg-violet-400 w-full h-[2px] mt-2 "></div>
                    </>
                ))}
            </div>
            <p className="p-2 text-lg">Subtotal: ₹{subtotal}</p>
            <p className="p-2 text-lg">Delivery Charge: ₹{deliveryCharge}</p>
            <h3 className="p-2 text-lg">Grand Total: ₹{grandTotal}</h3>
            <button className="bg-emerald-600 text-white ml-32 font-semibold p-3 mt-7 rounded-md">
                Check Out Your Order
            </button>
        </div>
    );
};

const Ironing = () => {
    const [bagItems, setBagItems] = useState([]);
    const [openDropdown, setOpenDropdown] = useState(null);

    const addToBag = (item) => {
        setBagItems(prevItems => {
            const existingItem = prevItems.find(bagItem => bagItem.name === item.name);
            if (existingItem) {
                return prevItems.map(bagItem =>
                    bagItem.name === item.name
                        ? { ...bagItem, quantity: bagItem.quantity + 1 }
                        : bagItem
                );
            } else {
                return [...prevItems, { ...item, quantity: 1, category: item.category }];
            }
        });
    };

    const updateItemQuantity = (itemName, quantityChange) => {
        setBagItems(prevItems =>
            prevItems
                .map(item =>
                    item.name === itemName ? { ...item, quantity: item.quantity + quantityChange } : item
                )
                .filter(item => item.quantity > 0)
        );
    };

    return (
        <>
            <h1 className="text-3xl ml-5 text-sky-600 font-semibold p-7">Ironing Services</h1>
            <div className="flex justify-center gap-5 p-6 w-full">
                <div className="w-1/5"></div>

                <div className="w-2/5 flex flex-col gap-5">
                    <WearDropdown
                        items={mensWearItems}
                        title="Men's Wear"
                        addToBag={addToBag}
                        isOpen={openDropdown === 'mens'}
                        toggleDropdown={() => setOpenDropdown(openDropdown === 'mens' ? null : 'mens')}
                    />
                    {openDropdown !== 'mens' && (
                        <WearDropdown
                            items={womensWearItems}
                            title="Women's Wear"
                            addToBag={addToBag}
                            isOpen={openDropdown === 'womens'}
                            toggleDropdown={() => setOpenDropdown(openDropdown === 'womens' ? null : 'womens')}
                        />
                    )}
                    {openDropdown !== 'mens' && openDropdown !== 'womens' && (
                        <WearDropdown
                            items={householdandaccessoriesItems}
                            title="Household & Accessories"
                            addToBag={addToBag}
                            isOpen={openDropdown === 'household'}
                            toggleDropdown={() => setOpenDropdown(openDropdown === 'household' ? null : 'household')}
                        />
                    )}
                   
                </div>

                <div className="w-2/5">
                    <Bag bagItems={bagItems} updateItemQuantity={updateItemQuantity} />
                </div>

                <div className="w-1/5"></div>
            </div>
        </>
    );
};

export default Ironing;
