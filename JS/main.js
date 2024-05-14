// selecting seat 
let buttons = document.querySelectorAll('.seat');
let selectButtonCount = 0;


for (let i = 0; i < buttons.length; i++) {
    let button = buttons[i];
    let clickHandler = function () {
        if (selectButtonCount < 4) {
            button.style.backgroundColor = 'green';
            button.style.color = 'white';
            selectButtonCount++;
            button.removeEventListener('click', clickHandler);
            addedTicketOnCart();
            fareCalculation();
            seatCounting();
            reduceAvailableSet();

            document.getElementById("nextButtonEnable").removeAttribute("disabled");

        }
        else {
            document.getElementById('alertModalForTicket').addEventListener("click", alertModalForTicket.showModal()
            )

        }
    };
    button.addEventListener('click', clickHandler);
}

// Cupon 

let cuponText = document.getElementById("cuponInput");
cuponText.addEventListener("keyup", function (event) {
    let cuponValue = event.target.value;
    let cuponButton = document.getElementById("cuponApplyButton");
    if (cuponValue === "NEW15" || cuponValue === "Couple 20") {
        cuponButton.removeAttribute("disabled");
    }
    else {
        cuponButton.setAttribute("disabled", "disabled");

    }
});

// reduce price for cupon
let cuponApplyButton = document.getElementById("cuponApplyButton");
cuponApplyButton.addEventListener("click", function () {
    let cuponDiv = document.getElementById("cuponDiv");
    let cuponText = document.getElementById("cuponInput").value;
    let setGrandTotal = document.getElementById("grandTotalPrice");
    let GrandTotal = parseInt(setGrandTotal.innerText);
    if (cuponText === "NEW15") {
        let discountPrice = GrandTotal * (12 / 100);
        let afterDiscount = GrandTotal - discountPrice;
        setGrandTotal.innerText = afterDiscount;

        let priceContainer = document.getElementById("discountPrice");
        let discountedPriceText = document.createElement('p');
        let discountedPrice = document.createElement('p');
        discountedPriceText.innerText = "You got discount:";
        discountedPrice.innerText = discountPrice;
        priceContainer.appendChild(discountedPriceText);
        priceContainer.appendChild(discountedPrice);

        cuponApplyButton.setAttribute("disabled", "disabled");
        cuponDiv.classList.add("hidden");
    }
    else if (cuponText === "Couple 20") {
        let discountPrice = GrandTotal * (20 / 100);
        let afterDiscount = GrandTotal - discountPrice;
        setGrandTotal.innerText = afterDiscount;

        let priceContainer = document.getElementById("discountPrice");
        let discountedPriceText = document.createElement('p');
        let discountedPrice = document.createElement('p');
        discountedPriceText.innerText = "You got discount:";
        discountedPrice.innerText = discountPrice;
        priceContainer.appendChild(discountedPriceText);
        priceContainer.appendChild(discountedPrice);

        cuponApplyButton.setAttribute("disabled", "disabled");
        cuponDiv.classList.add("hidden");
    }

})


// if Phone number given then next button will be enable.
let phoneNumber = document.getElementById("phoneNumber");
phoneNumber.addEventListener("keyup", function (event) {
    let phoneNumberValue = event.target.value;
    let nextButton = document.getElementById("nextButtonEnable");
    if (phoneNumberValue === true && phoneNumberValue === number) {
        nextButton.removeAttribute("disabled");
    }
    else {
        nextButton.setAttribute("disabled", "disabled");

    }
});
