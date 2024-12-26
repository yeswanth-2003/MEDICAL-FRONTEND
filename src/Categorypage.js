
import React, { useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import './Categorypage.css';






function Categorypage() {
  const { category } = useParams(); 
  const [products, setProducts] = useState([]);

  useEffect(() => {
   
    fetch(`https://fakestoreapi.com/products/category/${category}`)
      .then(res => res.json())
      .then(data => setProducts(data))
      .catch(err => console.error('Error fetching products:', err));
  }, [category]);

  if (products.length === 0) return <div>Loading...</div>;

  return (
    <div className="category-page">
      <h2>{category.charAt(0).toUpperCase() + category.slice(1)} Products</h2>
      <div className="product-list">
        {products.map(product => (
          <div key={product.id} className="product-card">
            <img src={product.image} alt={product.title} className="product-image" />
            <h3>{product.title}</h3>
            <p><strong>Price:</strong> ${product.price}</p>
          
          
            <Link to={`/product/${product.id}`} className="view-details">
              View Details
            </Link>
            
          </div>
        ))}
      </div>
    </div>
  );
}

export default Categorypage;