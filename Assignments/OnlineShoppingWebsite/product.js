async function getProduct() {
  try {
    const res = await fetch("https://fakestoreapi.com/products");
    const data = await res.json();

    const productList = document.getElementById("productRow");

    data.forEach((element) => {
      const d = document.createElement("div");
      d.classList.add("col-4");

      d.innerHTML = `
        <div class="p-3 h-100 product-card d-flex flex-column rounded-4">
          <div class="mb-3" style="height:200px">
            <img
              src="${element.image}"
              alt="${element.title}"
              class="w-100 h-100 object-fit-contain"
            />
          </div>

          <div class="fw-bold fs-6">${element.title}</div>
          <div class="text-muted mt-2">
            ${element.rating.rate}/5 (${element.rating.count})
          </div>
          <div class="fw-bold mt-2">₹${(element.price * 100).toFixed(0)}</div>
          <div class="mt-2">${element.description.slice(0, 60)}...</div>

          <a href="checkout.html" class="btn btn-outline-primary mt-auto">
            Buy Now
          </a>
        </div>
      `;

      productList.appendChild(d);
    });
  } catch (error) {
    console.log(error.message);
  }
}

getProduct();
