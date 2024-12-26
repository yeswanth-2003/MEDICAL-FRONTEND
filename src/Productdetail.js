import React, { useEffect, useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import './Productdetails.css';

function Productdetail() {
  const { id } = useParams();
  const [product, setProduct] = useState(null);

  useEffect(() => {


   
    fetch(`https://fakestoreapi.com/products/${id}`)
      .then(res => res.json())
      .then(data => setProduct(data))
      .catch(err => console.error('Error fetching product:', err));
  }, [id]);

  if (!product) return <div>Loading...</div>;

  

  return (
    <div className="product-detail">
      <h2>{product.title}</h2>
      <img src={product.image} alt={product.title} className="product-image" />
      <p>{product.description}</p>
      <p><strong>Price:</strong> ${product.price}</p>
      <p><strong>Category:</strong> {product.category}</p>

    
      <Link to={`/category/${product.category}`} className="back-to-category">
        Back to {product.category} Products
      </Link>
    </div>
  );
}

export default Productdetail;
