import React, { useState } from 'react';
import { FaChevronDown, FaFilter } from 'react-icons/fa';
import { MdSearch } from 'react-icons/md';
import filter from '../../assets/icons/Filter.svg';
import Table from '../../components/Table';
const ThirdSection = () => {
  const columns = [
    { key: 'order', label: 'Order Number' },
    { key: 'date', label: 'Date' },
    { key: 'status', label: 'Status' },
    { key: 'payment', label: 'Payment Status' },
    { key: 'amount', label: 'Amount' },
    { key: 'action', label: 'Actions' },
  ];
  const data = [
    {
      order: { value: '#12345' },
      date: { value: '2024-03-14' },
      status: {
        value: 'Complete',
      },
      payment: {
        value: 'Paid',
      },
      amount: { value: '$150.00' },
      action: { isDeletable: true },
    },
    {
      order: { value: '#12346' },
      date: { value: '2024-03-13' },
      status: {
        value: 'Pending',
      },
      payment: {
        value: 'Pending',
      },
      amount: { value: '$200.00' },
      action: { isDeletable: false },
    },
    {
      order: { value: '#12347' },
      date: { value: '2024-03-12' },
      status: {
        value: 'Cancelled',
      },
      payment: {
        value: 'Failed',
      },
      amount: { value: '$99.99' },
      action: { isDeletable: true },
    },
  ];
  return (
    <div className="rounded-lg  border border-stroke bg-white py-1 shadow-sm dark:border-strokedark dark:bg-boxdark">
      <div className="flex flex-col gap-2">
        <div className="flex justify-between items-center p-1 px-6">
          <div className="flex gap-4 text-[#969696]">
            <div className="text-[#152C55]">All</div>
            <div>Unpaid</div>
            <div>Unfullfilled</div>
            <div>+</div>
          </div>
          <div className="flex gap-4 items-center">
            {/* حقل إدخال التاريخ */}
            <input
              type="date"
              className="border border-gray-3 rounded-xl bg-white shadow-sm py-1.5 px-4 text-sm dark:bg-boxdark dark:border-strokedark"
            />

            {/* زر Status مع Dropdown */}
            <div className="relative">
              <button
                // onClick={() => setShowDropdown(!showDropdown)}
                className="flex items-center gap-2 border border-gray-3 rounded-xl bg-white shadow-sm py-1.5 px-4 text-sm dark:bg-boxdark dark:border-strokedark"
              >
                All Status
                <FaChevronDown className="text-gray-500 text-xs" />
              </button>
            </div>

            {/* زر Filter مع أيقونة */}
            <button className="flex items-center gap-2 border border-gray-3 rounded-xl bg-white shadow-sm py-1.5 px-4 text-sm dark:bg-boxdark dark:border-strokedark">
              <img src={filter} className="text-gray-500 text-sm" />
              Filter
            </button>
          </div>
        </div>
        <div className="border-b border-stroke"></div>
        <div className="relative w-full px-4">
          <MdSearch
            className="absolute left-6 top-1/2 -translate-y-1/2 text-gray"
            size={20}
          />
          <input
            type="text"
            placeholder="Search anything here...."
            className="w-full font-light text-sm pl-8 pr-4 py-1.5 rounded-lg bg-white text-[#A5A5A5] border border-stroke shadow-sm focus:outline-none focus:ring-2 focus:ring-primary"
          />
        </div>
        <Table columns={columns} data={data} />
      </div>
    </div>
  );
};

export default ThirdSection;
