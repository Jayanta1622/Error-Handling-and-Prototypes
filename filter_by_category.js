function filterByCategory(products) {
  return function (catagory) {
    return products.filter((product) => product.catagory === catagory);
  };
}

let products = [
  { name: "shirt", catagory: "Clothing" },
  { name: "pants", catagory: "Clothing" },
  { name: "Hat", catagory: "Accessories" },
  { name: "shirt", catagory: "Accessories" },
];

let clothingProducts = filterByCategory(products)("Clothing");

console.log(clothingProducts);
