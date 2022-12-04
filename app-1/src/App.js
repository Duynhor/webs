import "./App.css";
import Product from "./product";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
function App() {
  return (
    <div className="container">
      <div className="wrapper">
        <Product
          image="https://paradoxgrooming.com/wp-content/uploads/2021/07/Merlin-24-05-2021-25975-300x300.jpg"
          name="Dưỡng ẩm – Làm Trắng Da Merlin Care+"
          price="380.000 ₫"
          cart="Thêm vào giỏ hàng"
        />
        <Product
          image="https://paradoxgrooming.com/wp-content/uploads/2021/03/IMG_5359-scaled-1-300x300.jpg"
          name="Sáp vuốt tóc Dapper Dan Deluxe Pomade"
          price="450.000 ₫"
          cart="Thêm vào giỏ hàng"
        />
        <Product
          image="https://paradoxgrooming.com/wp-content/uploads/2021/03/Dau-duong-toc-argan-oil-nguyen-chat-scaled-1-300x300.jpg"
          name="Dầu dưỡng Argan Oil nguyên chất ép lạnh"
          price="320.000 ₫"
          cart="Thêm vào giỏ hàng"
        />
      </div>
      <div className="olala">5.h.0.P.E.e version</div>
      <FontAwesomeIcon icon="fa-sharp fa-solid fa-house" />
    </div>
  );
}

export default App;
