const data = [
  {
    slug: "1",
    cover:
      "https://s199.imacdn.com/vg/2022/09/10/7201647c8c712ad3_ecc187d64ed4c335_3053716627878017118684.jpg",
    title: "Hataraku Maou-sama!",
    episode: "Tâp 22",
    views: "1,393",
  },
  {
    slug: "2",
    cover:
      "https://s199.imacdn.com/vg/2022/06/07/9c540141ae3d7f05_a84d0e5d4d64dceb_34442165459032279674.jpg",
    title: "Kumichou Musume to Sewagakari",
    episode: "Tập 10",
    views: "1,355",
  },
  {
    slug: "3",
    cover:
      "https://s199.imacdn.com/vg/2022/09/08/c7a821c0039376be_3735a9899d4994b2_2025416626135104118684.jpg",
    title: "Summertime Render",
    episode: "Tập 21",
    views: "3,293",
  },
  {
    slug: "4",
    cover:
      "https://s199.imacdn.com/vg/2022/09/08/3c2ff608c4b04a67_ba62488d3167f11d_3138616626131586118684.jpg",
    title: "Isekai Ojisan",
    episode: "Tập 7",
    views: "4,802",
  },
];

// Tạo giao diện tĩnh
// Lắp ghép data và render giao diện tĩnh

// Cách dễ dùng innerHTML
function createEpisode(item) {
  return `
     
              <div class="movie">
                <div class="movie-thumbnail">
                  <img
                    src="${item.cover}"
                    alt="${item.title}"
                  />
                </div>

                <div class="movie-decription">
                  <div class="movie-title">${item.title}</div>
                  <div class="movie-meta-info">
                    <div class="movie-episode">${item.episode}</div>

                    <div class="episode-views">${item.views}</div>
                  </div>
                </div>
              </div>
                   
    `;
}

// Chuyển đỏi dữ liệu thành HTMl
document.querySelector(".list-movie").innerHTML = data
  .map(createEpisode)
  .join("");

function handleClick() {
  alert("hail duynhor");
}

//3 cách để chỉ định nghĩa handler cho event
// 1. Gán thông qua thuộc tính sự kiện của thẻ
// 2. Gán thông qua thuộc tính DOM
// 3. Gán thông qua phương thức addEventListener

// Sự kiện xảy khi toàn bộ nội dung HTML được tải xong ↓ ↓ ↓
window.onload = function () {
  console.log();
};

// Sự kiện xảy ra khi kích thước trang bị thay đổi
window.onresize = function () {
  console.log();
};

const selectBox = document.getElementById("select");

selectBox.addEventListener("change", function () {
  console.log(selectBox.value);
});
