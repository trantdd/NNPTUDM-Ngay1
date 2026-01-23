# Trần Trung Dũng - 2280600423

## Bài Tập JavaScript - Quản Lý Sản Phẩm

### Mô Tả

Bài tập này sử dụng các kiến thức nền tảng JavaScript để quản lý danh sách sản phẩm, bao gồm:

- Constructor function
- Array methods (map, filter, some, every, reduce)
- Vòng lặp (for...of, for...in)

---

### Cách Giải Chi Tiết

#### **Câu 1: Constructor Function Product**

```javascript
function Product(id, name, price, quantity, category, isAvailable) {
  this.id = id;
  this.name = name;
  this.price = price;
  this.quantity = quantity;
  this.category = category;
  this.isAvailable = isAvailable;
}
```

- Tạo function để định nghĩa cấu trúc object sản phẩm
- Dùng `this` để gán giá trị cho từng thuộc tính

#### **Câu 2: Khởi Tạo Mảng Products**

```javascript
const products = [
  new Product(1, "iPhone 15 Pro Max", 35000000, 10, "Điện thoại", true),
  new Product(2, "Samsung Galaxy S24", 28000000, 5, "Điện thoại", true),
  // ... tối thiểu 6 sản phẩm, 2+ danh mục khác nhau
];
```

- Tạo mảng chứa ít nhất 6 sản phẩm
- Có ít nhất 2 danh mục khác nhau (Điện thoại, Laptop, Accessories, v.v.)

#### **Câu 3: Map - Tạo Mảng Mới Với name và price**

```javascript
const nameAndPriceArray = products.map((product) => {
  return { name: product.name, price: product.price };
});
```

- `map()` tạo mảng mới từ mảng cũ
- Dùng arrow function để trích xuất chỉ `name` và `price`

#### **Câu 4: Filter - Lọc Sản Phẩm Còn Hàng**

```javascript
const inStockProducts = products.filter((product) => product.quantity > 0);
```

- `filter()` trả về mảng các phần tử thỏa điều kiện
- Điều kiện: `quantity > 0` (còn hàng)

#### **Câu 5: Some - Kiểm Tra Có Sản Phẩm Đắt Tiền**

```javascript
const hasExpensiveProduct = products.some(
  (product) => product.price > 30000000,
);
```

- `some()` trả về `true` nếu **ít nhất một** phần tử thỏa điều kiện
- Kiểm tra xem có sản phẩm giá > 30 triệu không

#### **Câu 6: Every - Kiểm Tra Tất Cả Accessories Đang Bán**

```javascript
const allAccessoriesAvailable = products
  .filter((product) => product.category === "Accessories")
  .every((product) => product.isAvailable === true);
```

- `filter()` lọc chỉ các sản phẩm Accessories
- `every()` kiểm tra xem **tất cả** các sản phẩm đó có `isAvailable = true`

#### **Câu 7: Reduce - Tính Tổng Giá Trị Kho**

```javascript
const totalInventoryValue = products.reduce((total, product) => {
  return total + product.price * product.quantity;
}, 0);
```

- `reduce()` gom giá trị tất cả phần tử thành 1 giá trị duy nhất
- Công thức: `price × quantity` cho từng sản phẩm, cộng dồn vào `total`
- Giá trị khởi tạo: `0`

#### **Câu 8: for...of - Duyệt Mảng và In Thông Tin**

```javascript
for (const product of products) {
  const trangThai = product.isAvailable ? "Đang bán" : "Ngưng bán";
  console.log(`${product.name} - ${product.category} - ${trangThai}`);
}
```

- `for...of` duyệt qua từng **phần tử** trong mảng
- `product` là object hiện tại trong vòng lặp
- Sử dụng ternary operator để xác định trạng thái

#### **Câu 9: for...in - Duyệt Các Thuộc Tính của Object**

```javascript
for (const key in products[2]) {
  console.log(`${key}: ${products[2][key]}`);
}
```

- `for...in` duyệt qua từng **key/property** của object
- `key` là tên thuộc tính: "id", "name", "price", v.v.
- `products[2][key]` là giá trị của thuộc tính đó

**Sự khác biệt for...of vs for...in:**

- `for...of`: duyệt **giá trị** (items)
- `for...in`: duyệt **key/property** (thuộc tính)

#### **Câu 10: Kết Hợp Filter và Map**

```javascript
const availableInStockNames = products
  .filter((product) => product.isAvailable === true && product.quantity > 0)
  .map((product) => product.name);
```

- `filter()`: chỉ lấy sản phẩm đang bán (`isAvailable = true`) và còn hàng (`quantity > 0`)
- `map()`: trích xuất chỉ tên sản phẩm

---

### Cách Chạy

**Cách 1: Nhấn Run Code (nhanh nhất)**

- Mở file `baitap.js`
- Nhấn nút "Run Code"

**Cách 2: Dùng Terminal**

```bash
node baitap.js
```

Sẽ in ra kết quả của tất cả 10 câu
