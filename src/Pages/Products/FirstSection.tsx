import React from 'react';

const FirstSection = () => {
  const userInfo = [
    { key: 'Status', value: 'active' },
    { key: 'Phone', value: '+963 954 597 362' },
    { key: 'Location', value: 'Syria' },
    { key: 'Email', value: 'rdasouki6@gmail.com' },
    { key: 'Role', value: 'Frontend Developer' },
    { key: 'Joined', value: '2024-01-15' },
  ];
  return (
    <>
      <div className="rounded-lg border overflow-auto h-[98px] border-stroke bg-white p-6 shadow-sm dark:border-strokedark dark:bg-boxdark">
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-6 gap-1 min-w-[600px]">
          {userInfo.map((item, index) => {
            const isStatus = item.key.toLowerCase() === 'status';

            let statusColor = 'text-primary'; // اللون الافتراضي
            if (isStatus) {
              switch (item.value.toLowerCase()) {
                case 'active':
                  statusColor = 'text-green-600  bg-green-100 border-green-200';
                  break;
                case 'inactive':
                  statusColor = 'text-red-600 bg-red-100 border-red-200';
                  break;
                case 'pending':
                  statusColor = 'text-yellow-600 bg-yellow-100 border-yellow-200';
                  break;
                default:
                  statusColor = 'text-gray-600 bg-gray-100 border-gray-200';
                  break;
              }
            }

            return (
              <div
                key={index}
                className="flex flex-col items-start gap-1.5 min-w-[140px]"
              >
                <span className="text-xs text-graydark dark:text-gray-300">
                  {item.key}
                </span>
                <span
                  className={`text-sm dark:text-white truncate overflow-hidden max-w-[160px]  ${
                    isStatus &&
                    'text-xs font-bold p-1 px-1.5 rounded-lg border '
                  } ${statusColor}`}
                >
                  {item.value}
                </span>
              </div>
            );
          })}
        </div>
      </div>
    </>
  );
};

export default FirstSection;
