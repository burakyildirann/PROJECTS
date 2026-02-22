import '../css/ProductCard.css';

function ProductCard({ product }) {

  const { image, title, description, price } = product;

  return (
    <div className="product-card">

      <div className="card-image">
        <img src={image} alt={title} />
      </div>

      <div className="card-body">
        <h3 className="card-title">{title}</h3>
        <p className="card-desc">{description}</p>
      </div>

      <div className="card-footer">
        <span className="card-price">{price} ₺</span>
        <button className="card-btn">Detayına Git</button>
      </div>

    </div>
  );
}

export default ProductCard;