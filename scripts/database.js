const database = {

    locations: [
        {
            id: 1,
            name: 'The Hungry Winged Horse',
            address: '100 Main Street',
            phone: '555-555-5555'
        },
        {
            id: 2,
            name: 'The Hungry Sea Goat',
            address: '123 Corner Street',
            phone: '555-555-5555'
        },
        {
            id: 3,
            name: 'The Hungry Water Bearer',
            address: '500 Capitol Street',
            phone: '555-555-5555'
        }
    ],

    foods: [
        {
            id: 1,
            name: 'Chili Dog',
            price: 5,
            img: './images/HotDawg1.webp',
            desc: 'Starts with our premimum dogs topped with our signature sauce and beans!'
        },
        {
            id: 2,
            name: 'Slaw Dog',
            price: 6,
            img: './images/HotDawg2.webp',
            desc: "A dog topped with Grandma's secret slaw recipe!"
        },
        {
            id: 3,
            name: 'Deluxe Dog',
            price: 7,
            img: './images/HotDawg3.jpg',
            desc: 'A premium dog topped with sauce, onions, and cheese!'
        },
        {
            id: 4,
            name: 'Diablo Dog',
            price: 9,
            img: './images/SpicyDog.jpg',
            desc: 'You want spicy? We have the spicy! Dog covered in a special hot sauce blend, with onions, peppers, and chipotle mayo!'
        },
        {
            id: 5,
            name: 'Double Downer Dog',
            price: 10,
            img: './images/DoubleDog.jpg',
            desc: 'Extra large bun with 2 dogs and all the works!'
        },
        {
            id: 6,
            name: "Purrrfect Dog: Dog's Revenge",
            price: 15,
            img: './images/CatDog.jpg',
            desc: 'Made with real cat meat!'
        },
        {
            id: 7,
            name: 'Flat Dog',
            price: 4,
            img: './images/FlatDog.jpg',
            desc: 'Experimental Dog that in some areas they call a "burger". Flattened down bread with flattened meat put in between with your choice of condiments!'
        },
        {
            id: 8,
            name: 'Better Dog',
            price: 20,
            img: './images/BestDog.jpg',
            desc: 'Think of the best dog you could ever have. This is better!'
        },
        {
            id: 9,
            name: 'Plain Jane',
            price: 9,
            img: './images/PlainDog.jpg',
            desc: 'You want a hotdog Mr. or Mrs. boring... Here ya go.'
        },
        {
            id: 99,
            name: 'None',
            price: 0,
            img: './images/None.jpg',
            desc: ''
        }
    ],

    drinks: [
        {
            id: 1,
            name: 'Water',
            price: 1,
            img: './images/Water.jpg',
            desc: 'Nothing but the best, Fiji Water!'
        },
        {
            id: 2,
            name: 'Sweet Tea',
            price: 3,
            img: './images/SweetTea.jpg',
            desc: 'Bottled Gold Peak Sweet Tea'
        },
        {
            id: 3,
            name: 'Lemonade',
            price: 7,
            img: './images/Lemonade.jpg',
            desc: 'Freshly Squeezed and Served w/ Lemon Slices'
        },
        {
            id: 4,
            name: 'Slushie',
            price: 6,
            img: './images/Slushie.jpg',
            desc: 'Ice Cold Slushie w/ Strawberry, Cherry, or Blueberry Flavoring!'
        },
        {
            id: 5,
            name: 'Orange Juice',
            price: 4,
            img: './images/Orangejuice.jpg',
            desc: 'Freshly Squeezed Orange Juice!'
        },
        {
            id: 6,
            name: 'Rootbeer Float',
            price: 8,
            img: './images/RootbeerFloat.jpg',
            desc: 'Delicious Rootbeer w/ a Scoop of Vanilla Ice Cream!'
        },
        {
            id: 7,
            name: 'Sprite',
            price: 8,
            img: './images/Sprite.jpg',
            desc: 'Delicious Rootbeer w/ a Scoop of Vanilla Ice Cream!'
        },
        {
            id: 99,
            name: 'None',
            price: 0,
            img: './images/None.jpg',
            desc: ''
        }
    ],

    desserts: [
        {
            id: 1,
            name: 'Vanilla Cone',
            price: 3,
            img: './images/VanillaCone.jpg',
            desc: 'A sweet treat for kids or those young at heart'
        },
        {
            id: 2,
            name: 'Chocolate Swirl',
            price: 4,
            img: './images/TwistedCone.jpg',
            desc: 'The perfect blend of chocolate and vanilla'
        },
        {
            id: 3,
            name: 'Hot Fudge Sundae',
            price: 5,
            img: './images/HotFudgeSundae.jpg',
            desc: 'Vanilla ice cream topped with hot fudge, whipped cream and sprinkles'
        },
        {
            id: 4,
            name: 'Clown Ice Cream',
            price: 5,
            img: './images/ClownIceCream.jpg',
            desc: 'Vanilla ice cream decorated with different candies to create a fun design!'
        },
        {
            id: 5,
            name: 'Push-Up',
            price: 3,
            img: './images/PushUps.jpg',
            desc: 'Always Fun w/ an Orange Sherbert Push-Up!'
        },
        {
            id: 6,
            name: 'Fudge Pop',
            price: 2,
            img: './images/FudgePop.jpg',
            desc: 'Chocolatey Delicious Fudge Pop!'
        },
        {
            id: 7,
            name: 'Rocket Pop',
            price: 4,
            img: './images/RocketPop.jpg',
            desc: 'Variety of Flavors & Delcious!'
        },
        {
            id: 99,
            name: 'None',
            price: 0,
            img: './images/None.jpg',
            desc: ''
        }
    ],

    orders: [
        {
            id: 1,
            locationId: 1,
            foodId: 1,
            drinkId: 1,
            dessertId: 1,
            timestamp: 12345346457645
        }
    ],

    foodStock: [
        { id: 1, locationId: 1, foodId: 1, quantity: 10 },
        { id: 2, locationId: 1, foodId: 2, quantity: 10 },
        { id: 3, locationId: 1, foodId: 3, quantity: 10 },
        { id: 4, locationId: 1, foodId: 99, quantity: 1000 },
        { id: 5, locationId: 2, foodId: 4, quantity: 10 },
        { id: 6, locationId: 2, foodId: 5, quantity: 10 },
        { id: 7, locationId: 2, foodId: 6, quantity: 10 },
        { id: 8, locationId: 2, foodId: 99, quantity: 1000 },
        { id: 9, locationId: 3, foodId: 7, quantity: 10 },
        { id: 10, locationId: 3, foodId: 8, quantity: 10 },
        { id: 11, locationId: 3, foodId: 9, quantity: 10 },
        { id: 12, locationId: 3, foodId: 99, quantity: 1000 }

    ],

    drinkStock: [
        { id: 1, locationId: 1, drinkId: 1, quantity: 10 },
        { id: 2, locationId: 1, drinkId: 2, quantity: 10 },
        { id: 3, locationId: 1, drinkId: 3, quantity: 10 },
        { id: 4, locationId: 1, drinkId: 99, quantity: 1000 },
        { id: 5, locationId: 2, drinkId: 1, quantity: 10 },
        { id: 6, locationId: 2, drinkId: 4, quantity: 10 },
        { id: 7, locationId: 2, drinkId: 5, quantity: 10 },
        { id: 8, locationId: 2, drinkId: 99, quantity: 1000 },
        { id: 9, locationId: 3, drinkId: 1, quantity: 10 },
        { id: 10, locationId: 3, drinkId: 6, quantity: 10 },
        { id: 11, locationId: 3, drinkId: 7, quantity: 10 },
        { id: 12, locationId: 3, drinkId: 99, quantity: 1000 }
    ],

    dessertStock: [
        { id: 1, locationId: 1, dessertId: 1, quantity: 10 },
        { id: 2, locationId: 1, dessertId: 2, quantity: 10 },
        { id: 3, locationId: 1, dessertId: 3, quantity: 10 },
        { id: 4, locationId: 1, dessertId: 99, quantity: 1000 },
        { id: 5, locationId: 2, dessertId: 1, quantity: 10 },
        { id: 6, locationId: 2, dessertId: 4, quantity: 10 },
        { id: 7, locationId: 2, dessertId: 5, quantity: 10 },
        { id: 8, locationId: 2, dessertId: 99, quantity: 1000 },
        { id: 9, locationId: 3, dessertId: 1, quantity: 10 },
        { id: 10, locationId: 3, dessertId: 6, quantity: 10 },
        { id: 11, locationId: 3, dessertId: 7, quantity: 10 },
        { id: 12, locationId: 3, dessertId: 99, quantity: 1000 }
    ],

    orderBuilder: {}
}


