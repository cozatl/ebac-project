let count = 0;
const cartCount = document.getElementById('cartCount');
export default class CartItem {
    constructor() {

    }
    
    createItem(parentElement) {
        //Declare variables needed to create an item inside the cart
        const cartSection = document.getElementsByClassName('cart');
        const cartDivButton = document.getElementsByClassName('cart__btn__buy');
        const cartItem = document.createElement('div');
        cartItem.className = 'cart__item';
        //Create subtags inside parent element
        const imgCartItem = document.createElement('img');
        const pDescription = document.createElement('p');
        const pPrice = document.createElement('p');
        const iCartDelete = document.createElement('i');
        const imgCartDelete = document.createElement('img');
        imgCartDelete.setAttribute('src', './img/trash-2.svg');
        imgCartDelete.setAttribute('alt', 'Icono quitar');
        imgCartDelete.className = 'cart__delete-img';

        imgCartItem.className = 'cart__img';
        pDescription.className = 'cart__info';
        pPrice.className = 'cart__info';
        iCartDelete.className = 'cart__delete';
        iCartDelete.appendChild(imgCartDelete);

        const childElementsOfParent = parentElement.children;
        if(parentElement.className !== 'products' && parentElement.className !== '') {
            for (let i = 0; i < childElementsOfParent.length; i++) {
                //pDescription.textContent = (childElementsOfParent[i].className == 'products__title') ? childElementsOfParent[i].textContent : 'hi';
                //pPrice.textContent = (childElementsOfParent[i].className == 'products__price') ? childElementsOfParent[i].textContent : undefined;
                if (childElementsOfParent[i].className == 'products__img') {
                    imgCartItem.setAttribute('src',childElementsOfParent[i].getAttribute('src'));
                }
                if (childElementsOfParent[i].className == 'products__title') {
                    pDescription.textContent = childElementsOfParent[i].textContent;
                }
                if (childElementsOfParent[i].className == 'products__price') {
                    pPrice.textContent = childElementsOfParent[i].textContent;
                }
            }
            cartItem.appendChild(imgCartItem);
            cartItem.appendChild(pDescription);
            cartItem.appendChild(pPrice);
            cartItem.appendChild(iCartDelete);
            cartSection[0].appendChild(cartItem);
            cartSection[0].appendChild(cartDivButton[0]);

            count++;
            cartCount.textContent = count;
            cartCount.style.display = 'block';
        }        
    }

    getCartItems(iconRemove) {
        iconRemove.forEach(elem => {
            elem.addEventListener('click', () => {
                const elemParent = elem.parentElement;
                //elemParent.remove();count--;
                cartCount.textContent = count;
                cartCount.style.display = 'block';
            })            
        })        
    }

    removeItem(cartItem) {
        cartItem.remove();
        count--;console.log(count);
        cartCount.textContent = count;
        cartCount.style.display = 'block';
    }
}
