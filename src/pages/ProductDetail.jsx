import { useSelector } from "react-redux";
import { useParams } from "react-router-dom";

function ProductDetail() {

  const { id } = useParams();

  const { products, loading } = useSelector((state) => state.product);

  const product = products.find(product=> product.id === Number(id));

  if (loading) {
    return <h2>Loading...</h2>;
  }

  if (!product) {
    return <h2>Product not found</h2>;
  }
   return (
    <div>
      <h1>{product.title}</h1>
      <img src={product.image} width="200" />
      <p>{product.description}</p>
      <h3>{product.price} ₺</h3>
      <div>
        <button>sepete ekle</button>
      </div>
    </div>
    
  );
}

export default ProductDetail;