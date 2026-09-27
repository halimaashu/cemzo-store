import React from 'react';
import Banner from './components/Banner';
import FeaturedProducts from './components/FeaturedProducts';
import ContactPage from './contact/page';

const page = () => {
  return (
    <div>
     <Banner/>
     <FeaturedProducts/>
     <ContactPage/>
    </div>
  );
};

export default page;