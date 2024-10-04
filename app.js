let openShopping = document.querySelector('.shopping');
let closeShopping = document.querySelector('.closeShopping');
let list = document.querySelector('.list');
let listCard = document.querySelector('.listCard');
let body = document.querySelector('body');
let total = document.querySelector('.total');
let quantity = document.querySelector('.quantity');

openShopping.addEventListener('click', ()=>{
    body.classList.add('active');
})
closeShopping.addEventListener('click', ()=>{
    body.classList.remove('active');
})

let products = [
    {
        id: 1,
        itemCode: 'B1001',
        name: 'Classic Burger (Large)',
        image: '1.PNG',
        price: 750.00
    },
    {
        id: 2,
        itemCode: 'B1002',
        name: 'Classic Burger (Regular)',
        image: '1.PNG',
        price: 1500.00 
    },
    {
        id: 3,
        itemCode: 'B1003',
        name: 'Turkey Burger',
        image: '1.PNG',
        price: 1600.00
    },
    {
        id: 4,
        itemCode: 'B1004',
        name: 'Chicken Burger (Large) ',
        image: '1.PNG',
        price: 1400.00
    },
    {
        id: 5,
        itemCode: 'B1005',
        name: 'Chicken Burger (Regular)',
        image: '1.PNG',
        price: 800.00
    },
    {
        id: 6,
        itemCode: 'B1006',
        name: 'Cheese Burger (Large)',
        image: '1.PNG',
        price: 1000.00
    },
    {
        id: 7,
        itemCode: 'B1007',
        name: 'Cheese Burger (Regular)',
        image: '1.PNG',
        price: 1600.00
    },
    {
        id: 8,
        itemCode: 'B1008',
        name: 'Bacon Burger',
        image: '1.PNG',
        price: 650.00
    },
    {
        id: 9,
        itemCode: 'B1009',
        name: 'Shawarma Burger',
        image: '1.PNG',
        price: 800.00
    },
    {
        id: 10,
        itemCode: 'B1010',
        name: 'Olive Burger',
        image: '1.PNG',
        price: 1800.00
    },
    {
        id: 12,
        itemCode: 'B1012',
        name: 'Double-Cheese Burger',
        image: '1.PNG',
        price: 1250.00
    },
    {
        id: 13,
        itemCode: 'B1013',
        name: 'Crispy Chicken Burger (Regular)',
        image: '1.PNG',
        price: 1200.00
    },
    {
        id: 14,
        itemCode: 'B1014',
        name: 'Crispy Chicken Burger (Large) ',
        image: '1.PNG',
        price: 1600.00
    },
    {
        id: 15,
        itemCode: 'B1015',
        name: 'Paneer Burger',
        image: '1.PNG',
        price: 900.00
    },
    {
        id: 16,
        itemCode: 'B1016',
        name: 'Crispy Chicken Submarine (Large)',
        image: '1.PNG',
        price: 2000.00
    },
    {
        id: 17,
        itemCode: 'B1017',
        name: 'Crispy Chicken Submarine (Regular)',
        image: '1.PNG',
        price: 1500.00
    },
    {
        id: 18,
        itemCode: 'B1018',
        name: 'Chicken Submarine (Large)',
        image: '1.PNG',
        price: 1800.00
    },
    {
        id: 19,
        itemCode: 'B1019',
        name: 'Chicken Submarine (Regular)',
        image: '1.PNG',
        price: 1400.00
    },
    {
        id: 20,
        itemCode: 'B1020',
        name: 'Grinder Submarine',
        image: '1.PNG',
        price: 2300.00
    },
    {
        id: 21,
        itemCode: 'B1021',
        name: 'Cheese Submarine',
        image: '1.PNG',
        price: 2200.00
    },
    {
        id: 22,
        itemCode: 'B1022',
        name: 'Double Cheese n Chicken Submarine',
        image: '1.PNG',
        price: 1900.00
    },
    {
        id: 23,
        itemCode: 'B1023',
        name: 'Special Horgie Submarine',
        image: '1.PNG',
        price: 2800.00
    },
    {
        id: 24,
        itemCode: 'B1024',
        name: 'MOS Special Submarine',
        image: '1.PNG',
        price: 3000.00
    }
];

let listCards  = [];
function initApp(){
    products.forEach((value, key) =>{
        let newDiv = document.createElement('div');
        newDiv.classList.add('item');
        newDiv.innerHTML = `
            <img src="image/${value.image}">
            <div class="title">${value.name}</div>
            <div class="itemCode">${value.itemCode}</div>
            <div class="price">Rs.${value.price.toLocaleString()}/=</div>
            <button onclick="addToCard(${key})">Add To Cart</button>`;
        list.appendChild(newDiv);
    })
}
initApp();
function addToCard(key){
    if(listCards[key] == null){
        listCards[key] = JSON.parse(JSON.stringify(products[key]));
        listCards[key].quantity = 1;
    }
    reloadCard();
}
function reloadCard(){
    listCard.innerHTML = '';
    let count = 0;
    let totalPrice = 0;
    listCards.forEach((value, key)=>{
        totalPrice = totalPrice + value.price;
        count = count + value.quantity;
        if(value != null){
            let newDiv = document.createElement('li');
            newDiv.innerHTML = `
                <div><img src="image/${value.image}"/></div>
                <div>${value.name}</div>
                <div>Rs.${value.price.toLocaleString()}</div>
                <div>
                    <button onclick="changeQuantity(${key}, ${value.quantity - 1})">-</button>
                    <div class="count">${value.quantity}</div>
                    <button onclick="changeQuantity(${key}, ${value.quantity + 1})">+</button>
                </div>`;
                listCard.appendChild(newDiv);
        }
    })
    total.innerText = totalPrice.toLocaleString();
    quantity.innerText = count;
}
function changeQuantity(key, quantity){
    if(quantity == 0){
        delete listCards[key];
    }else{
        listCards[key].quantity = quantity;
        listCards[key].price = quantity * products[key].price;
    }
    reloadCard();
}


