let total = 0;
let billText = "";

function addItem(name, price) {
  let list = document.getElementById("billList");
  let li = document.createElement("li");
  li.innerText = name + " - ₹" + price;
  list.appendChild(li);

  total += price;
  document.getElementById("total").innerText = total;

  billText += `${name} - ₹${price}\n`;
}

function sendBill() {
  let phone = "919876543210";
  let message = `🧾 SwadBill Restaurant Bill\n\n${billText}\n💰 Total: ₹${total}`;

  let url = `https://wa.me/${phone}?text=${encodeURIComponent(message)}`;
  window.open(url, '_blank');
}
