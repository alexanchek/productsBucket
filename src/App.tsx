import Products from './components/Products/Products';
import { useProducts } from './hooks/useProducts';

const App = () => {

  const { error, loading, products } = useProducts();


  return (
    <div className='container mx-auto max-w-2xl pt-5'>

      {loading && <div>Loading...</div>}
      {error && <div>Произошла ошибка!</div>}
      {!loading &&
        <Products products={products} />}
    </div>
  )
}

export default App;
