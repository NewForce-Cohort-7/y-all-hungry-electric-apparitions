const database = {

    locations: [
        {
            id: 1,
            name: 'Truck 1',
            address: '100 Main Street',
            phone: '555-555-5555'
        },
        {
            id: 2,
            name: 'Truck 2',
            address: '123 Corner Street',
            phone: '555-555-5555'
        },
        {
            id: 3,
            name: 'Truck 3',
            address: '500 Capitol Street',
            phone: '555-555-5555'
        }
    ],

    foods: [
        {
            id: 1,
            name: 'Chili Dog',
            price: 5,
            img: 'image1.png',
            desc: 'A cool description of the food'
        },
        {
            id: 2,
            name: 'Slaw Dog',
            price: 6,
            img: 'image2.png',
            desc: 'A cool description of the food'
        },
        {
            id: 3,
            name: 'Deluxe Dog',
            price: 7,
            img: 'image3.png',
            desc: 'A cool description of the food'
        },
        {
            id: 99,
            name: 'None',
            price: 0,
            img: '',
            desc: ''
        }
    ],

    drinks: [
        {
            id: 1,
            name: 'Water',
            price: 1,
            img: 'image1.png',
        },
        {
            id: 2,
            name: 'Sweet Tea',
            price: 3,
            img: 'image2.png',
        },
        {
            id: 3,
            name: 'Lemonade',
            price: 7,
            img: 'image3.png',
        },
        {
            id: 99,
            name: 'None',
            price: 0,
            img: '',
        }
    ],

    desserts: [
        {
            id: 1,
            name: 'Vanilla Cone',
            price: 3,
            img: 'image1.png',
            desc: 'A cool description of the food'
        },
        {
            id: 2,
            name: 'Chocolate Swirl',
            price: 4,
            img: 'image2.png',
            desc: 'A cool description of the food'
        },
        {
            id: 3,
            name: 'Hot Fudge Sundae',
            price: 5,
            img: 'image3.png',
            desc: 'A cool description of the food'
        },
        {
            id: 99,
            name: 'None',
            price: 0,
            img: '',
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
        { id: 5, locationId: 2, foodId: 1, quantity: 10 },
        { id: 6, locationId: 2, foodId: 2, quantity: 10 },
        { id: 7, locationId: 2, foodId: 3, quantity: 10 },
        { id: 8, locationId: 2, foodId: 99, quantity: 1000 },
        { id: 9, locationId: 3, foodId: 1, quantity: 10 },
        { id: 10, locationId: 3, foodId: 2, quantity: 10 },
        { id: 11, locationId: 3, foodId: 3, quantity: 10 },
        { id: 12, locationId: 3, foodId: 99, quantity: 1000 }

    ],

    drinkStock: [
        { id: 1, locationId: 1, drinkId: 1, quantity: 10 },
        { id: 2, locationId: 1, drinkId: 2, quantity: 10 },
        { id: 3, locationId: 1, drinkId: 3, quantity: 10 },
        { id: 4, locationId: 1, drinkId: 99, quantity: 1000 },
        { id: 5, locationId: 2, drinkId: 1, quantity: 10 },
        { id: 6, locationId: 2, drinkId: 2, quantity: 10 },
        { id: 7, locationId: 2, drinkId: 3, quantity: 10 },
        { id: 8, locationId: 2, drinkId: 99, quantity: 1000 },
        { id: 9, locationId: 3, drinkId: 1, quantity: 10 },
        { id: 10, locationId: 3, drinkId: 2, quantity: 10 },
        { id: 11, locationId: 3, drinkId: 3, quantity: 10 },
        { id: 12, locationId: 3, drinkId: 99, quantity: 1000 }
    ],

    dessertStock: [
        { id: 1, locationId: 1, dessertId: 1, quantity: 10 },
        { id: 2, locationId: 1, dessertId: 2, quantity: 10 },
        { id: 3, locationId: 1, dessertId: 3, quantity: 10 },
        { id: 4, locationId: 1, dessertId: 99, quantity: 1000 },
        { id: 5, locationId: 2, dessertId: 1, quantity: 10 },
        { id: 6, locationId: 2, dessertId: 2, quantity: 10 },
        { id: 7, locationId: 2, dessertId: 3, quantity: 10 },
        { id: 8, locationId: 2, dessertId: 99, quantity: 1000 },
        { id: 9, locationId: 3, dessertId: 1, quantity: 10 },
        { id: 10, locationId: 3, dessertId: 2, quantity: 10 },
        { id: 11, locationId: 3, dessertId: 3, quantity: 10 },
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