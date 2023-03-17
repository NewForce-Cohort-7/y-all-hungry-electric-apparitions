const database = {
    
    locations:[
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

    foods:[
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
        }
    ],

    drinks:[
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
        }
    ],

    
    desserts:[
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
        }
    ],

    orders:[
        {
            id: 1, 
            locationId: 1,
            foodId: 1,
            drinkId: 1,
            dessertId: 1,
            timestamp: 12345346457645
        }
    ],
    
    foodStock:[
        {id: 1, locationId: 1,foodId: 1, quantity: 10},
        {id: 2, locationId: 1,foodId: 2, quantity: 10},
        {id: 3, locationId: 1,foodId: 3, quantity: 10},
        {id: 4, locationId: 2,foodId: 1, quantity: 10},
        {id: 5, locationId: 2,foodId: 2, quantity: 10},
        {id: 6, locationId: 2,foodId: 3, quantity: 10},
        {id: 7, locationId: 3,foodId: 1, quantity: 10},
        {id: 8, locationId: 3,foodId: 2, quantity: 10},
        {id: 9, locationId: 3,foodId: 3, quantity: 10}
    ],

    drinkStock:[
        {id: 1, locationId: 1,drinkId: 1, quantity: 10},
        {id: 2, locationId: 1,drinkId: 2, quantity: 10},
        {id: 3, locationId: 1,drinkId: 3, quantity: 10},
        {id: 4, locationId: 2,drinkId: 1, quantity: 10},
        {id: 5, locationId: 2,drinkId: 2, quantity: 10},
        {id: 6, locationId: 2,drinkId: 3, quantity: 10},
        {id: 7, locationId: 3,drinkId: 1, quantity: 10},
        {id: 8, locationId: 3,drinkId: 2, quantity: 10},
        {id: 9, locationId: 3,drinkId: 3, quantity: 10}
    ],

    dessertStock:[
        {id: 1, locationId: 1,dessertId: 1, quantity: 10},
        {id: 2, locationId: 1,dessertId: 2, quantity: 10},
        {id: 3, locationId: 1,dessertId: 3, quantity: 10},
        {id: 4, locationId: 2,dessertId: 1, quantity: 10},
        {id: 5, locationId: 2,dessertId: 2, quantity: 10},
        {id: 6, locationId: 2,dessertId: 3, quantity: 10},
        {id: 7, locationId: 3,dessertId: 1, quantity: 10},
        {id: 8, locationId: 3,dessertId: 2, quantity: 10},
        {id: 9, locationId: 3,dessertId: 3, quantity: 10}
    ],

    orderBuilder: {}
}

export const getDrinks = () => {
    return database.drinks.map(drink => ({...drink}))
}

export const setDrinks = (id) => {
    database.orderBuilder.drinkId = id
}


export const setLocation = (locationId) => {
    database.orderBuilder.selectedLocation = locationId
    document.dispatchEvent( new CustomEvent("stateChanged") )
}

export const getLocations = () => {
    return database.locations.map(obj => ({...obj}))
}

export const completeOrder = () => {

        // Broadcast custom event to entire documement so that the
        // application can re-render and update state
        document.dispatchEvent( new CustomEvent("stateChanged") )
}

export const getFood = () => {
    return database.foods.map (dragons => ({...dragons}))
}
