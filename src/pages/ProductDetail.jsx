import { useSelector } from "react-redux";
import { useParams } from "react-router-dom";

function ProductDetail() {
  const { id } = useParams();

  const { products, loading } = useSelector((state) => state.product);

  if (loading) {
    return <h2>Yükleniyor...</h2>;
  }

  const product = products.find(p => p.id === Number(id));

  if (!product) {
    return <h2>Ürün bulunamadı</h2>;
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