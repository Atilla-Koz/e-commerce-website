import pro from '../../assets/FeaturedProducts/product.png';
export default function ShopProductCards() {
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
  return (
    <section className="flex flex-col items-center pt-16 gap-16  lg:w-full lg:h-[1241]">
      <div className="lg:flex lg:flex-row justify-center gap-4 flex-wrap">
        {products.map((product, index) => (
          <div key={index} className="flex flex-col items-center gap-2">
            <img src={product.imageUrl} alt="product" />{' '}
            <h5>{product.category}</h5>
            <a>{product.department}</a>
            <h5 className="text-oldP flex flex-row gap-2">
              {product.oldPrice}{' '}
              <h5 className="text-newP">{product.newPrice}</h5>
            </h5>
            <section className="flex flex-row gap-2 pb-[2rem]">
              <div className="w-[16px] h-[16px] bg-click rounded-full"></div>
              <div className="w-[16px] h-[16px] bg-[#23856D] rounded-full"></div>
              <div className="w-[16px] h-[16px] bg-[#E77C40] rounded-full"></div>
              <div className="w-[16px] h-[16px] bg-[#252B42] rounded-full"></div>
            </section>
          </div>
        ))}
      </div>
      <div className="flex flex-row justify-center w-[312px] h-[74px] ">
        <button className="w-[83px]d h-[74px] border border-softText bg-[#BDBDBD] text-softText">
          First
        </button>
        <button className="w-[46px]d h-[74px] border border-softText bg-white text-click">
          1
        </button>
        <button className="w-[46px]d h-[74px] border border-softText bg-click text-white">
          2
        </button>
        <button className="w-[46px]d h-[74px] border border-softText bg-white text-click">
          3
        </button>
        <button className="w-[83px]d h-[74px] border border-softText bg-white text-click">
          Next
        </button>
      </div>
    </section>
  );
}
