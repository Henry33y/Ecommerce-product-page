const mobilenavwrapper = document.querySelector('.mobilenav-wrapper')
const mobileNav = document.querySelector('.mobile-nav')
const hamburgerBtn = document.querySelector('.hamburger-btn')
const closeBtn = document.querySelector('.close-btn')
const quantityField = document.querySelector('.num')
const decreaseBtn = document.querySelector('.decrease')
const increaseBtn = document.querySelector('.increase')
const cartCounter = document.querySelector('.cart-counter')
const cart = document.querySelector('.cart')
const addToCartBtn = document.querySelector('.addToCart-btn')
const thumbnails = document.querySelectorAll('.thumbnail-img')
const productImg = document.querySelector('.img')
const cartList = document.querySelector('.cart-list')
const list = document.querySelector('.list')
const emptyCart = document.querySelector('.emptyCart')
const num = document.querySelector('#num')
const total = document.querySelector('.total')
const deleteList = document.querySelector('.delete-cartList')
let activeNav = false
let quantity = 0;

function openMobileNav(){
    if(!activeNav){
        mobilenavwrapper.classList.add('activeNav')
        activeNav = true
    }
}

function closeMobileNav(){
    if(activeNav){
        mobilenavwrapper.classList.remove('activeNav')
        activeNav = false
    }
}
function reduceQuantity(){
    if (quantity <= 0) {
        quantity = 0
    }
    else {
        quantity--
    }
    quantityField.innerText = quantity
}
function increaseQuantity(){
    quantity++
    quantityField.innerText = quantity
}
function updateCartCounter(){
    if(quantity>0){
        cart.classList.add('counting')
        cartCounter.innerText = quantity
    }
    else{
        cart.classList.remove('counting')
    }
}
function toggleCartList(){
    console.log(cart);
    cartList.classList.toggle('activeCart')
}
function removeCartList(){
    cartList.classList.remove('activeCart')
}
function updateCart(){
    list.classList.add('filled')
    num.innerText = quantity
    total.innerText = `$${125 * quantity}.00`
    console.log(emptyCart);
}
function deleteCartList(){
    quantity = 0
    updateCartCounter()
    updateCart()
    list.classList.remove('filled')
    updateQuantityField()
}
function updateQuantityField(){
    quantityField.innerText = 0
}

hamburgerBtn.addEventListener('click',openMobileNav)
closeBtn.addEventListener('click', closeMobileNav)
window.addEventListener('click',(e)=>{
    let target = e.target
    if(activeNav && target == mobilenavwrapper){
        closeMobileNav()
    }
    if(cartList.contains(target) || cart.contains(target)){
        return;
    }
    else{
        removeCartList()
    }
})
decreaseBtn.addEventListener('click', reduceQuantity)
increaseBtn.addEventListener('click', increaseQuantity)
addToCartBtn.addEventListener('click',()=>{
    updateCartCounter()
    if(quantity>0){
        updateCart()
    }
})
for(let i = 0; i < thumbnails.length;i++){
    thumbnails[i].addEventListener('click',(e)=>{
        productImg.setAttribute('src',`images/image-product-${i+1}.jpg`)
    })
}
cart.addEventListener('click', toggleCartList)
deleteList.addEventListener('click',deleteCartList)