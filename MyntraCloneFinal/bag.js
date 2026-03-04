
let bagItemsObject;

// initialize when window loads
window.onload = function () {
    loadBagItemsObject();
    DisplayItemsOfBag();
};

function loadBagItemsObject() {
    console.log(BagItems);
    // convert stored item IDs into full item objects
    bagItemsObject = BagItems.map(itemID => {
        for (let i = 0; i < items.length; i++) {
            if (items[i].id === itemID) {
                return items[i];
            }
        }
        return null; // should never happen if ID is valid
    });
    console.log(bagItemsObject);
}
function DisplayItemsOfBag() {
    console.log(BagItems);
    let bagItemsContainerElement = document.querySelector('.bag-items-container');
    let innerHTMLString = '';
    bagItemsObject.forEach(bagitem => {
        innerHTMLString += generateBagItemsHTML(bagitem);
    });
    bagItemsContainerElement.innerHTML = innerHTMLString;
    bagItemsContainerElement.innerHTML = innerHTMLString;
}

function removeFromBag(itemID) {
    // remove item from BagItems array
    BagItems = BagItems.filter(id => id != itemID);
    // update localStorage  
    localStorage.setItem('BagItems', JSON.stringify(BagItems));
    // update displayed items
    loadBagItemsObject();
    // update displayed items in bag page
    DisplayItemsOfBag();
    // also update cart item count on home page
    DisplayCartItems();
}

function generateBagItemsHTML(item) {
    return `
    <div class="bag-item-container">
    <div class="item-left-part">
      <img class="bag-item-img" src="${item.item_Image}" alt="GTA Wallpaper">
    </div>
    <div class="item-right-part">
      <div class="company">${item.company_Name}</div>
      <div class="item-name">${item.item_Name}</div>
      <div class="price-container">
        <span class="current-price">Rs ${item.pricing.discounted_Price}</span>
        <span class="original-price">Rs ${item.pricing.original_Price}</span>
        <span class="discount-percentage">(${item.pricing.discount_Percentage}% OFF)</span>
      </div>
      <div class="return-period">
        <span class="return-period-days">${item.return_period} days</span> return available
      </div>
      <div class="delivery-details">
        Delivery by
        <span class="delivery-details-days">${item.delivery_details}</span>
      </div>
    </div>
    <div class="remove-from-cart" onclick="removeFromBag('${item.id}')">X</div>
  </div>`;
}