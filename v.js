document.addEventListener("DOMContentLoaded", () => {
    // Menu responsive toggle
    const menuIcon = document.querySelector("#menuicon");
    const menu = document.querySelector("#menu");

    if (menuIcon && menu) {
        menuIcon.addEventListener("click", () => { 
            menu.classList.toggle("hidden");
        });
    } else {
        console.error("Menu elements not found!");
    }

    // Sliction of all products
    const products = [
        { Image: "book2.jpg", name: "Arabic", price: 60 },
        { Image: "book3.jpg", name: "Soomai", price: 69 },
        { Image: "book4.jpg", name: "English", price: 66 }
    ];

    const productContainer = document.querySelector("#productContainers");

    if (!productContainer) {
        console.error("Element with ID 'productContainer' not found!");
        return;
    }

    products.forEach((product) => {
        const productHtml = `
            <div class="shadow-lg px-4 py-5 bg-gray-100">
                <img class="w-full" src="${product.Image}" alt="${product.name}">
                <h3>${product.name}</h3>
                <h3>$${product.price}</h3>
                <button class="bg-[#E2FE26] rounded-full px-4 py-2">Buy Now</button>
            </div>
        `;
        productContainer.innerHTML += productHtml;
    });
});
