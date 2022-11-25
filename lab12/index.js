
const self = {
    // thuộc tính
    name: "duy",
    dateOfBirth: "30/06/2003",
    age: 19,
    gender: "Male",
    
    // phương thức
    speak() {
        console.log()
    }
}

console.log(self);

// Dot Notation - obj.key
console.log(self.name)
console.log(self.age)

//  Bracket Notation - obj["key"]

// Tên thuộc tính (key) trong object không bị giới hạn khi đặt tên,
// Cho phép chứa bất cứ kí tự gì
// Lưu trữ dưới dạng chuỗi

// Vẫn nên tuân thủ quy tắc camelCase khi đặt tên thuộc thính
// Ưu tiên sử dụng cú pháp Dot Notation khi try cập giá trị

// Bracket Notation sử dụng trong trường hợp
// sử dụng với biến

// Cho phép ng dùng nhập giá trị 


//  người dùng muốn biết tên => ( key = "name")
// Chú ý ko có dấu nháy"

// Vòng lặp để duyệt qua từng thuộc tính trong object
for (let key in self) {
    console.log( "Key:", key, "Value:", self[key]);
}

self.speak(); 

// this : đối tượng đang thực hiện hành vi
// this : là đốitượng ở trước dấu .

const ba = {
    name: "Ba"
};

const dang = {
    name: "Đăng",
};

