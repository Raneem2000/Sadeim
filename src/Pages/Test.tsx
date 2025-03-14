import React from 'react';
import DefaultLayout from '../layout/DefaultLayout';
import FirstCard from './Products/FirstSection';
import SecondSection from './Products/SecondSection';
import ThirdSection from './Products/ThirdSection';

const Test = () => {
  return (
    <DefaultLayout>
      <div className="flex flex-col gap-4">
        <FirstCard />
        <SecondSection />
        {/* <ThirdSection/> */}
      </div>
    </DefaultLayout>
  );
};

export default Test;
