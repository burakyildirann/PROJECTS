import '../css/ProductCard.css';
import { Button } from "@mui/material";
import { Link } from "react-router-dom";

function ProductCard({ product }) {

  const { image, title, description, price, id } = product;

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

        <Button 
          component={Link} 
          to={`/product/${id}`}
          variant="contained"
        >
          Detaya Git
        </Button>

      </div>

    </div>
  );
}

export default ProductCard;