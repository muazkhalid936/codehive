import React from 'react';
import NavbarPages from '../../../../components/NavbarPages';
import Hero from '../../../../components/Hero';
import SuccessMarquee from '../../../../components/SuccessMarquee';
import Banner from '../../../../components/Banner';
const page = async ({ params }) => {
  const slug = await params.slug;

  return (
    <div>
      <NavbarPages />
    </div>
  );
};

export default page;
