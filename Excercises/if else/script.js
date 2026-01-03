function calculateDiscount() {
    const age = document.querySelector("#ageInput").value;
    const gender = document.querySelector("#genderSelect").value;
    const resultText = document.querySelector("#resultText");

    if (age < 18) {
        resultText.textContent = "You get a 10% discount!";
    } else if (age >= 18 && age <= 65) {
        if (gender === "female") {
            resultText.textContent = "You get a 50% discount!";
        } else {
            resultText.textContent = "No discount available.";
        }
    } else {
        resultText.textContent = "You get a 30% discount!";
    }
}