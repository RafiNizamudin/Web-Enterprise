import './ProductCard.css'

type ProductCardProps = {
  image: string;
  name: string;
  price: number;
};

export default function ProductCard({ image, name, price }: ProductCardProps) {
  return (
    <div className="product-card">
      <img src={image} alt={name} className="product-image" />
      <div className="product-info">
        <h3 className="product-name">{name}</h3>
        <p className="product-price">Rp. {price.toLocaleString('id-ID')}</p>
      </div>
    </div>
  );
}
