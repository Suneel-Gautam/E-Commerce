const myOrders = [
    {
        orderId: "120000123123123",
        orderDate: "July 31 2025 at 09:23 pm",
        paymentStatus: "Payment Pending",
        deliveryStatus: "Delivery Pending",
        items: [
            {
                id: 1,
                name: "Shoes Caliber 250",
                image: "images/image.png",
                size: "M",
                quantity: 1,
                price: 1500,
            },
            {
                id: 2,
                name: "Shoes Caliber 250",
                image: "images/image.png",
                size: "M",
                quantity: 1,
                price: 1500,
            },
            {
                id: 2,
                name: "Shoes Caliber 250",
                image: "images/image.png",
                size: "M",
                quantity: 1,
                price: 1500,
            },
            {
                id: 2,
                name: "Shoes Caliber 250",
                image: "images/image.png",
                size: "M",
                quantity: 1,
                price: 1500,
            },
            {
                id: 2,
                name: "Shoes Caliber 250",
                image: "images/image.png",
                size: "M",
                quantity: 1,
                price: 1500,
            },
        ],
        shippingDetails: {
            name: "Sunil Gautam",
            email: "gautamsunil917@gmail.com",
            phoneNumber: "9841046495",
            address: "Duwakot - 1 near KMC Hospital",
        },
        summary: {
            subTotal: 3000,
            deliveryCharge: 0,
            grandTotal: 3000,
        },
    },
    {
        orderId: "120000123123123",
        orderDate: "July 31 2025 at 09:23 pm",
        paymentStatus: "Payment Pending",
        deliveryStatus: "Delivery Pending",
        items: [
            {
                id: 1,
                name: "Shoes Caliber 250",
                image: "images/image.png",
                size: "M",
                quantity: 1,
                price: 1500,
            },
            {
                id: 2,
                name: "Shoes Caliber 250",
                image: "images/image.png",
                size: "M",
                quantity: 1,
                price: 1500,
            },
            {
                id: 2,
                name: "Shoes Caliber 250",
                image: "images/image.png",
                size: "M",
                quantity: 1,
                price: 1500,
            },
            {
                id: 2,
                name: "Shoes Caliber 250",
                image: "images/image.png",
                size: "M",
                quantity: 1,
                price: 1500,
            },
            {
                id: 2,
                name: "Shoes Caliber 250",
                image: "images/image.png",
                size: "M",
                quantity: 1,
                price: 1500,
            },
        ],
        shippingDetails: {
            name: "Sunil Gautam",
            email: "gautamsunil917@gmail.com",
            phoneNumber: "9841046495",
            address: "Duwakot - 1 near KMC Hospital",
        },
        summary: {
            subTotal: 3000,
            deliveryCharge: 0,
            grandTotal: 3000,
        },
    },
];

const orderContainer = document.querySelector('.contentSection')

let orderItem = ""
myOrders.forEach((item) => {
    let orderItemHtml = ""
    item.items.forEach((innerItems) => {
        orderItemHtml += `
         <div class="orderItem">
           <div class="content">
                        <div class="firstContent">
                            <div class="image">
                                <img src="${innerItems.image}" alt="">
                            </div>
                            <div class="insideContent">
                                <h1>
                                    ${innerItems.name}
                                </h1>
                                <div class="detailsItems">
                                    <p>Size : ${innerItems.size} </p>
                                    <p>QTY : ${innerItems.quantity}</p>
                                </div>
                            </div>
                        </div>
                        <div class="price">
                            <span>
                                ${innerItems.price}
                            </span>
                        </div>
                    </div>
                </div>
        `
    })

    orderItem += `
      <div class="item">
         <div class="headerSection">
                    <div class="firstSection">
                        <div class="order">
                            <span>
                                Order Id : ${item.orderId}
                            </span>
                            <div class="date">
                                <p>${item.orderDate}</p>
                            </div>
                        </div>
                    </div>
                    <div class="statusBox">
                        <div class="status">
                         ${item.paymentStatus}
                        </div>
                        <div class="status">
                         ${item.deliveryStatus}
                        </div>
                    </div>
                </div>
            ${orderItemHtml}   
                <div class="userDetails">
                    <h1>
                        Shipping Details
                    </h1>
                    <div class="containers">
                        <div class="userContent">
                            <div class="data">
                                <span>
                                    Name :
                                </span>
                                <span>
                                    ${item.shippingDetails.name}
                                </span>
                            </div>
                            <div class="data">
                                <span>
                                    Email :
                                </span>
                                <span>
                                     ${item.shippingDetails.email}
                                </span>
                            </div>
                            <div class="data">
                                <span>
                                    PhoneNumber :
                                </span>
                                <span>
                                    ${item.shippingDetails.phoneNumber}
                                </span>
                            </div>
                            <div class="data">
                                <span>
                                    Address :
                                </span>
                                <span>
                                ${item.shippingDetails.address}
                                </span>
                            </div>
                        </div>
                        <div class="Subtotal">
                            <div class="data">
                                <span>
                                    SubTotal :
                                </span>
                                <span>
                                    ${item.summary.subTotal}
                                </span>
                            </div>
                            <div class="data">
                                <span>
                                    DeliveryCharge :
                                </span>
                                <span>
                                 ${item.summary.deliveryCharge}

                                </span>
                            </div>
                            <div class="data">
                                <span>
                                    Grand Total :
                                </span>
                                <span>
                                 ${item.summary.grandTotal}
                                </span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
    `

})

orderContainer.innerHTML = orderItem
