import { Link } from 'react-router-dom/cjs/react-router-dom.min';
import catal from '../../assets/ProductDetail/catal.png';

export default function ProductBestseller() {
  // Ürün verilerini bir dizi içinde saklayalım
  const products = [
    {
      name: 'Graphic Design',
      department: 'English Department',
      price: '$16.48',
      discountedPrice: '$6.48',
    },
    {
      name: 'Graphic Design',
      department: 'English Department',
      price: '$16.48',
      discountedPrice: '$6.48',
    },
    {
      name: 'Graphic Design',
      department: 'English Department',
      price: '$16.48',
      discountedPrice: '$6.48',
    },
    {
      name: 'Graphic Design',
      department: 'English Department',
      price: '$16.48',
      discountedPrice: '$6.48',
    },
    {
      name: 'Graphic Design',
      department: 'English Department',
      price: '$16.48',
      discountedPrice: '$6.48',
    },
    {
      name: 'Graphic Design',
      department: 'English Department',
      price: '$16.48',
      discountedPrice: '$6.48',
    },
    {
      name: 'Graphic Design',
      department: 'English Department',
      price: '$16.48',
      discountedPrice: '$6.48',
    },
    {
      name: 'Graphic Design',
      department: 'English Department',
      price: '$16.48',
      discountedPrice: '$6.48',
    },
  ];

  return (
    <section className="flex flex-col items-center gap-8  ">
      <h3>BESTSELLER PRODUCTS</h3>
      <div className="lg:flex lg:flex-row lg:flex-wrap lg:justify-center gap-8">
        {/* Ürünlerin listesini haritalayalım */}
        {products.map((product, index) => (
          <div key={index} className="">
            <img src={catal} alt={`Product ${index}`} />

            <div className="flex flex-col items-start gap-4 w-[75%]">
              <h5>{product.name}</h5>
              <Link>{product.department}</Link>
              <span className="flex flex-row gap-4">
                <h5 className="text-softText">{product.price}</h5>
                <h5 className="text-newP">{product.discountedPrice}</h5>
              </span>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
