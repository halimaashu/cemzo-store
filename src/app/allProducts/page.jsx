import React from 'react';
import ComponentCard from '../components/ui/ComponentCard';

const AllProductsPage =async () => {
      let products=[]
  try{
  const data = await fetch("https://dummyjson.com/products");
  const results = await data.json();
  products=results.products;
  }catch(error){
    console.log(error)
  }
  
console.log(products,"from featured pages")
  const allProducts =products;
  console.log(allProducts,"from all products pages")
    return (
        <div>
           <div className="flex justify-center text-center items-center mt-10 mb-15">
           <div className="flex-1">
              <h1 className='text-5xl md:text-6xl leading-tight font-black bg-clip-text text-transparent bg-gradient-to-r from-[#4338CA] to-[#7C3AED]'>Explore All Products</h1>
            <p className='text-lg md:text-xl font-medium text-gray-600 w-11/12 text-center p-4'>Discover a wide range of products from beauty and fashion to electronics and furniture.  Find the perfect product with our smart search experience.</p>
           </div>
           {/* search box */}
           
           </div>

           <div className="bg-[#EEF2FF] grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4  2xl:grid-cols-5 gap-5 mx-auto px-10 py-5">
        {
            allProducts.map(pd=> <ComponentCard key={pd.id} product={pd}/>)
        }

      </div>
        </div>
    );
};

export default AllProductsPage;