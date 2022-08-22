let arr = ["Linh", "Nhi", "Hùng", "Hà", "Mai Anh"];
console.log(arr)
console.log(arr.length)
console.log(arr[2]);
const firstItem = arr.shift()
console.log(firstItem)
const lastItem = arr.pop()
console.log(lastItem)

// In arr ra console

// In ra độ dài (số lượng phần tử) của arr

// In ra phần tử thứ 3 trong mảng

// In ra phần tử đầu tiên trong mảng

// In ra phần tử cuối cùng của mảng

// In ra phần tử có index = -1, chú ý kết quả

// Sử dụng vòng lặp in ra từng giá trị trong arr

// Sử dụng vòng lặp in ra giá trị và chỉ mục tương ứng của giá trị đó trong arr
// Ví dụ:
// Index: 0, Value: 10
// Index: 1, Value: 20
// ...

// Sử dụng vòng lặp in ra giá trị và chỉ mục tương ứng trong arr theo chiều ngược lại (từ cuối mảng)

// Thêm "Ba"  cuối mảng sử dụng phương thức push()

// Thêm "Thảo" vào cuối mảng mà KHÔNG SỬ DỤNG phương thức push()

// Thêm "Béo Ú" vào vị trí đầu tiên trong mảng sử dụng phương thức unshift()

// Xóa phần tử ở vị trí cuối cùng của mảng sử dụng phương thức pop() và in ra giá trị đó

// Xóa phần tử ở vị trí đầu tiên trong mảng sử dụng phương thức shift() va in ra giá trị đó

// Sao chép 2 phần tử đầu tiên sử dụng phương thức slice() và in ra kết quả

// Sao chép toàn bộ phần tử của mảng sử dụng phương thức slice()

// Sao chép 3 phần tử cuối cùng của mảng sử dụng phương thức slice()

// Xóa 2 phần tử thứ 2 và 3 ("Nhi" và "Hùng") khỏi mảng sử dụng phương thức splice()

// Thêm lại "Nhi" và "Hùng" vào vị trí thứ 2 và 3 sử dụng phương thức splice()

// Tìm và in ra chỉ mục của "Ba" ra console sử dụng phương thức indexOf()

// Tìm và in ra chỉ mục của "Thảo" ra console, chú ý kết quả

// Kiểm tra "Mai Anh" có trong mảng arr hay không sử dụng phương thức includes() và in ra kết quả

// Sử dụng alert() in arr, chú ý kết quả

// Nối các tên trong mảng thành một chuỗi sử dụng phương thức join() và in ra console

// Đảo ngược các giá trị trong mảng arr sử dụng phương thức reverse() và in ra kết quả

// Đổi chỗ 2 phần tử đầu và cuối mảng

// Xóa toàn bộ phần tử trong mảng

/**
 * Tính tổng các số trong một mảng
 *
 * @param {number[]} numbers Mảng các số
 *
 * @return {number} Tổng các số trong mảng
 */
function sum(numbers) {
     let sum = 0;

     for (let index = 0; index < numbers.length; index++) {
       sum += numbers[index];
     }

     return sum;
}

console.log(sum(2,3,4,5))
/**
 * Tính trung bình cộng các số trong mảng
 *
 * @param {number[]} numbers Mảng các số
 *
 * @return {number} Trung bình cộng các số trong mảng
 */
function avg(numbers) {}