//export functions to GET (copy) specific arrays into other modules
export const getLocations = () => {
    return database.locations.map(obj => ({ ...obj }))
}

export const getFood = () => {
    return database.foods.map(dragons => ({ ...dragons }))
}

export const getDrinks = () => {
    return database.drinks.map(drink => ({ ...drink }))
}

export const getDesserts = () => {
    return database.desserts.map(dessert => ({ ...dessert }))
}

export const getOrders = () => {
    return database.orders.map(order => ({ ...order }))
}

export const getOrderBuilder = () => {
    return database.orderBuilder
}

export const getFoodStock = () => {
    return database.foodStock.map(obj => ({ ...obj }))
}

export const getDrinkStock = () => {
    return database.drinkStock.map(obj => ({ ...obj }))
}

export const getDessertStock = () => {
    return database.dessertStock.map(obj => ({ ...obj }))
}

//export functions to SET the items selected for the current order in orderBuilder
export const setLocation = (id) => {
    database.orderBuilder.locationId = id
    console.log(database.orderBuilder)
    document.dispatchEvent(new CustomEvent("stateChanged"))
}

export const setFood = (id) => {
    database.orderBuilder.foodId = id
    console.log(database.orderBuilder)
}

export const setDrink = (id) => {
    database.orderBuilder.drinkId = id
    console.log(database.orderBuilder)
}

export const setDessert = (id) => {
    database.orderBuilder.dessertId = id
    console.log(database.orderBuilder)
}

//export function that takes current order stored in orderBuilder and creates a copy as a new order in the orders array
export const completeOrder = () => {

    // Copy the current state of user choices
    const newOrder = { ...database.orderBuilder }

    // Add a new primary key to the object
    newOrder.id = database.orders.length + 1

    // Add a timestamp to the order
    newOrder.timestamp = Date.now()

    // Add the new order object to custom orders state
    database.orders.push(newOrder)

    // Reset the temporary state for user choices
    database.orderBuilder = {}
    document.dispatchEvent(new CustomEvent("stateChanged"))
}

//export function that takes current stock of a food item at a specific location and reduces it by one when an order is submitted 
export const reduceFoodQuantity = (id) => {
    for (const foodStock of database.foodStock) {
        if (foodStock.id === id) {
            foodStock.quantity--
        }
    }
}

export const reduceDrinkQuantity = (id) => {
    for (const drinkStock of database.drinkStock) {
        if (drinkStock.id === id) {
            drinkStock.quantity--
        }
    }
}

export const reduceDessertQuantity = (id) => {
    for (const dessertStock of database.dessertStock) {
        if (dessertStock.id === id) {
            dessertStock.quantity--
        }
    }
}