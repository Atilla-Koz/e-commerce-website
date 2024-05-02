import React from 'react';
import pro from '../../assets/FeaturedProducts/product.png';

const products = [
  {
    category: 'Graphic Design',
    department: 'English Department',
    oldPrice: '$16.48',
    newPrice: '$6.48',
    imageUrl: pro, // Ürün resmi burada atanıyor
  },
  {
    category: 'Graphic Design',
    department: 'English Department',
    oldPrice: '$16.48',
    newPrice: '$6.48',
    imageUrl: pro, // Ürün resmi burada atanıyor
  },
  {
    category: 'Graphic Design',
    department: 'English Department',
    oldPrice: '$16.48',
    newPrice: '$6.48',
    imageUrl: pro, // Ürün resmi burada atanıyor
  },
  {
    category: 'Graphic Design',
    department: 'English Department',
    oldPrice: '$16.48',
    newPrice: '$6.48',
    imageUrl: pro, // Ürün resmi burada atanıyor
  },
  {
    category: 'Graphic Design',
    department: 'English Department',
    oldPrice: '$16.48',
    newPrice: '$6.48',
    imageUrl: pro, // Ürün resmi burada atanıyor
  },
  {
    category: 'Graphic Design',
    department: 'English Department',
    oldPrice: '$16.48',
    newPrice: '$6.48',
    imageUrl: pro, // Ürün resmi burada atanıyor
  },
  {
    category: 'Graphic Design',
    department: 'English Department',
    oldPrice: '$16.48',
    newPrice: '$6.48',
    imageUrl: pro, // Ürün resmi burada atanıyor
  },
  {
    category: 'Graphic Design',
    department: 'English Department',
    oldPrice: '$16.48',
    newPrice: '$6.48',
    imageUrl: pro, // Ürün resmi burada atanıyor
  },
  {
    category: 'Graphic Design',
    department: 'English Department',
    oldPrice: '$16.48',
    newPrice: '$6.48',
    imageUrl: pro, // Ürün resmi burada atanıyor
  },
  {
    category: 'Graphic Design',
    department: 'English Department',
    oldPrice: '$16.48',
    newPrice: '$6.48',
    imageUrl: pro, // Ürün resmi burada atanıyor
  },
  {
    category: 'Graphic Design',
    department: 'English Department',
    oldPrice: '$16.48',
    newPrice: '$6.48',
    imageUrl: pro, // Ürün resmi burada atanıyor
  },
  {
    category: 'Graphic Design',
    department: 'English Department',
    oldPrice: '$16.48',
    newPrice: '$6.48',
    imageUrl: pro,
  },
];

export default function FeaturedProducts() {
  return (
    <section className="flex flex-col items-center pt-16 gap-16  lg:w-full lg:h-[1241]">
      <h3>BESTSELLER PRODUCTS</h3>
      <p className="">Problems trying to resolve the conflict between </p>
      <div className="lg:flex lg:flex-row gap-4 flex-wrap">
        {products.map((product, index) => (
          <div key={index} className="flex flex-col items-center gap-2">
            <img src={product.imageUrl} alt="product" />{' '}
            <h5>{product.category}</h5>
            <a>{product.department}</a>
            <h5 className="text-oldP flex flex-row gap-2">
              {product.oldPrice}{' '}
              <h5 className="text-newP">{product.newPrice}</h5>
            </h5>
          </div>
        ))}
      </div>
      <button className="w-[256px] h-[52px] p-[15px 40px 15px 40px] rounded-md text-click border border-click">
        LOAD MORE PRODUCTS
      </button>
    </section>
  );
}
