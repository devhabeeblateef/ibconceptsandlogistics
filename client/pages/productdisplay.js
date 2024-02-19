import React, { useState } from 'react';

const ProductDisplay = () => {
  const products = [
    {
      title: 'Product 1',
      image: '/product1.jpg',
    },
    {
      title: 'Product 1',
      image: '/product2.jpg',
    },
   
    
    // Repeat for products 3 to 10
  ];

  const [currentSlide, setCurrentSlide] = useState(0);

  const nextSlide = () => {
    setCurrentSlide((prevSlide) => (prevSlide + 1) % products.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prevSlide) =>
      prevSlide === 0 ? products.length - 1 : prevSlide - 1
    );
  };

  return (
    <div className="product-display">
    <h1 className='text-2xl text-center mt-8 font-semibold py-6'>Our Works</h1>
      <div className="slides-container">
        {products.map((product, index) => (
          <div
            key={index}
            className={`slide ${index === currentSlide ? 'active' : ''}`}
          >
            <img src={product.image} alt={`Product ${index + 1}`} />
          </div>
        ))}
        <button className="prev-btn" onClick={prevSlide}>
          &lt;
        </button>
        <button className="next-btn" onClick={nextSlide}>
          &gt;
        </button>
      </div>

      <div className="titles-container">
        {products.some((product, index) => (
          <div
            key={index}
            className={`title ${index === currentSlide ? 'active' : ''}`}
          >
            {product.title}
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProductDisplay;
