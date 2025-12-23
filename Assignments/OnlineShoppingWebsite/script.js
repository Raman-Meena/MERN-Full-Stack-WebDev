function selectProduct(name, brand, price) {
  console.log("Selected Product:", { name, brand, price });
}

document
  .getElementById("checkoutForm")
  ?.addEventListener("submit", function (e) {
    e.preventDefault();
    const name = document.getElementById("name").value;
    alert(`Thank you for Shopping, ${name}!`);
    console.log("Checkout Successful");
    this.reset();
  });

document
  .getElementById("contactForm")
  ?.addEventListener("submit", function (e) {
    e.preventDefault();
    const name = document.getElementById("cname").value;
    alert(`Thank you for contacting us, ${name}!`);
    this.reset();
  });
