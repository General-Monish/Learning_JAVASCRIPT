let itemsContainerElement = document.querySelector('.items-Container');
let innerHTMLString = '';
console.log(items);
console.log(typeof items);
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
                <button class="btn-Add-To-Cart">Add to Cart</button>
            </div>`;
});
itemsContainerElement.innerHTML = innerHTMLString;