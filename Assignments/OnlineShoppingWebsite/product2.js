async function getProduct2() {
  try {
    const res = await fetch("https://fakestoreapi.com/products");
    const data = await res.json();

    const productList = document.getElementById("productRow");

    data.forEach((element) => {
      const d = document.createElement("div");
      d.classList.add("col-12");

      d.innerHTML = `
        <div class="p-3 mb-3 product-card d-flex flex-wrap flex-lg-nowrap align-items-start gap-3 rounded-4">
          <div class="product-img flex-shrink-0" style="width: 200px; height: 200px;">
            <img
              src="${element.image}"
              alt="${element.title}"
              class="w-100 h-100 object-fit-contain"
            />
          </div>

          <div class="product-details flex-grow-1 d-flex flex-column">
            <div class="fw-bold fs-5 mb-2 text-truncate" style="max-width:100%;">
              ${element.title}
            </div>
            <div class="text-muted mb-2">${element.rating.rate}/5 (${
        element.rating.count
      })</div>
            <div class="fw-bold mb-2">₹${(element.price * 100).toFixed(0)}</div>
            <div class="mb-2">${element.description.slice(0, 100)}...</div>
            <a href="checkout.html" class="btn btn-outline-primary btn-sm mt-auto">Buy Now</a>
          </div>
        </div>
      `;

      productList.appendChild(d);
    });
  } catch (error) {
    console.log(error.message);
  }
}

getProduct2();
