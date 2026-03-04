const CONVENIENCE_FEES = 99;
let bagItemsObject;

// initialize when window loads
window.onload = function () {
    loadBagItemsObject();
    DisplayItemsOfBag();
    displayBagSummary();
};

function displayBagSummary() {
    let bagSummaryElement = document.querySelector('.bag-summary');
  let totalItem = (bagItemsObject && bagItemsObject.length) || 0;
  let totalMRP = 0;
  let totalDiscount = 0;

  if (bagItemsObject && bagItemsObject.length > 0) {
    bagItemsObject.forEach(bagItem => {
      // items use a `pricing` object with `original_Price` and `discounted_Price`
      const original = (bagItem.pricing && bagItem.pricing.original_Price) || 0;
      const discounted = (bagItem.pricing && bagItem.pricing.discounted_Price) || 0;
      totalMRP += original;
      totalDiscount += (original - discounted);
    });
  }

  // final payment = sum of discounted prices + convenience fees
  let finalPayment = (totalMRP - totalDiscount) + CONVENIENCE_FEES;


    bagSummaryElement.innerHTML = `
    <div class="bag-details-container">
    <div class="price-header">PRICE DETAILS (${totalItem} Items) </div>
    <div class="price-item">
      <span class="price-item-tag">Total MRP</span>
      <span class="price-item-value">₹${totalMRP}</span>
    </div>
    <div class="price-item">
      <span class="price-item-tag">Discount on MRP</span>
      <span class="price-item-value priceDetail-base-discount">-₹${totalDiscount}</span>
    </div>
    <div class="price-item">
      <span class="price-item-tag">Convenience Fee</span>
      <span class="price-item-value">₹99</span>
    </div>
    <hr>
    <div class="price-footer">
      <span class="price-item-tag">Total Amount</span>
      <span class="price-item-value">₹${finalPayment}</span>
    </div>
  </div>
  <button class="btn-place-order">
    <div class="css-xjhrni">PLACE ORDER</div>
  </button>
  `;
}
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
  if (!bagItemsObject || bagItemsObject.length === 0) {
    bagItemsContainerElement.innerHTML = `<div class="empty-bag">Your bag is empty.</div>`;
    return;
  }

  bagItemsObject.forEach(bagitem => {
    if (!bagitem) return; // skip nulls
    innerHTMLString += generateBagItemsHTML(bagitem);
  });
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
  // update bag summary
  displayBagSummary();
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