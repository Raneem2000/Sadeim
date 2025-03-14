import React from 'react';
import { MdSearch } from 'react-icons/md';

const ThirdSection = () => {
  return (
    <div>
      <div className="rounded-lg  border border-stroke bg-white py-1 shadow-sm dark:border-strokedark dark:bg-boxdark">
        <div className="flex flex-col gap-1">
          <div className="border-b border-stroke"></div>
          <div className="relative w-full px-4">
            <MdSearch
              className="absolute left-6 top-1/2 -translate-y-1/2 text-gray"
              size={20}
            />
            <input
              type="text"
              placeholder="Search anything here...."
              className="w-full font-light text-sm pl-8 pr-4 py-1.5 rounded-lg bg-white text-[#A5A5A5] border border-gray focus:outline-none focus:ring-2 focus:ring-primary"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default ThirdSection;
