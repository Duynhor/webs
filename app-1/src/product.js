function Product(props) {
  return (
    <div className="product">
      <img src={props.image} alt={props.name} className="product-pic" />
      <div className="product-decription">
        <div className="text">{props.name}</div>

        <div className="price">{props.price}</div>
      </div>

      <div className="cart flex">{props.cart}</div>
    </div>
  );
}

export default Product