//Add CUstomer
document.getElementById('customerForm').addEventListener('submit', function (e) {
    e.preventDefault();

    const customer = {
        customerId: document.getElementById('customerId').value,
        name: document.getElementById('customerName').value,
        phoneNumber: document.getElementById('phoneNumber').value,
        orderId: document.getElementById('orderId').value,
        netTotal: document.getElementById('netTotal').value
    };

    console.log('Customer added:', customer);
    // Here you would typically send the data to a server
    alert('Customer added successfully!');
    this.reset();
});

//View Customer
const customerDatabase = {
    'CUST001': {
        customerId: 'CUST001',
        name: 'John Doe',
        phoneNumber: '123-456-7890',
        orderId: 'ORD123',
        netTotal: 599.99
    },
    'CUST002': {
        customerId: 'CUST002',
        name: 'Jane Smith',
        phoneNumber: '987-654-3210',
        orderId: 'ORD456',
        netTotal: 299.99
    },
    'CUST003': {
        customerId: 'CUST003',
        name: 'Bob Johnson',
        phoneNumber: '555-555-5555',
        orderId: 'ORD789',
        netTotal: 899.99
    }
};

function searchCustomer() {
    const searchInput = document.getElementById('searchInput').value.toLowerCase();
    const customerDetails = document.querySelector('.customer-details');
    const noResults = document.querySelector('.no-results');
    
    let foundCustomer = null;
    
    for (const id in customerDatabase) {
        const customer = customerDatabase[id];
        if (customer.customerId.toLowerCase().includes(searchInput) || 
            customer.name.toLowerCase().includes(searchInput)) {
            foundCustomer = customer;
            break;
        }
    }
    
    if (foundCustomer) {
        displayCustomerDetails(foundCustomer);
        customerDetails.style.display = 'block';
        noResults.style.display = 'none';
    } else {
        customerDetails.style.display = 'none';
        noResults.style.display = 'block';
    }
}

function displayCustomerDetails(customer) {
    document.getElementById('customerId').textContent = customer.customerId;
    document.getElementById('customerName').textContent = customer.name;
    document.getElementById('phoneNumber').textContent = customer.phoneNumber;
    document.getElementById('orderId').textContent = customer.orderId;
    document.getElementById('netTotal').textContent = `$${customer.netTotal}`;
}

function displayAllCustomers() {
    const tableBody = document.getElementById('customerTableBody');
    tableBody.innerHTML = '';
    
    for (const id in customerDatabase) {
        const customer = customerDatabase[id];
        const row = document.createElement('tr');
        
        row.innerHTML = `
            <td>${customer.customerId}</td>
            <td>${customer.name}</td>
            <td>${customer.phoneNumber}</td>
            <td>${customer.orderId}</td>
            <td>$${customer.netTotal}</td>
        `;
        
        tableBody.appendChild(row);
    }
}

// Initialize the page with all customers displayed
window.onload = displayAllCustomers;

//Update Customer

const searchButton = document.getElementById('searchButton');
const updateForm = document.getElementById('updateForm');
const searchCustomerId = document.getElementById('searchCustomerId');

searchButton.addEventListener('click', function () {
    const searchId = searchCustomerId.value;
    const customer = customerDatabase[searchId];

    if (customer) {
        // Populate form with customer data
        document.getElementById('customerId').value = customer.customerId;
        document.getElementById('customerName').value = customer.name;
        document.getElementById('phoneNumber').value = customer.phoneNumber;
        document.getElementById('orderId').value = customer.orderId;
        document.getElementById('netTotal').value = customer.netTotal;

        // Show the update form
        updateForm.classList.remove('hidden');
    } else {
        alert('Customer not found!');
        updateForm.classList.add('hidden');
    }
});

updateForm.addEventListener('submit', function (e) {
    e.preventDefault();

    const updatedCustomer = {
        customerId: document.getElementById('customerId').value,
        name: document.getElementById('customerName').value,
        phoneNumber: document.getElementById('phoneNumber').value,
        orderId: document.getElementById('orderId').value,
        netTotal: document.getElementById('netTotal').value
    };

    // Update customer in "database"
    customerDatabase[updatedCustomer.customerId] = updatedCustomer;

    console.log('Customer updated:', updatedCustomer);
    console.log('Updated database:', customerDatabase);

    alert('Customer updated successfully!');
});