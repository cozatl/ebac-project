//Import necessary Classes
import CartItem from "./cartItem.js";

//Create cart items
//Create parent element
const parentProducts = document.querySelector('.products');
const buyButtons = document.querySelectorAll('.cart__btn__add'); //Get button pressed from store elements
let cartButtons = document.querySelectorAll('.cart');            //Get button pressed from cart elements
//Declare variable from Class
const cartItem = new CartItem();

// Add items to the cart
buyButtons.forEach(button => {
    button.addEventListener('click', (e) => {
        const clickedBuyBtn = e.target;
        const parentBuyBtn = clickedBuyBtn.parentElement;
        
        cartItem.createItem(parentBuyBtn);                      //Create elements after knowing which button from the store was pressed
        cartButtons = document.querySelectorAll('.cart');       //Get all cart items once an element was added
    })
})

// Remove itmes from the cart
cartButtons.forEach(button => {
    button.addEventListener('click', (e) => {
        const clickedItem = e.target;
        const clickedIcon = clickedItem.parentElement;
        const parentElem = clickedIcon.parentElement;          //Get items to be removed once knowing which button was pressed
        
        cartItem.removeItem(parentElem);                       //Remove items according to the parent selected
    })
})

// Under development
parentProducts.addEventListener('click', (event) => {
    
})


//Show/hide cart from the web page using toggle
const header = document.querySelector('.header');
const cartIcon = document.getElementById('cart');
//console.log(cartIcon);
const cart = document.querySelector('.cart');

cartIcon.addEventListener('click', () => {
    cart.classList.toggle('show');   // Add/remove cart panel
})

// Get menu element
const menuIcon = document.getElementById('menu');

const menu = document.querySelector('.header__menu');

menuIcon.addEventListener('click', () => {
    menu.classList.add('show');      // Add class to show menu panel
})

// Get close menu icon
const menuClose = document.getElementById('close-menu');
menuClose.addEventListener('click', () => {
    menu.classList.remove('show');   // Add class to hide menu panel
})

//Add actions when mouse enters or leaves elements
const product = document.querySelector('.products__item');

product.addEventListener('mouseenter', () => {
    product.style.opacity = '.5';
})

product.addEventListener('mouseleave', () => {
    product.style.opacity = '1';
})