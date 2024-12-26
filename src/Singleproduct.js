import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';

function Singleproduct() {
  const { productId } = useParams();
  const [product, setProduct] = useState(null);

  useEffect(() => {
    const fetchProduct = async () => {
      const response = await fetch(`https://fakestoreapi.com/products/${productId}`);
      const data = await response.json();
      setProduct(data);
    };

    fetchProduct();
  }, [productId]);

  if (!product) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      <h2>{product.title}</h2>
      <p>{product.description}</p>
     
    </div>
  );
}

export default Singleproduct;