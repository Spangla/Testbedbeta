function calculate() {
  const metres = parseFloat(document.getElementById("metres").value) || 0;
  const rate = parseFloat(document.getElementById("product").value);

  // Pump buttons
  const pumpRequired = document.getElementById("pumpButton").classList.contains("active");
  const pumpLongRequired = document.getElementById("longPumpButton").classList.contains("active");

  // Delivery + waiting toggles
  const customDeliveryToggle = document.getElementById("customDeliveryToggle").checked;
  const customDelivery = parseFloat(document.getElementById("customDelivery").value) || 0;
  const waitingToggle = document.getElementById("waitingToggle").checked;
  const waitingMinutes = parseInt(document.getElementById("waitingMinutes").value) || 0;

  // Material cost
  let materialCost = metres * rate;

  // 🚚 Updated delivery cost bands
  let deliveryCost = 0;
  if (customDeliveryToggle) {
    deliveryCost = customDelivery;
  } else {
    if (metres <= 2) deliveryCost = 90;
    else if (metres <= 4) deliveryCost = 80;
    else if (metres <= 6) deliveryCost = 70;
    else if (metres <= 10) deliveryCost = 50;
    else deliveryCost = 0; // Optional: free delivery or adjust if needed
  }

  // Pump costs
  let pumpCost = pumpRequired ? 350 : 0;
  let pumpCostLong = pumpLongRequired ? 400 : 0;

  // Waiting time
  let waitingCost = 0;
  if (waitingToggle) {
    if (metres <= 3) {
      if (waitingMinutes > 30) {
        waitingCost = 25 + Math.floor((waitingMinutes - 30) / 15) * 25;
      }
    } else {
      if (waitingMinutes > 45) {
        waitingCost = 25 + Math.floor((waitingMinutes - 45) / 15) * 25;
      }
    }
  }

  // Totals
  let subtotal = materialCost + deliveryCost + pumpCost + pumpCostLong + waitingCost;
  let vat = subtotal * 0.2;
  let total = subtotal + vat;

  // Display
  let results = "----------------------------\n";
  results += `Material Cost: £${materialCost.toFixed(2)}\n`;
  results += `Delivery: £${deliveryCost.toFixed(2)}\n`;
  if (pumpRequired) results += `Pump: £${pumpCost.toFixed(2)}\n`;
  if (pumpLongRequired) results += `Long Run: £${pumpCostLong.toFixed(2)}\n`;
  if (waitingToggle) results += `Waiting Time: £${waitingCost.toFixed(2)}\n`;
  results += `Subtotal: £${subtotal.toFixed(2)}\n`;
  results += `VAT: £${vat.toFixed(2)}\n`;
  results += `Total: £${total.toFixed(2)}\n`;
  results += "----------------------------";

  document.getElementById("results").textContent = results;
}

// Toggle custom delivery visibility
document.getElementById("customDeliveryToggle").addEventListener("change", function () {
  document.getElementById("customDelivery").style.display = this.checked ? "block" : "none";
});

// Toggle waiting time visibility
document.getElementById("waitingToggle").addEventListener("change", function () {
  document.getElementById("waitingMinutes").style.display = this.checked ? "block" : "none";
});

// Pump button toggle logic
const pumpButton = document.getElementById("pumpButton");
const longPumpButton = document.getElementById("longPumpButton");

pumpButton.addEventListener("click", function () {
  const isActive = this.classList.contains("active");
  this.classList.toggle("active", !isActive);
  longPumpButton.classList.remove("active");
});

longPumpButton.addEventListener("click", function () {
  const isActive = this.classList.contains("active");
  this.classList.toggle("active", !isActive);
  pumpButton.classList.remove("active");
});
