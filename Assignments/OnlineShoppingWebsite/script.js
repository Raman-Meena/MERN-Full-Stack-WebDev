document
  .getElementById("checkoutForm")
  ?.addEventListener("submit", function (e) {
    e.preventDefault();
    const name = document.getElementById("name").value;
    const address = document.getElementById("address").value;
    const phone = document.getElementById("phone").value;
    const em = document.getElementById("email").value;
    const mop = document.getElementById("payment").value;
    const qnty = document.getElementById("quantity").value;
    
    console.log({
      Name: name,
      Address: address,
      Phone: phone,
      Email: em,
      Payment: mop,
      Quantity: qnty,
    });

    alert(`Thank you for Shopping, ${name}!`);
    console.log("Checkout Successful");
    this.reset();
  });

document
  .getElementById("contactForm")
  ?.addEventListener("submit", function (e) {
    e.preventDefault();
    const name = document.getElementById("cname").value;
    const cem = document.getElementById("cemail").value;
    const msg = document.getElementById("message").value;

    console.log({
      Name: name,
      Email: cem,
      Message: msg,
    });
    alert(`Thank you for contacting us, ${name}!`);
    this.reset();
  });
