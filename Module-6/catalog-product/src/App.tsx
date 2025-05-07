import ProductCard from './components/ProductCard'
import './App.css'

function App() {
  const products = [
    {
      image: 'http://localhost:5173/ginjal.svg',
      name: 'Ginjal Manusia',
      price: 3500000000
    },
    {
      image: 'http://localhost:5173/Indonesia.svg',
      name: 'Negara Indonesia',
      price: 10000
    }
  ]

  return (
    <div className="catalog-container">
      {products.map((p, index) => (
        <ProductCard key={index} image={p.image} name={p.name} price={p.price} />
      ))}
    </div>
  )
}

export default App
