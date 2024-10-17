'use client'
import CardItem from '@/@core/components/card-item';
import NotFound from '@/@core/components/not-found';
import SearchInput from '@/@core/components/search-input';
import { TProduct } from '@/@core/types/products/index.types';
import { useState, useEffect } from 'react';



const ProductList = () => {
  const [query, setQuery] = useState<string>('');
  const [products, setProducts] = useState<TProduct[]>([]);
  const [loading, setLoading] = useState<boolean>(false);

  useEffect(() => {
    if (query.length === 0) {
      setProducts([]);
      return;
    }

    const fetchProducts = async () => {
      setLoading(true);
      try {
        const res = await fetch(`/api/products?q=${query}`);

        const data = await res.json();
        const products = data.products?.products;
        setProducts(products);
      } catch (error) {
        console.error('Error fetching products:', error);
        setProducts([]);
      } finally {
        setLoading(false); // Stop loading
      }
    };

    // Debouncing the API call to avoid too many requests
    const debounceFetch = setTimeout(() => {
      fetchProducts();
    }, 500); // Wait for 500ms before making the request

    return () => clearTimeout(debounceFetch); // Cleanup the timeout when query changes
  }, [query]);

  return (
    <div className='px-[10vw] 2xl:px-[20vw] w-screen mb-16'>
      <SearchInput
        type="text"
        placeholder="Search keyword"
        value={query}
        onChange={(e) => setQuery(e.target.value)} // Update query on input change
        productsCount={products.length}
      />



      {loading && <p className='m-auto'>Loading...</p>}


      <div className={` ${products.length > 0 ? 'grid': 'flex'} grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3 2xl:grid-cols-4`}>
        {products.length > 0 ? (
          products.map((product) => (
            <CardItem
              key={product.title}
              product={product}
            />

          ))
        ) : (
          query && !loading && 
            <NotFound />
        )}
      </div>

    </div>
  );
};

export default ProductList;
