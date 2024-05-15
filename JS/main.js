// selecting seat 
let buttons = document.querySelectorAll('.seat');
let selectButtonCount = 0;


for (let i = 0; i < buttons.length; i++) {
    let button = buttons[i];
    let clickHandler = function () {
        if (selectButtonCount < 4) {
            button.classList.add("bg-green-700");
            button.classList.add("text-white");

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
    let phoneNumberValue = parseInt(event.target.value);
    let getSeat = document.getElementsByClassName("seat");
    let nextButton = document.getElementById("nextButtonEnable");


let bgGreeen = null;
for(seat of getSeat){
    if(seat.classList.contains("bg-green-700")){
        bgGreeen = seat;
        break;
    }
}

    if (!isNaN(phoneNumberValue )  && bgGreeen) {
        nextButton.classList.remove("button-disable");
        nextButton.removeAttribute("disabled")

        // Ticket purchase Success
        document.getElementById("nextButtonEnable").addEventListener('click', function () {
            let confirmationModalShow = document.getElementById("confirmationModal");
            confirmationModalShow.showModal()

        })

    }
    else {
        nextButton.classList.add("button-disable");
        nextButton.setAttribute("disabled", "disabled");

    }

});






