// Document Manipulation with JavaScript
// Task 1: Create an array containing information about different products, including their names, prices, and descriptions
// Task 2: Write a function to display the product information on the webpage dynamically.
// Task 3: Implement an event listener to trigger the display of products when the page loads.

let products = [
    { name: "Laptop", price: 999.99, description: "Powerful computing on the go" },
    { name: "Smartphone", price: 699.99, description: "Stay connected wherever you are" },
    { name: "Headphones", price: 149.99, description: "Immersive audio experience" }
];

function displayProducts() {
    let productList = document.getElementById('product-list');
    products.forEach(product => {
        let productDiv = document.createElement('div');
        productDiv.classList.add('product');

        let productName = document.createElement('h2');
        productName.textContent = product.name;
        productDiv.appendChild(productName);

        let productPrice = document.createElement('p');
        productPrice.textContent = `Price: $${product.price}`;
        productDiv.appendChild(productPrice);

        let productDescription = document.createElement('p');
        productDescription.textContent = product.description;
        productDiv.appendChild(productDescription);

        productList.appendChild(productDiv);
    });
}

window.addEventListener('load', displayProducts);

// Form Manipulation with JavaScript
// Task 1: Create an HTML form with input fields for the user's name, email, and message.
// Task 2: Write JavaScript code to handle form submissions and store user input in an object. Display the object in the console.
// Task 3: Implement form validation to ensure that all required fields are filled before submission.

document.getElementById('contact-form').addEventListener('submit', function(event) {
    event.preventDefault();

    let name = document.getElementById('name').value;
    let email = document.getElementById('email').value;
    let message = document.getElementById('message').value;

    if (name === '' || email === '' || message === '') {
        alert('All fields are required.');
        return;
    }

    let userInput = {
        name: name,
        email: email,
        message: message
    };

    console.log(userInput);
});

// Styling with JavaScript
// Task 1: Create an HTML structure with at least 5 elements that will be styled dynamically.
// Task 2: Write JavaScript code to dynamically change the color of the box element when clicked.
// Task 3: Implement additional styling changes based on user interaction, such as mouse hover effects or button clicks on different HTML elements.

function changeColor() {
    const box = document.getElementById('box');
    const colors = ['red', 'blue', 'green', 'purple', 'orange'];
    const currentColor = box.style.backgroundColor;
    let newColor = colors[Math.floor(Math.random() * colors.length)];

    while (newColor === currentColor) {
        newColor = colors[Math.floor(Math.random() * colors.length)];
    }

    box.style.backgroundColor = newColor;
}

function changeSize() {
    const text = document.getElementById('text');
    const sizes = ['16px', '20px', '24px', '28px', '32px'];
    const currentSize = text.style.fontSize;
    let newSize = sizes[Math.floor(Math.random() * sizes.length)];

    while (newSize === currentSize) {
        newSize = sizes[Math.floor(Math.random() * sizes.length)];
    }

    text.style.fontSize = newSize;
}

document.getElementById('hover-box').addEventListener('mouseover', function() {
    this.style.backgroundColor = 'pink';
});

document.getElementById('hover-box').addEventListener('mouseout', function() {
    this.style.backgroundColor = 'orange';
});

document.getElementById('inputField').addEventListener('focus', function() {
    this.style.borderColor = 'blue';
});

document.getElementById('inputField').addEventListener('blur', function() {
    this.style.borderColor = 'initial';
});
