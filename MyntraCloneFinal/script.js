let itemsContainerElement = document.querySelector('.items-Container');
let items = {
    item_Image: "/MyntraCloneFinal/Assets/Images/mine/1.jpg",
    rating:{
        stars: 4.5,
        reviews: "1400 Reviews"
    },
    company_Name: "GTA Designs",
    item_Name: "GTA Wallpaper 4k",
    pricing:{
        discounted_Price: 499,
        original_Price: 999,
        discount_Percentage: 50
    }
}
itemsContainerElement.innerHTML = `
 <div class="item-Container">
                <img class="item-image-1" src="${items.item_Image}" alt="mine-image-1">
                <div class="rating">
                    ${items.rating.stars} ⭐ |${items.rating.reviews}
                </div>
                <div class="company-Name">
                    ${items.company_Name} 
                </div>
                <div class="item-Name">
                    ${items.item_Name}
                </div>
                <div class="pricing">
                    <span class="discounted-price">₹ ${items.pricing.discounted_Price}</span>
                    <span class="original-price">₹ ${items.pricing.original_Price}</span>
                    <span class="discount-percentage">(${items.pricing.discount_Percentage} % OFF)</span>
                </div>
                <button class="btn-Add-To-Cart">Add to Cart</button>
            </div>
`;