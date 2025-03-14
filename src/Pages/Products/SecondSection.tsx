import React from 'react';
import img1 from '../../assets/icons/total.svg';
import img2 from '../../assets/icons/pendding.svg';
import img3 from '../../assets/icons/completed.svg';
import img4 from '../../assets/icons/cancel.svg';

const data = [
  {
    icon: img1, // المسار المحلي للأيقونة
    title: 'Total Order',
    subtitle1: '100$ ',
    subtitle2: 'last 365 days ',
  },
  {
    icon: img2,
    title: 'Pending',
    subtitle1: '100$ ',
    subtitle2: 'last 365 days ',
  },
  {
    icon: img3,
    title: 'Completed',
    subtitle1: '100$ ',
    subtitle2: 'last 365 days ',
  },
  {
    icon: img4,
    title: 'Canceled',
    subtitle1: '100$ ',
    subtitle2: 'last 365 days ',
  },
];

const SecondSection = () => {
  return (
    <div className="grid grid-cols-2 sm:grid-cols-4 gap-2">
      {data.map((item, index) => (
        <div
          key={index}
          className="rounded-lg border h-[108px] border-stroke bg-white p-5 shadow-sm dark:border-strokedark dark:bg-boxdark"
        >
          <div className="flex items-start gap-2  justify-center">
            <img src={item.icon} alt={item.title} className="w-5 h-5" />
            <div className="space-y-0.5">
              <span className="text-sm font-medium text-primary dark:text-white">
                {item.title}
              </span>
              <span className="block font-bold text-md text-[#606060] dark:text-gray-300">
                {item.subtitle1}
              </span>
              <span className="block text-xs text-[#B8B8B8] dark:text-gray-300">
                {item.subtitle2}
              </span>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default SecondSection;
