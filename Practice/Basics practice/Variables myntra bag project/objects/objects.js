        // Creating an object to represent a Myntra bag
        const myntraBag = {
            brand: "Myntra",
            color: "Black",
            size: "Medium",
            price: 1500,
            isAvailable: true,
            features: ["Waterproof", "Lightweight", "Durable"]
        };

        // Displaying the object in the console
        console.log(myntraBag);
        document.querySelector('#output').textContent = JSON.stringify(myntraBag, null, 2);

        // Accessing properties of the object
        console.log("Brand:", myntraBag.brand);
        console.log("Price:", myntraBag.price);
        document.querySelector('#output').textContent += 
        `\n"Accessing properties of the object" \nBrand: ${myntraBag.brand}\nPrice: ${myntraBag.price}\n`;

        // Modifying a property of the object
        myntraBag.price = 1200;
        console.log("Updated Price:", myntraBag.price);
        document.querySelector('#output').textContent += `Modifying a property of the object\nUpdated Price: ${myntraBag.price}\n`;

        // Adding a new property to the object
        myntraBag.discount = 10; // in percentage
        console.log("Discount:", myntraBag.discount);
        document.querySelector('#output').textContent += `Discount: ${myntraBag.discount}\n`;

        // Iterating over the features array
        console.log("Features:");
        myntraBag.features.forEach((feature, index) => {
            console.log(`${index + 1}. ${feature}`);
            document.querySelector('#output').textContent += `${index + 1}. ${feature}\n`;
        });

        const AmazonBag = {
            brand: "Amazon",color: "Blue",size: "Large",
            color: "Blue",
            size: "Large",
            price: 2000,
            isAvailable: false,
            "delivery-time": "5-7 days",
            features: ["Eco-friendly", "Spacious", "Stylish"]
        };

        const AmazonBagInfo = AmazonBag;
        document.querySelector('#amazonOutput').textContent += `\n"Amazon Bag Object"\n` + JSON.stringify(AmazonBag, null, 2);
        document.querySelector('#amazonOutput').textContent += `\nAmazon Bag Info Object:\n` + JSON.stringify(AmazonBagInfo, null, 2);
        AmazonBagInfo.price = 1800;
        AmazonBagInfo.color = "Green";
        document.querySelector('#amazonOutput').textContent += `\nAfter modifying Amazon Bag Info Object:\n` + JSON.stringify(AmazonBagInfo, null, 2);
        document.querySelector('#amazonOutput').textContent += `\nOriginal Amazon Bag Object after modifying Info Object:\n` + JSON.stringify(AmazonBag, null, 2);
        
        document.querySelector('#amazonOutput').textContent += `\nAccessing delivery-time property: ${AmazonBag["delivery-time"]}\n`;

        const msobject = {
            message: 'good job',
            status: 'success',
        }
        console.log(msobject);
        document.querySelector('#msOutput').textContent += `\n"Message Status Object"\n` + JSON.stringify(msobject, null, 2);
        let {message, status} = msobject;
        document.querySelector('#msOutput').textContent += `\nDestructured Values:\nMessage: ${message}\nStatus: ${status}\n`;
        console.log("Destructured Values:", message, status);

        function isIdenticalBags(AmazonBag,AmazonBagInfo){
            if(typeof AmazonBag !== 'object' || typeof AmazonBagInfo !== 'object'){
                console.warn('parameter was not correct');
                return false;
            }
            if(AmazonBag === AmazonBagInfo){
                return true;
            }
            if(AmazonBag.brand === AmazonBagInfo.brand &&
               AmazonBag.color === AmazonBagInfo.color &&
               AmazonBag.size === AmazonBagInfo.size &&
               AmazonBag.price === AmazonBagInfo.price &&
               AmazonBag.isAvailable === AmazonBagInfo.isAvailable &&
               AmazonBag["delivery-time"] === AmazonBagInfo["delivery-time"] &&
               JSON.stringify(AmazonBag.features) === JSON.stringify(AmazonBagInfo.features)){
                return true;
            }
            return false;
        }

        let identicalResult = isIdenticalBags(AmazonBag, AmazonBagInfo);
        console.log("Are AmazonBag and AmazonBagInfo identical?", identicalResult);
        document.querySelector('#identicalOutput').textContent += `Are AmazonBag and AmazonBagInfo identical? ${identicalResult}\n`;

        let isIdenticalBagsResult = isIdenticalBags(AmazonBag, "not an object");
        document.querySelector('#identicalOutput').textContent += `Check console for warning message when invalid parameter is passed.\n ${isIdenticalBagsResult}\n`;

        let emptyObject = {};
        let isIdenticalEmptyObjects = isIdenticalBags(emptyObject, emptyObject);
        console.log("Are two empty objects identical?", isIdenticalEmptyObjects);
        document.querySelector('#identicalOutput').textContent += `Are two empty objects identical? ${isIdenticalEmptyObjects}\n`;

        let anotherBag = isIdenticalBags(AmazonBag, '');
        console.log("Are AmazonBag and an empty string identical?", anotherBag);
        document.querySelector('#identicalOutput').textContent += `Are AmazonBag and an empty string identical? ${anotherBag}\n`;


