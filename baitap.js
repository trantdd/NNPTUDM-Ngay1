// Câu 1: Khai báo constructor function Product để tạo đối tượng sản phẩm
function Product(id, name, price, quantity, category, isAvailable) {
  this.id = id;
  this.name = name;
  this.price = price;
  this.quantity = quantity;
  this.category = category;
  this.isAvailable = isAvailable;
}

// Câu 2: Khởi tạo mảng products gồm ít nhất 6 sản phẩm, thuộc tối thiểu 2 danh mục khác nhau
const products = [
  new Product(1, "iPhone 15 Pro Max", 35000000, 10, "Điện thoại", true),
  new Product(2, "Samsung Galaxy S24", 28000000, 5, "Điện thoại", true),
  new Product(3, "MacBook Pro M3", 45000000, 3, "Laptop", true),
  new Product(4, "AirPods Pro", 5000000, 0, "Accessories", false),
  new Product(5, "Samsung Watch 6", 7000000, 8, "Accessories", true),
  new Product(6, "Dell XPS 15", 32000000, 2, "Laptop", true),
  new Product(7, "iPad Air", 15000000, 6, "Máy tính bảng", true),
  new Product(8, "Chuột Logitech MX Master", 2000000, 15, "Accessories", true),
];

console.log("Câu 2: DANH SÁCH SẢN PHẨM ");
console.log(products);
console.log("\n");

// Câu 3: Tạo mảng mới chỉ chứa name và price của mỗi sản phẩm
console.log("Câu 3: MẢNG CHỈ CHỨA NAME VÀ PRICE");
const nameAndPriceArray = products.map((product) => {
  return {
    name: product.name,
    price: product.price,
  };
});
console.log(nameAndPriceArray);
console.log("\n");

// Câu 4: Lọc ra các sản phẩm còn hàng trong kho (quantity > 0)
console.log("Câu 4: SẢN PHẨM CÒN HÀNG TRONG KHO");
const inStockProducts = products.filter((product) => product.quantity > 0);
console.log(inStockProducts);
console.log("\n");

// Câu 5: Kiểm tra xem có ít nhất một sản phẩm có giá trên 30.000.000 hay không
console.log("Câu 5: KIỂM TRA SẢN PHẨM GIÁ > 30.000.000");
const hasExpensiveProduct = products.some(
  (product) => product.price > 30000000,
);
console.log(
  "Có ít nhất một sản phẩm giá trên 30.000.000:",
  hasExpensiveProduct,
);
console.log("\n");

// Câu 6: Kiểm tra xem tất cả sản phẩm thuộc danh mục "Accessories" có đang được bán (isAvailable = true) hay không
console.log("Câu 6: KIỂM TRA ACCESSORIES CÓ ĐANG BÁN");
const allAccessoriesAvailable = products
  .filter((product) => product.category === "Accessories")
  .every((product) => product.isAvailable === true);
console.log(
  "Tất cả sản phẩm Accessories đang được bán:",
  allAccessoriesAvailable,
);
console.log("\n");

// Câu 7: Tính tổng giá trị kho hàng. Giá trị kho = price × quantity
console.log("Câu 7: TỔNG GIÁ TRỊ KHO HÀNG");
const totalInventoryValue = products.reduce((total, product) => {
  return total + product.price * product.quantity;
}, 0);
console.log(
  "Tổng giá trị kho hàng:",
  totalInventoryValue.toLocaleString("vi-VN"),
  "VNĐ",
);
console.log("\n");

// Câu 8: Dùng for...of duyệt mảng products và in ra: Tên sản phẩm - Danh mục - Trạng thái
console.log("Câu 8: DÙNG FOR...OF DUYỆT MẢNG");
for (const product of products) {
  const trangThai = product.isAvailable ? "Đang bán" : "Ngưng bán";
  console.log(`${product.name} - ${product.category} - ${trangThai}`);
}
console.log("\n");

// Câu 9: Dùng for...in để in ra tên thuộc tính và giá trị tương ứng
console.log("Câu 9: DÙNG FOR...IN");
console.log("--- In ra tên thuộc tính ---");
for (const key in products[2]) {
  console.log(key);
}

console.log("\n--- In ra giá trị tương ứng ---");
for (const key in products[2]) {
  console.log(`${key}: ${products[2][key]}`);
}
console.log("\n");

// Câu 10: Lấy danh sách tên các sản phẩm đang bán và còn hàng
console.log("Câu 10: TÊN SẢN PHẨM ĐANG BÁN VÀ CÒN HÀNG");
const availableInStockNames = products
  .filter((product) => product.isAvailable === true && product.quantity > 0)
  .map((product) => product.name);
console.log(availableInStockNames);
