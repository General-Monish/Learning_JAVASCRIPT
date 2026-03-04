let BagItems;
onLoadMethod();

function onLoadMethod() {
    let bagItemsFromLocalStorageStr = localStorage.getItem('BagItems');
    BagItems = bagItemsFromLocalStorageStr ? JSON.parse(bagItemsFromLocalStorageStr) : [];
    DisplayItemsOnHomePage();
    DisplayCartItems();
}
function AddToCartMethod(itemID) {
    BagItems.push(itemID);
    localStorage.setItem('BagItems', JSON.stringify(BagItems));
    DisplayCartItems();
}

function DisplayCartItems() {
    let bagItemCountElement = document.querySelector('.bag-item-count');
    if (BagItems.length > 0) {
        bagItemCountElement.style.visibility = 'visible';
        bagItemCountElement.innerText = BagItems.length;
    } else {
        bagItemCountElement.style.visibility = 'hidden';
    }
}

function DisplayItemsOnHomePage() {
    let itemsContainerElement = document.querySelector('.items-Container');
    if (!itemsContainerElement) return;
    let innerHTMLString = '';
    items.forEach(item => {
        innerHTMLString += `<div class="item-Container">
                <img class="item-image-1" src="${item.item_Image}" alt="mine-image-1">
                <div class="rating">
                    ${item.rating.stars} ⭐ | ${item.rating.reviews}
                </div>
                <div class="company-Name">
                    ${item.company_Name} 
                </div>
                <div class="item-Name">
                    ${item.item_Name}
                </div>
                <div class="pricing">
                    <span class="discounted-price">₹ ${item.pricing.discounted_Price}</span>
                    <span class="original-price">₹ ${item.pricing.original_Price}</span>
                    <span class="discount-percentage">(${item.pricing.discount_Percentage} % OFF)</span>
                </div>
                <button class="btn-Add-To-Cart" onclick="AddToCartMethod('${item.id}')" >Add to Cart</button>
            </div>`;
    });
    itemsContainerElement.innerHTML = innerHTMLString;
}
