document.querySelector('#click1').onclick = function() {
    cartQuantity++;
    document.querySelector('#bagQuantity').innerText ='Your Bag has ' + cartQuantity + ' items';
}
document.querySelector('#click2').onclick = function() {
    cartQuantity--;
    document.querySelector('#bagQuantity').innerText ='Your Bag has ' + cartQuantity + ' items';
}
document.querySelector('#click3').onclick = function() {
    cartQuantity+=2;
    document.querySelector('#bagQuantity').innerText ='Your Bag has ' + cartQuantity + ' items';
}

let cartQuantity = 0;
document.querySelector('#bagQuantity').innerText ='Your Bag has ' + cartQuantity + ' items';
