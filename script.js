

const executeOrder = () => {
    let orderId=document.getElementById('order-id-input').value
    document.getElementById('order-id-details').innerHTML = `Order details of ID : ${orderId}`
    document.getElementById('order-id-input').value=''
    console.log('Order placed')
    const status = document.getElementById('order-placed')
    status.classList.remove('btn-light')
    status.classList.add('btn-success')
         chefReceived()
        .then(pizzaSauceAdded)
        .then(firstLayerOfCheezeAdded)
        .then(toppingsAdded)
        .then(secondLayerOfCheezeAdded)
        .then(pizzaBaked)
        .then(oreganoAddedAndPacked)
        .then(packageReceivedAtCounter)
        .then(() => {
            const delivery = document.getElementById('delivery')
            change(delivery)
            console.log('The order is ready and handed over to the Zomato delivery guy!')
        })
        .catch((err) => console.log(err))
}


    let change = (x) => {
    x.classList.remove('btn-light')
    x.classList.add('btn-success')
   }


    const chefReceived = () => {
        return new Promise((resolve, reject) => {
            setTimeout(() => {
                console.log('Chef received the order and started preparing')
                const status = document.getElementById('preparing')
                change(status)
                resolve()
            }, 2000)
        })
    }

    const pizzaSauceAdded = () => {
        return new Promise((resolve, reject) => {
            setTimeout(() => {
                console.log('Pizza Sauce added')
                const status = document.getElementById('pizza-sauce')
                change(status)
                resolve()
            }, 10000)
        })
    }

    const firstLayerOfCheezeAdded = () => {
        return new Promise((resolve, reject) => {
            setTimeout(() => {
                console.log('First layer of cheeze added')
                const status = document.getElementById('first-cheese-added')
                change(status)
                resolve()
            }, 5000)
        })
    }

    const toppingsAdded = () => {
        return new Promise((resolve, reject) => {
            setTimeout(() => {
                console.log('Toppings added')
                const status = document.getElementById('toppings')
                change(status)
                resolve()
            }, 12000)
        })
    }

    const secondLayerOfCheezeAdded = () => {
        return new Promise((resolve, reject) => {
            setTimeout(() => {
                console.log('Second layer of cheeze added')
                const status = document.getElementById('second-cheese-added')
                change(status)
                resolve()
            }, 5000)
        })
    }

    const pizzaBaked = () => {
        return new Promise((resolve, reject) => {
            setTimeout(() => {
                console.log('Pizza baked!')
                const status = document.getElementById('baked')
                change(status)
                resolve()
            }, 15000)
        })
    }

    const oreganoAddedAndPacked = () => {
        return new Promise((resolve, reject) => {
            setTimeout(() => {
                console.log('Oregano added and packed')
                const status = document.getElementById('packed')
                change(status)
                resolve()
            }, 8000)
        })
    }

    const packageReceivedAtCounter = () => {
        return new Promise((resolve, reject) => {
            setTimeout(() => {
                console.log('Package received at counter')
                const status = document.getElementById('received')
                change(status)
                resolve()
            }, 2000)
        })
    }




// /*
// 			Order placed 
// 			After 2s -> Chef received the order and started preparing
// 			After 10s -> Pizza Sauce added
// 			After 5s -> First layer of cheeze added
// 			After 12s -> Toppings added
// 			After 5s -> Second layer of cheeze added
// 			After 15s -> Pizza baked!
// 			After 8s -> Oregano added and packed
// 			After 2s -> Package received at counter
// 			The order is ready and handed over to the Zomato delivery guy!
// 		*/

		