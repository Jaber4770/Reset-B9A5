// adding ticket on a cart
function addedTicketOnCart() {
    let containerDiv = document.getElementById("fareCalculation");
    let CreatedDiv = document.createElement('div');
    CreatedDiv.classList.add("flex", "justify-between", "py-2");
    let createdP = document.createElement('p');
    createdP.innerText = "C2";
    let createdP2 = document.createElement('p');
    createdP2.innerText = "Economy";
    let createdP3 = document.createElement('p');
    createdP3.innerText = "550";
    CreatedDiv.appendChild(createdP);
    CreatedDiv.appendChild(createdP2);
    CreatedDiv.appendChild(createdP3);
    containerDiv.appendChild(CreatedDiv);
}


// fare calculation 
function fareCalculation() {
    let setTotal = document.getElementById('totalPrice');
    let setGrandTotal = document.getElementById("grandTotalPrice");

    let Total = parseInt(setTotal.innerText);
    let GrandTotal = parseInt(setGrandTotal.innerText);
    Total += 550;
    GrandTotal += 550;

    setTotal.innerText = Total;
    setGrandTotal.innerText = GrandTotal;
}

// Seat Counting
function seatCounting(){
    let seat = document.getElementById('sup-seat-counting');
    let countSeat = parseInt(seat.innerText);

    countSeat += 1;

    seat.innerText = countSeat;

}

// Available Seat

function reduceAvailableSet(){
    let totalAvailableSeat = document.getElementById("available-seat");
    let totalSeat = parseInt(totalAvailableSeat.innerText);
    totalSeat -= 1;
    totalAvailableSeat.innerText = totalSeat;
}

